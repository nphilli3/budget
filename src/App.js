import React, { Component } from 'react';
import './App.css';
import MyNavBar from './components/navbar.jsx'
import GetCostList from './components/itemList.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <MyNavBar/>
        </header>
        <GetCostList/>
      </div>
    );
  }
}

export default App;
