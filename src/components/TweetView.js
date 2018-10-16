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

class TweetView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }

    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(this.state, nextState);
        // console.log(this.props, nextProps);
        return nextState.data !== this.state.data;
    }


    generateTweets = () => {
        let self = this;
        let url = 'http://buzzai-env-2.us-east-2.elasticbeanstalk.com/loadTweets?query=' + self.props.queryWord;

        axios.get(url, { crossdomain: true })
            .then(res => {
                console.log('got data from ', url);
                self.setState({ data: res.data });
                console.log('the axios buzzword tweet content data is...', res.data.statuses);

            })

            .catch(e => {
                console.log('error getting tweets', e);
            })
    }

    render() {
        this.generateTweets();
        return (
            <Grid container direction='column' justify='center' alignItems='flex-end'>

                <Paper>
                    <div>
                        <Typography variant="title" id="tableTitle" >
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
                            {
                                <TableRow>
                                    <TableCell></TableCell>
                                </TableRow>

                                // rows
                                //     .map((row) => {
                                //         return (
                                //             <TableRow key={row.id}>
                                //                 <TableCell onClick={this.props.setParentState(row.buzz_word)} component="th" scope="row">
                                //                     {row.buzz_word}
                                //                 </TableCell>
                                //             </TableRow>
                                //         );
                                //     })
                            }
                        </TableBody>
                    </Table>

                </Paper>
            </Grid>

        );
    }
}



export default (TweetView);