import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button, Switch } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import DatePicker from './DatePicker';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   geocodeByPlaceId,
//   getLatLng,
// } from 'react-places-autocomplete';
import axios from 'axios';
import moment from 'moment';
import PlaceSelector from './PlaceSelector';
import './InputGroup.css';

const styles = theme => ({
  root: {
    // display: 'flex',
    margin: theme.spacing.unit * 3,
    flexWrap: 'wrap',
    // textAlign: 'center',
    // alignContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    position: 'relative',
    margin: 'auto'
  },
  button: {
    margin: theme.spacing.unit,
    width: 80,
  },
  buttonText: {
    fontSize: 15,
    letterSpacing: 0.8
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  dateBox: {
    marginTop: theme.spacing.unit * 3,
    minWidth: 280
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  }
});

class InputGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      function: 'region',
      address: '',
      resolution: 'COUNTRY',
      startTime: moment(new Date(new Date().setFullYear(new Date().getFullYear() - 1))).format('YYYY-MM-DD'),
      endTime: moment(new Date()),
      geo: ''
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleChecked = name => event => {
    this.setState({
      [name]: event.target.checked,
    });
  }
  
  // handleAdressChange = address => this.setState({ address });
  // handleAdressSelect = selected => {
  //   this.setState({ isGeocoding: true, address: selected });
  //   geocodeByAddress(selected)
  //     .then(res => getLatLng(res[0]))
  //     .then(({ lat, lng }) => {
  //       this.setState({
  //         latitude: lat,
  //         longitude: lng,
  //         isGeocoding: false,
  //       });
  //     })
  //     .catch(error => {
  //       this.setState({ isGeocoding: false });
  //       console.log('error', error); // eslint-disable-line no-console
  //     });
  // };

  handleSearch = () => {
    let self = this;
    axios.post('http://localhost:3000/popularity', {
      keyword: self.state.keyword,
      startTime: self.state.startTime,
      endTime: self.state.endTime,
      resolution: self.state.geo === '' ? self.state.resolution : self.state.geo, // if there is geo, don't pass in resolution
      geo: self.state.geo,
    })
    .then(function (response) {
      // console.log("the response is:", response.data.default);
      self.props.setData(response.data.default.geoMapData);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onDateChange = name => moment => {
    if (moment.hasOwnProperty('_isAMomentObject')) {
      this.setState({
        [name]: moment.format('YYYY-MM-DD'),
      });
    }
  }

  setGeo = geo => this.setState({ geo: geo });

  render() {
    const { classes } = this.props;
    // console.log(this.state);
    return (
      <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            style={{ minWidth: 500 }}
            id="keyword"
            label="Keyword"
            className={classes.textField}
            value={this.state.keyword}
            onChange={this.handleChange('keyword')}
            margin="normal"
            required
          />
          <Button
            onClick={this.handleSearch}
            variant="contained"
            size="medium"
            color="primary"
            className={classes.button}
          >
            <span className={classes.buttonText}>Buzz!</span>
          </Button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FormControl
            style={{ display: 'inline-block' }}
            className={classes.formControl}
          >
            <FormLabel component="legend">Search Function</FormLabel>
            <RadioGroup
              aria-label="Search Function"
              name="function"
              className={classes.group}
              value={this.state.function}
              onChange={this.handleChange('function')}
            >
              <FormControlLabel 
                value="region" 
                control={<Radio color="primary" />}
                label="Interest By Region"
              />
              <FormControlLabel 
                value='time' 
                control={<Radio color="primary" />}
                label="Interest By Time"
              />
            </RadioGroup>
          </FormControl>

          <div style={{ display: 'inline-block' }} className={classes.dateBox}>
            <FormLabel component="legend">Time Range</FormLabel>
            <DatePicker
              onChange={this.onDateChange('startTime')}
              label='From'
              start={'2004-01-01'}
              defaultValue={this.state.startTime}
            />
            <DatePicker
              onChange={this.onDateChange('endTime')}
              label='To'
              start={this.state.startTime}
              defaultValue={this.state.endTime}
            />
          </div>
          
          <div style={{ display: 'inline-block' }} className={classes.formControl}>
            <FormLabel component="legend">Geo Info</FormLabel>
            <FormControlLabel
              style={{ marginTop: 4 }}
              control={
                <Switch
                  color='primary'
                  checked={this.state.geoInfo}
                  onChange={this.handleChecked('advanced')}
                />
              }
              label="Advanced Search"
            />
            <br />
            { !this.state.advanced ? 
              <FormControl>
                <InputLabel htmlFor="resolution">Resolution</InputLabel>
                <Select
                  style={{ minWidth: 160, textAlign: 'left' }}
                  value={this.state.resolution}
                  onChange={this.handleChange('resolution')}
                  inputProps={{
                    name: 'resolution',
                    id: 'resolution',
                  }}
                >
                  <MenuItem value={'COUNTRY'}>Country and Region</MenuItem>
                  <MenuItem value={'CITY'}>City</MenuItem>
                  <MenuItem value={'DMA'}>Designated Market Area (DMA)</MenuItem>
                </Select>
              </FormControl> :
              <PlaceSelector setGeo={this.setGeo} />
              // <PlacesAutocomplete
              //   value={this.state.address}
              //   onChange={this.handleAdressChange}
              //   onSelect={this.handleAdressSelect}
              // > 
              //   {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              //     <div style={{ display: 'flex', justifyContent: 'center' }}>
              //       <TextField
              //         style={{ width: 180, marginTop: 16 }}
              //         {...getInputProps({
              //           placeholder: 'Search Places',
              //           className: 'location-search-input',
              //         })}
              //       />
              //       <div style={{ position: 'absolute', marginTop: 46 }} >
              //         {loading && <MenuItem>Loading...</MenuItem>}
              //         <Paper style={{ background: 'rgba(255,255,255, 1.0)' }} square>
              //         { suggestions.map(suggestion => 
              //           <MenuItem
              //             key={'item-' + suggestion.description}
              //             {...getSuggestionItemProps(suggestion)}
              //           >
              //             {suggestion.description}
              //           </MenuItem>
              //         )}
              //         </Paper>
              //       </div>
              //     </div>
              //   )}
              // </PlacesAutocomplete>
            }
          </div>

        </div>
        
      </form>
      </div>
    );
  }    
}

InputGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputGroup);