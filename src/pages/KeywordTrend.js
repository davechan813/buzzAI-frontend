import React, { Component } from 'react';
import NavBar from '../components/NavBar';
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

	render() {
		return (
			<div>
				<InputGroup setData={this.setData} />
				{this.state.data.length > 0 && <DataDisplay data={this.state.data} />}
			</div>
		);
	}
}
  
export default KeywordTrend;