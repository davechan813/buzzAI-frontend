import React, { Component } from 'react';
import BuzzWordData from '../components/BuzzWordData';
import BuzzWordInput from '../components/BuzzWordInput';
import './BuzzWord.css';

class BuzzWord extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			address: '',
			loaded: false
		};
	}

	// function to get data from its child and set to its own state
	setProps = (name, val) => this.setState({ [name]: val });


	render() {

		const styleNotLoaded = {
      marginTop: 50,
      padding: '10%'
    };
		const styleLoaded = {
			marginTop: 50
		};

		const getStyle = () => {
			if(this.state.data.length > 0){
				return styleLoaded;
			} else {
				return styleNotLoaded;
			}
		}

		return (
			<div style={getStyle()} id="buzz-word-unit">

				<BuzzWordInput setProps={this.setProps} />
				{ this.state.data.length > 0 &&

					<BuzzWordData data={this.state.data} address={this.state.address} />
				}
			</div>
		);
	}
}

export default BuzzWord;
