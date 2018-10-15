import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import BuzzAI from './pages/BuzzAI';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
      primary: {
        main: '#EF5350',
      }
    }
});

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
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
            <BuzzAI />
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
