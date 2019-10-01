import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import GameBoard from './components/gameBoard';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>
      <GameBoard></GameBoard>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
