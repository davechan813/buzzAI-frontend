import React, { Component } from 'react';
import BuzzWordData from '../components/BuzzWordData';
import BuzzWordInput from '../components/BuzzWordInput';
import './BuzzWord.css';

class BuzzWord extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			address: ''
		};
	}
 
	// function to get data from its child and set to its own state
	setProps = (name, val) => this.setState({ [name]: val });

	render() {
		return (
			<div style={{ marginTop: 50 }}>
				<BuzzWordInput setProps={this.setProps} />
				{ this.state.data.length > 0 && 
          <BuzzWordData data={this.state.data} address={this.state.address} />
				}
			</div>
		);
	}
}

export default BuzzWord;
