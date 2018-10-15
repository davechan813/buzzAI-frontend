import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
    },
    paper: {
      padding: theme.spacing.unit * 2,
      marginTop: 25,
      [theme.breakpoints.up('sm')]: {
        width: 500,
      },
      [theme.breakpoints.up('lg')]: {
        width: 700,
      },
      [theme.breakpoints.up('xl')]: {
        width: 900,
      },
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
    const { classes, data, address } = this.props;
    const { page, rowsPerPage } = this.state;
    let rows = data.slice(); // immutability ftw
    rows.sort(popularityCompare);
    return (

      <Grid container direction='column' justify='center' alignItems='center' id='grid-buzz-words'>

        <Paper
          className={classes.paper}>
          <div className={classes.title}>
            <Typography variant="title" id="tableTitle" >
              Buzzwords in {address}
            </Typography>
          </div>

          <Table className={classes.table}>
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
                        <TableCell component="th" scope="row">
                          <a href={row.source_url} target="_blank">{row.buzz_word}</a>
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
      </Grid>

    );
  }
}

BuzzWordData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BuzzWordData);
