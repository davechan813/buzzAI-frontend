import React, { Component } from 'react';
import TrendInputGroup from '../components/TrendInputGroup';
import TrendTimeDataDisplay from '../components/TrendTimeDataDisplay';
import TrendRegionDataDisplay from '../components/TrendRegionDataDisplay';

class KeywordTrend extends Component {
	constructor(props) {
		super(props);
		this.state = {
      data: [],
      function: 'region',
		};
	}

	setParentState = (name, value) => this.setState({ [name]: value });

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

    console.log(this.state);

		return (
			<div style={getStyle()}>
				<TrendInputGroup setParentState={this.setParentState} />
        {this.state.function === 'region' &&
         this.state.data.length > 0 && 
         <TrendRegionDataDisplay data={this.state.data} />
        }
        {this.state.function === 'time' &&
         this.state.data.length > 0 && 
         <TrendTimeDataDisplay data={this.state.data} />
        }
			</div>
		);
	}
}

export default KeywordTrend;
