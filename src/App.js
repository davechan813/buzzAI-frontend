import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import BuzzAI from './pages/BuzzAI';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  setData = (data) => this.setState({data: data});

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BuzzAI />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
