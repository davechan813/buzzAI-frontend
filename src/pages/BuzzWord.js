import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import InputGroup from '../components/InputGroup';
import DataDisplay from '../components/DataDisplay';
import Typography from '@material-ui/core/Typography';

class BuzzWord extends Component {
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
				<Typography variant='display2'>Building</Typography>
			</div>
		);
	}
}
  
export default BuzzWord;