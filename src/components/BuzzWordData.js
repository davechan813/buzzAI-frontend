import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
import Typography from '@material-ui/core/Typography';
import { isEqual, isEmpty, differenceWith } from 'lodash';

const styles = theme => ({
  root: {
    // justifyContent: 'center',
    margin: theme.spacing.unit * 3,
    flexWrap: 'wrap',
    textAlign: 'center',
    overflowX: 'auto',
    // alignContent: 'center'
  },

  table: {
    minWidth: 700,
  },

  title: {
    flex: '0 0 auto',
  }
});

let isArrayEqual = (x, y) => {
  return isEmpty(differenceWith(x, y, isEqual));
}

let popularityCompare = (x, y) => {
  let keyA = x.popularity_count,
    keyB = y.popularity_count;

  return keyB - keyA;
}

let id = 0;

class BuzzWordData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 0,
      rowsPerPage: 5,
    };
  }


  addBuzzWordToState = (arrayData) => {

    let word = arrayData.name;
    let url = arrayData.url;
    let count = arrayData.tweet_volume;

    let obj = {
      id: id, //defined above class header
      buzz_word: word,
      source_url: url,
      popularity_count: count,
    }

    id += 1;

    this.setState({ data: [...this.state.data, obj] });
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  }

  handleSearch = () => {
    let self = this;

    axios.post('http://buzzai-env-2.us-east-2.elasticbeanstalk.com/buzz10', {
      placeName: 'United States', // dummy location search query for now 
    })
      .then(function (response) {
        console.log("the response is:", self.state.data);

        let trendsArray = response.data[0].trends;
        trendsArray.sort(popularityCompare);
        let dataHasChanged = isArrayEqual(self.state.data, trendsArray);

        if (dataHasChanged) {
          for (var i = 0; i < trendsArray.length; i++) {
            self.addBuzzWordToState(trendsArray[i]);
          }
        }


      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    const { data, page, rowsPerPage } = this.state;
    let rows = data.slice(); // immutability ftw
    rows.sort(popularityCompare);

    return (

      <Paper className={classes.root}>
        <div className={classes.title}>
          <Typography variant="title" id="tableTitle">
            Today's Buzzwords
        </Typography>
        </div>
        <Button onClick={this.handleSearch}>Search in USA</Button>

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Buzzword</TableCell>
              <TableCell>Hit Count</TableCell>
              <TableCell>Source Link</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.buzz_word}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.popularity_count}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.source_url}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>

        <TablePagination
          component="div"
          page={page}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5]}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
        />

      </Paper>
    );
  }
}

BuzzWordData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BuzzWordData);