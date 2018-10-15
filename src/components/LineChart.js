import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    // Label,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    // ReferenceArea
} from 'recharts';
// import FormControl from '@material-ui/core/FormControl';
// import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';

const styles = theme => ({
});

function addField(data) {
  for (var i in data) {
    data[i].hit = data[i].value[0];
    data[i].index = i;
  }
  return data;
}

class StreamingDemo extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div>
        <LineChart
          width={800}
          height={450}
          data={addField(data)}
          style={{ position: 'relative', margin: 'auto' }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis name='Time' dataKey="formattedAxisTime" interval='preserveStartEnd' tickCount={10} />
          <YAxis name='Hit' dataKey="hit" />
          <Tooltip />
          <Line type="monotone" dataKey="hit" stroke="#EF5351" />
        </LineChart>
      </div>
    );
  }
}


export default withStyles(styles)(StreamingDemo);


