import React, { Component } from 'react';
import './App.css';
import MyNavBar from './components/navbar.jsx'
import MyCard from './components/myCard.jsx'
import GetCostList from './components/itemList.jsx'
import CostForm from './components/costForm.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <MyNavBar/>
        </header>
        <MyCard cardTitle= "Add an Item"><CostForm/></MyCard>
        <GetCostList/>
      </div>
    );
  }
}

export default App;
