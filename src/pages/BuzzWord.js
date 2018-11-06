import React, { Component } from 'react';
import BuzzWordData from '../components/BuzzWordData';
import BuzzWordInput from '../components/BuzzWordInput';
import './BuzzWord.css';
import TweetView from '../components/TweetView';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';


class BuzzWord extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			address: '',
			loaded: false,
			word: '',
			clicked: false,
		};
	}

	// functions to get data from children and set to its own state
	setProps = (name, val) => this.setState({ [name]: val });
	setParentState = (buzzword) => this.setState({ word: buzzword, clicked: !this.state.clicked });

  // TODO: Add a progress bar when data is loading
	render() {
		const styleNotLoaded = {
			marginTop: 50,
			padding: '10%'
		};
		const styleLoaded = {
			marginTop: 50
		};
		const getStyle = () => {
			if (this.state.data.length > 0) {
				return styleLoaded;
			} else {
				return styleNotLoaded;
			}
		}

		console.log(this.state);
		const { classes } = this.props;

		return (
			<div style={getStyle()} id="buzz-word-unit">
				<BuzzWordInput setProps={this.setProps} />
				<Grid container direction='row' justify='center' alignItems='flex-start' id='grid-buzz-words' spacing={8} >

					<Grid item xs={12} md={6}>
						{
							this.state.data.length > 0 &&
							<BuzzWordData data={this.state.data} address={this.state.address} setParentState={this.setParentState} />
						}
					</Grid>

					<Grid item xs={12} md={6}>

						{
							this.state.clicked === true && <TweetView queryWord={this.state.word} />
						}
					</Grid>

				</Grid >
			</div>
		);
	}
}

export default (BuzzWord);
