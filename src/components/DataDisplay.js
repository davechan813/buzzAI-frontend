import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DataTable from './DataTable';
import DataChart from './DataChart';

const styles = theme => ({
  root: {
    // justifyContent: 'center',
    margin: theme.spacing.unit * 3,
    flexWrap: 'wrap',
    textAlign: 'center',
    // alignContent: 'center'
  },
});

class DataDisplay extends React.Component {
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

  // TODO: sort JOSN objects before rendering
  render() {
    const { classes, data } = this.props;
    // console.log(this.state);
    return (
      <div className={classes.root}>
        <FormGroup row style={{ textAlign: 'center' }}>
          <FormControlLabel
            style={{ position: 'relative', marginLeft: 'auto' }}
            control={
              <Checkbox
                checked={this.state.table}
                onChange={this.handleChange('table')}
                color="primary"
              />
            }
            label="Table"
          />
          <FormControlLabel
            style={{ position: 'relative' }}
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
        {this.state.table && <DataTable data={data} />}
        {this.state.chart && <DataChart data={data} />}
      </div>
    );
  }

}


DataDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataDisplay);