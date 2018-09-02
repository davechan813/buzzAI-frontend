import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import './DatePicker.css';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  dateTime: {
    margin: theme.spacing.unit,
  }
});


class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isValid = current => {
    let yesterday = Datetime.moment().subtract(1, 'day');
    return current.isAfter(yesterday);
  };

  render() {
    const { classes, onChange } = this.props;
    return (
      <div className={classes.dateTime}>
        <Typography>{this.props.label}</Typography>
        <Datetime dateFormat="YYYY-MM-DD" onChange={onChange} closeOnSelect isValidDate={this.isValid} timeFormat={false} />
      </div>
      
    );
  }
}

DatePicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePicker);