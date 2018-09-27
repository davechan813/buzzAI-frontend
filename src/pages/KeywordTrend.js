import React, { Component } from 'react';
import InputGroup from '../components/InputGroup';
import DataDisplay from '../components/DataDisplay';

class KeywordTrend extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	setData = (data) => this.setState({data: data});

	// TODO: Add a progress bar when data is loading
	render() {
		// This part similar as in BuzzWord.js
		const styleNotLoaded = {
      padding: '10%'
    };
		const getStyle = () => {
			if(this.state.data.length > 0){
				return null;
			} else {
				return styleNotLoaded;
			}
		}

		return (
			<div style={getStyle()}>
				<InputGroup setData={this.setData} />
				{this.state.data.length > 0 && <DataDisplay data={this.state.data} />}
			</div>
		);
	}
}

export default KeywordTrend;
