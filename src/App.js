import React, { Component } from 'react';
import './App.css';
import MyNavBar from './components/navbar.jsx'
import MyCard from './components/myCard.jsx'
import GetCostList from './components/itemList.jsx'
import CostForm from './components/costForm.jsx'
import LoanCalc from './components/loanCalc.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <MyNavBar/>
        </header>
        <MyCard cardTitle= "Add an Item"><CostForm/></MyCard>
        <GetCostList/>
        <MyCard cardTitle= "Add an Item"><LoanCalc/></MyCard>
      </div>
    );
  }
}

export default App;
