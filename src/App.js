import React, { Component } from 'react';
import NavBar from './components/NavBar';
import InputGroup from './components/InputGroup';
import './App.css';
import DataDisplay from './components/DataDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  setData = (data) => this.setState({data: data});

  render() {
    console.log('data in App:', this.state.data);
    return (
      <div className="App">
        <NavBar />

        <InputGroup setData={this.setData} />
        <DataDisplay data={this.state.data} />
      </div>
    );
  }
}

export default App;
