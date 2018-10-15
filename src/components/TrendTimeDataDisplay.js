import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import DataTable from './DataTable';
// import BarChart from './BarChart';
// import { Typography } from '@material-ui/core';
import LineChart from './LineChart';

const styles = theme => ({
  root: {
    // justifyContent: 'center',
    margin: theme.spacing.unit * 3,
    flexWrap: 'wrap',
    textAlign: 'center',
    // alignContent: 'center'
  },
});

class TrendTimeDataDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: true,
      chart: true,
      map: true
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.checked,
    });
  };

  render() {
    const { classes, data } = this.props;
    console.log(data);
    return (
      <div className={classes.root}>
        <FormGroup row style={{ textAlign: 'center' }}>
          <FormControlLabel
            style={{ position: 'relative', marginLeft: 'auto' }}
            control={
              <Checkbox
                checked={this.state.chart}
                onChange={this.handleChange('chart')}
                color="primary"
              />
            }
            label="Chart"
          />
          <FormControlLabel
            style={{ position: 'relative', marginRight: 'auto' }}
            control={
              <Checkbox
                checked={this.state.map}
                onChange={this.handleChange('map')}
                color="primary"
              />
            }
            label="Map"
          />
        </FormGroup>
        {this.state.chart && <LineChart data={data} />}
      </div>
    );
  }

}


TrendTimeDataDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrendTimeDataDisplay);