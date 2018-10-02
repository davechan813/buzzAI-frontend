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
			if(this.state.data.length > 0){
				return styleLoaded;
			} else {
				return styleNotLoaded;
			}
		}

		return (
			<div style={getStyle()} id="buzz-word-unit">

				<BuzzWordInput setProps={this.setProps} />
<<<<<<< HEAD
				{ this.state.data.length > 0 &&
					<BuzzWordData data={this.state.data} address={this.state.address} />
=======
				{ this.state.data.length > 0 && 
          <BuzzWordData data={this.state.data} address={this.state.address} />
>>>>>>> 64371ed6d88d38aeb4ef91233f77116ab18fd2b3
				}
			</div>
		);
	}
}

export default BuzzWord;
