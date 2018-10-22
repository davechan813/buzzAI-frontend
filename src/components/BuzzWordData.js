import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';

import './BuzzWordData.css';

const styles = theme => (
  {
    root: {
      margin: theme.spacing.unit * 3,
      flexWrap: 'wrap',
      overflowX: 'auto',
    },
    title: {
      flex: '0 0 auto',
      padding: '10px',
    },
  });

let popularityCompare = (x, y) => {
  let keyA = x.popularity_count,
    keyB = y.popularity_count;

  return keyB - keyA;
}

class BuzzWordData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 0,
      rowsPerPage: 10,
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  }

  render() {
    const { classes, data, address, setParentState } = this.props;
    const { page, rowsPerPage } = this.state;
    let rows = data.slice(); // immutability ftw
    rows.sort(popularityCompare);
    return (



      <Paper classes={classes.root}>
        <div>
          <Typography variant="title" id="tableTitle" classes={{ title: classes.title }}>
            Buzzwords in {address}
          </Typography>
        </div>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Buzzword</TableCell>
              <TableCell>Hit Count</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {index + 1 + page * rowsPerPage}
                      </TableCell>
                      <TableCell onClick={() => setParentState(row.buzz_word)} component="th" scope="row">
                        {row.buzz_word}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.popularity_count}
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
          rowsPerPageOptions={[10]}
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
