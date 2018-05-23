import React, { Component } from 'react';
import SellerProfileContainer from "./seller/SellerProfileContainer.js"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SellerProfileContainer/>
      </div>
    );
  }
}

export default App;
