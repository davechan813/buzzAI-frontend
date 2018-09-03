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
    let startTime = Datetime.moment(this.props.start);
    let endTime = Datetime.moment();
    return current.isAfter(startTime) && current.isBefore(endTime);
  };

  render() {
    const { classes, onChange, defaultValue } = this.props;

    return (
      <div className={classes.dateTime}>
        <Typography>{this.props.label}</Typography>
        <Datetime
          dateFormat="YYYY-MM-DD"
          onChange={onChange}
          closeOnSelect
          isValidDate={this.isValid}
          timeFormat={false}
          defaultValue={defaultValue}
        />
      </div>
      
    );
  }
}

DatePicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePicker);