import React from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { withStyles } from '@material-ui/core';

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


class TweetView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            loading: false,
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log(this.state, nextState);
    //     // console.log(this.props, nextProps);
    //     return nextState.data !== this.state.data;
    // }


    generateTweets = () => {
        this.setState({ loading: true });
        let self = this;
        let url = 'http://buzzai-env-2.us-east-2.elasticbeanstalk.com/loadTweets?query=' + self.props.queryWord.replace(' ', '+');

        console.log("in generateTweets", url);

        axios.get(url, { crossdomain: true })
            .then(res => {
                console.log('got data from ', url);

                self.setState({ tweets: res.data.statuses, loading: false, });
                console.log('the axios buzzword tweet content data is...', res.data.statuses);
            })
            .catch(e => {
                console.log('error getting tweets', e);
            })
    }

    componentDidMount() {
        this.generateTweets();
    }


    render() {
        const { tweets, loading } = this.state;
        const { classes } = this.props;

        if (loading === false) {
            return (
                <Grid container direction='column' justify='center' alignItems='flex-end'>
                    <Paper>
                        <div>
                            <Typography variant="title" id="tableTitle" classes={{ title: classes.title }}>
                                Twitter Users on {this.props.queryWord}
                            </Typography>
                        </div>

                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Recent Tweets</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow>
                                    <TableCell></TableCell>
                                </TableRow>
                                {
                                    tweets
                                        .map((row, index) => {
                                            return (
                                                <TableRow key={row.id_str}>
                                                    <TableCell>
                                                        {row.text}
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })
                                }
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            );
        }

        else return (<div> Loading... </div>);
    }
}



export default withStyles(styles)(TweetView);