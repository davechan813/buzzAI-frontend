import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import countries from '../static/countries';

function isValid(country) {
  for (var c of countries) {
    if (c.label === country) return true;
  }
  return false;
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label + ', ' + suggestion.subcountry, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function getSuggestions(country, value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;
  let suggestions = country ? require('../static/cities/cities-' + country + '.json') : [];
  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
      return suggestion.country === country
    }).filter(suggestion => {
      const keep =
        count < 5 && (suggestion.label + ', ' + suggestion.subcountry).slice(0, inputLength).toLowerCase() === inputValue;

      if (keep) {
        count += 1;
      }

      return keep;
    });
}

function getSuggestionValue(suggestion) {
  return suggestion.label + ', ' + suggestion.subcountry;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: 250
  },
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
});

class IntegrationAutosuggest extends React.Component {
  state = {
    single: '',
    popper: '',
    suggestions: [],
  };

  handleSuggestionsFetchRequested = country => ({ value }) => {
    this.setState({
      suggestions: getSuggestions(country, value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = (name) => (event, { newValue }) => {
    this.props.setCityInParent(newValue);    
    this.setState({
      [name]: newValue,
    });
  };

  componentWillReceiveProps = (nextProps) => {
    if (!isValid(nextProps.country)) {
      this.setState({ single: '' });
    }
  }

  renderInputComponent = country => inputProps => {
    const { classes, inputRef = () => {}, ref, ...other } = inputProps;

    return (
      <TextField
        disabled={!isValid(country)}
        fullWidth
        InputProps={{
          inputRef: node => {
            ref(node);
            inputRef(node);
          },
          classes: {
            input: classes.input,
          },
        }}
        {...other}
      />
    );
  }

  render() {
    const { classes, country } = this.props;

    const autosuggestProps = {
      renderInputComponent: this.renderInputComponent(country),
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested(country),
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion,
    };


    return (
      <div className={classes.root}>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder: !isValid(country) ? 'Select Country First' : 'All Cities in ' + country,
            value: this.state.single,
            onChange: this.handleChange('single'),
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
      </div>
    );
  }
}

IntegrationAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntegrationAutosuggest);