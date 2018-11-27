import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import DataTable from './DataTable';
import BarChart from './BarChart';

const styles = theme => ({
  root: {
    // justifyContent: 'center',
    marginBottom: theme.spacing.unit*2,
    flexWrap: 'wrap',
    textAlign: 'center',
    // alignContent: 'center'
  },
});

class TrendRegionDataDisplay extends React.Component {
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
    });
  };

  render() {
    const { classes, data } = this.props;
    return (
      <div className={classes.root}>
        <BarChart data={data} />
      </div>
    );
  }

}


TrendRegionDataDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrendRegionDataDisplay);