import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import { render } from "react-dom";
import {
  BarChart,
  Bar,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
// import FormControl from '@material-ui/core/FormControl';
// import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';

const styles = theme => ({
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 120,
    textAlign: 'left'
  },
});

function sortData(data, method, type) {
  if (method === 'hit') {
    data.sort(function(a, b) {
      return type * (a.value[0] - b.value[0]);
    });
  } else {
    data.sort(function(a, b) {
      return type * ('' + a.geoName).localeCompare(b.geoName);
    });
  }
  for (var i in data) data[i].hit = data[i].value[0];
  return data;
}


class DataChart extends React.Component {
  constructor() {
    super();
    this.state = {
      method: 'hit',
      type: -1,
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div>
        {/* <div style={{ marginTop: 20 }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="method">Sort By</InputLabel>
            <Select
              value={this.state.method}
              onChange={this.handleChange('method')}
              inputProps={{
                name: 'method',
                id: 'method',
              }}
            >
              <MenuItem value={'name'}>Name</MenuItem>
              <MenuItem value={'hit'}>Hit</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="type">Type</InputLabel>
            <Select
              value={this.state.type}
              onChange={this.handleChange('type')}
              inputProps={{
                name: 'type',
                id: 'type',
              }}
            >
              <MenuItem value={-1}>Descending</MenuItem>
              <MenuItem value={1}>Ascending</MenuItem>
            </Select>
          </FormControl>
        </div> */}
        <BarChart
          width={800}
          height={450}
          data={sortData(data, this.state.method, this.state.type)}
          style={{ position: 'relative', margin: 'auto' }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis name='Name' dataKey="geoName" interval='preserveStart' />
          <YAxis name='Hit' dataKey="hit" />
          <Tooltip />
          <Bar dataKey="hit" fill="#EF5351" />
          <Brush dataKey='geoName' height={30} stroke="#EF5351" />
        </BarChart>
      </div>
    );
  }
}

export default withStyles(styles)(DataChart);

