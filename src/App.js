import React, { Component } from 'react';
import Fotoload from './Components/Fotoload';
import Navbar from './Components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Fotoload />
      </div>
    );
  }
}

export default App;
