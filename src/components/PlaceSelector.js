import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { getDataSet, reduce } from "iso3166-2-db";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// get default and keep only english. You should just import prebuild dataset
const listOfCountries = reduce(getDataSet(), "en");

const styles = theme => ({
  formControl: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 120,
  },
});

class PlaceSelector extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: '',
      selectedRegion: '',
    };
  }

  onCountryChange = event => {
    this.setState({
      selectedCountry: event.target.value,
      selectedRegion: ''
    });
    this.props.setGeo(event.target.value);
  }
    
  onRegionChange = event => {
    this.setState({
      selectedRegion: event.target.value,
    });
    this.props.setGeo(this.state.selectedCountry + '-' + event.target.value);
  }

  // render list of countries
  renderCountrySelector(classes) {
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="country">Country</InputLabel>
        <Select
          value={this.state.selectedCountry}
          onChange={this.onCountryChange}
          inputProps={{
            name: 'Country',
            id: 'country',
          }}
        >
          <MenuItem value="">All Country</MenuItem>
          { Object.keys(listOfCountries).sort(
              (a, b) => listOfCountries[a].name > listOfCountries[b].name ? 1 : -1
            ).map(isoCode =>
              <MenuItem key={isoCode} value={isoCode}>
                {listOfCountries[isoCode].name}
              </MenuItem>
            )
          }
        </Select>
      </FormControl>
    );
  }

  // render list of states for selected country
  renderStateSelector(classes) {
    const { selectedCountry, selectedRegion } = this.state;
    let regions = listOfCountries[selectedCountry].regions;
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="region">Region</InputLabel>
        <Select
          value={selectedRegion}
          onChange={this.onRegionChange}
          inputProps={{
            name: 'Region',
            id: 'region',
          }}
        >
          <MenuItem value="">All Region</MenuItem>
          {regions.sort((a, b) => (a.name > b.name ? 1 : -1)).map((region, index) =>        
            <MenuItem key={index + '-' + region.iso} value={region.iso}>
              {region.name}
            </MenuItem>
          )}
        </Select>
      </FormControl>
    );
  }

  componentWillUnmount = () => this.props.setGeo('');

  render() {
    const { selectedCountry } = this.state;
    const { classes } = this.props;
    return (
      <div>
        {this.renderCountrySelector(classes)}
        {selectedCountry !== "" && this.renderStateSelector(classes)}
      </div>
    );
  }
}


PlaceSelector.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlaceSelector);