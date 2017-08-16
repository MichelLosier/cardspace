import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Main from './components/main.component';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <Main/>
          </Router>
      </div>
    );
  }
}

export default App;
