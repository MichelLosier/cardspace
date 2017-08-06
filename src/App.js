import React, { Component } from 'react';
import './App.css';

import Main from './components/main.component';


class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <Main/>
          </div>
      </div>
    );
  }
}

export default App;
