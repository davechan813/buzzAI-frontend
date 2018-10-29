import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import TablePagination from '@material-ui/core/TablePagination';
// import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { withStyles } from '@material-ui/core';
import posed from 'react-pose';
import './TweetView.css';

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

const parentConfig = {
    open: {
        x: '0%',
        delayChildren: 200,
        staggerChildren: 50
    },
    closed: { x: '-100%', delay: 300 }
}

const childConfig = {
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 }
}


const Parent = posed.ul(parentConfig)
const Child = posed.li(childConfig)

class TweetView extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            loading: false,
            isOpen: false,
        }
    }

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

        setTimeout(this.toggle, 200);
    }


    toggle = () => this.setState({ isOpen: !this.state.isOpen });


    render() {
        const { tweets, loading, isOpen } = this.state;
        const { classes } = this.props;


        return (

            <div>
                <Parent className='list' pose={isOpen ? 'open' : 'closed'}>
                    {tweets.map(tweet => <Child key={tweet.id_str} className='item'>{tweet.text}</Child>)}
                </Parent>
            </div>
        );


        // else return (<div> Loading... </div>);
    }
}



export default withStyles(styles)(TweetView);