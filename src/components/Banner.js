import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Banner extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Typography variant='display2'>Building it now</Typography>
			</div>
		);
	}
}
  
export default Banner;