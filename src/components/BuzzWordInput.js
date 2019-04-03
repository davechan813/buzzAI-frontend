import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import { isEqual, isEmpty, differenceWith } from 'lodash';
import CountryAutoComplete from './CountryAutoComplete';
import CityAutoComplete from './CityAutoComplete';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 100,
    height: 45,
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
      country: '',
      city: '',
      loading: false
    };
  }

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

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    // console.log('self.state.country:', self.state.country);
    // console.log('self.state.city:', self.state.city);

    self.setState({ loading: true });

    // changed to buzz-jb.us-east-2.elasticbeanstalk.com/buzz10 was http://buzzai-env-2.us-east-2.elasticbeanstalk.com/buzz10
    axios.post('https://cors-anywhere.herokuapp.com/http://buzz-jb.us-east-2.elasticbeanstalk.com/buzz10', {
      placeName: self.state.country !== '' && self.state.city !== '' ?
        self.state.city + ', ' + self.state.country :
        self.state.country,
    }, config)
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
        // was response.data[0].locations[0].name
        self.props.setProps('address', 'this city'); // set data to its parent's state so data can be passed to BuzzWordData
        self.setState({ loading: false });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  setStateInParent = name => value => {
    this.setState({ [name]: value });
  }

  render() {
    // console.log('this.state:', this.state);
    const { classes } = this.props;
    return (
      <div>
        <div style={{ display: 'inline-block', margin: '0 10px' }}>
          <CountryAutoComplete
            setCountryInParent={this.setStateInParent('country')}
            setCityInParent={this.setStateInParent('city')}
          />
        </div>
        <div style={{ display: 'inline-block', margin: '0 10px' }}>
          <CityAutoComplete
            country={this.state.country}
            setCityInParent={this.setStateInParent('city')}
          />
        </div>
        <div style={{ display: 'inline-block' }}>
          { this.state.loading ? 
            <CircularProgress /> :
            <Button
              onClick={this.handleSearch}
              variant="contained"
              size="medium"
              color="primary"
              className={classes.button}
              // id="buzz-button"
            >
              <span className={classes.buttonText} id="buzz-button-text">Buzz!</span>
            </Button>
        }
        </div>
      </div>
    );
  }
}


BuzzWordInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BuzzWordInput);
