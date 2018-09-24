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
      rowsPerPage: 5,
    };
  }
  
  handleChangePage = (event, page) => {
    this.setState({ page });
  }

  render() {
    const { classes, data, address } = this.props;
    const { page, rowsPerPage } = this.state;
    let rows = data.slice(); // immutability ftw
    rows.sort(popularityCompare);

    return (

      <Paper className={classes.root}>
        <div className={classes.title}>
          <Typography variant="title" id="tableTitle">
            Buzzwords in {address}
          </Typography>
        </div>

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