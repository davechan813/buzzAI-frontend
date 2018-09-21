import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import InputGroup from '../components/InputGroup';
import DataDisplay from '../components/DataDisplay';

import axios from 'axios';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

import './BuzzWord.css';

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

class BuzzWord extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	setData = (data) => this.setState({data: data});

	handleAdressChange = address => this.setState({ address });
  handleAdressSelect = selected => {
    this.setState({ isGeocoding: true, address: selected });
    geocodeByAddress(selected)
      .then(res => getLatLng(res[0]))
      .then(({ lat, lng }) => {
        this.setState({
          latitude: lat,
          longitude: lng,
          isGeocoding: false,
        });
      })
      .catch(error => {
        this.setState({ isGeocoding: false });
        console.log('error', error); // eslint-disable-line no-console
      });
  };

	handleSearch = () => {
		let self = this;
		// axios.post('http://localhost:3000/popularity', {
		axios.post('http://buzzai-env-2.us-east-2.elasticbeanstalk.com/popularity', {
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

	render() {
		const { classes } = this.props; // for the use of classes

		return (
			<div>
				<Typography variant='display2'>Building</Typography>
				<PlacesAutocomplete
					value={this.state.address}
					onChange={this.handleAdressChange}
					onSelect={this.handleAdressSelect}
				>
					{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<TextField
								style={{ width: 180, marginTop: 16 }}
								{...getInputProps({
									placeholder: 'Search Places',
									className: 'location-search-input',
								})}
							/>
							<div style={{ position: 'absolute', marginTop: 46 }} >
								{loading && <MenuItem>Loading...</MenuItem>}
								<Paper style={{ background: 'rgba(255,255,255, 1.0)' }} square>
								{ suggestions.map(suggestion =>
									<MenuItem
										key={'item-' + suggestion.description}
										{...getSuggestionItemProps(suggestion)}
									>
										{suggestion.description}
									</MenuItem>
								)}
								</Paper>
							</div>
						</div>
					)}
				</PlacesAutocomplete>



				<Button
					onClick={this.handleSearch}
					variant="contained"
					size="medium"
					color="primary"
					 id="buzz-button-buzzword"
				>
					<span  >Buzz!</span>
				</Button>
			</div>

		);
	}
}

export default BuzzWord;
