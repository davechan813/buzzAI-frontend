import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField, MenuItem, Paper, Button } from '@material-ui/core';
import PlacesAutocomplete from 'react-places-autocomplete';
import axios from 'axios';
import { isEqual, isEmpty, differenceWith } from 'lodash';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 80,
  },
  buttonText: {
    fontSize: 15,
    letterSpacing: 0.8
  },
});

let isArrayEqual = (x, y) => {
  return isEmpty(differenceWith(x, y, isEqual));
}

let popularityCompare = (x, y) => {
  let keyA = x.popularity_count,
    keyB = y.popularity_count;

  return keyB - keyA;
}

let row_id = 0;

class BuzzWordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      selected: ''
    };
  }

  handleAddressChange = address => this.setState({ address });
  handleAddressSelect = selected => this.setState({ address: selected });

  getValidData = (arrayData) => {
    let word = arrayData.name;
    let url = arrayData.url;
    let count = arrayData.tweet_volume;

    let obj = {
      id: row_id, //defined above class header (see above)
      buzz_word: word,
      source_url: url,
      popularity_count: count,
    }

    row_id += 1;

    return obj;
  }

  handleSearch = () => {
    let self = this;

    axios.post('http://buzzai-env-2.us-east-2.elasticbeanstalk.com/buzz10', {
      placeName: self.state.address
    })
      .then(function (response) {
        let trendsArray = response.data[0].trends;

        trendsArray.sort(popularityCompare);
        let dataHasChanged = isArrayEqual(self.state.data, trendsArray);
        let data_to_set = [];
        if (dataHasChanged) {
          for (var i = 0; i < trendsArray.length; i++) {
            data_to_set.push(self.getValidData(trendsArray[i]));
          }
        }
        self.props.setProps('data', data_to_set); // set data to its parent's state so data can be passed to BuzzWordData
        self.props.setProps('address', response.data[0].locations[0].name); // set data to its parent's state so data can be passed to BuzzWordData
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleSearch();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div style={{ display: 'inline-block' }}>
          <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleAddressChange}
            onSelect={this.handleAddressSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  style={{ minWidth: 300, height: 30, marginTop: 16, backgroundColor: 'rgba(0, 0, 0, 0)',
                    padding: ''}}
                  {...getInputProps({
                    placeholder: 'Search Cities or Countries...',
                    className: 'location-search-input',
                  })}
                  onKeyDown={this.handleKeyPress} // listen for enter key pressd
                />
                <div style={{ position: 'absolute', marginTop: 46 }} >
                  {loading && <MenuItem>Loading...</MenuItem>}
                  <Paper
                    style={{ background: 'rgba(255,255,255, 1.0)', width: 300 }}
                    square
                  >
                    {suggestions.map(suggestion => {
                      console.log(suggestion);
                      return (
                        <MenuItem
                          key={'item-' + suggestion.description}
                          {...getSuggestionItemProps(suggestion)}
                        >
                          {suggestion.description}
                        </MenuItem>
                      );
                      // if (suggestion.description.split(', ').length === 1 || // country name
                      //     suggestion.description.split(', ').length === 3) { // city name
                      //   return (
                      //     <MenuItem
                      //       key={'item-' + suggestion.description}
                      //       {...getSuggestionItemProps(suggestion)}
                      //     >
                      //       {suggestion.description}
                      //     </MenuItem>
                      //   );
                      // } else {
                      //   return undefined;
                      // }
                    })}
                  </Paper>
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
        <div style={{ display: 'inline-block' }}>
          <Button
            onClick={this.handleSearch}
            variant="contained"
            size="medium"
            color="primary"
            className={classes.button}
            id="buzz-button"
          >
            <span className={classes.buttonText} id="buzz-button-text">Buzz!</span>
          </Button>
        </div>
      </div>
    );
  }
}


BuzzWordInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BuzzWordInput);
