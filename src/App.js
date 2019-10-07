import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
// import data from './data.json'
import gameData from './data.json'
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import GameBoard from './components/gameBoard';
import Wrapper from './components/Wrapper'
import Gamecard from './components/gameCard';

class App extends Component {
  // State
  state = {
    score: 0,
    topScore: 0,
    data: []
  };

  // React LifeCycle
  componentDidMount() {
    this.setState({data: gameData});
  }

  // Custom Methods
  shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  };

  // Checks the card clicked value, if not clicked before we'll update value and then shuffle new array and update state...
  handleItemClick = id => {
      let guessedCorrect = false;
      
      let newData = this.state.data.map(item => {
        const newItem = { ...item };
        
        if (newItem.id === id) {
          if (!newItem.clicked) {
            newItem.clicked = true;
            guessedCorrect = true;
          }
        }
        return newItem;
      })
      
      // Shuffle the array...
      newData = this.shuffleArray(newData);
      
      // Update state w/New Array which has the clicked state set correctly...
      this.setState({data: newData});

      guessedCorrect ? this.handleCorrect() : this.handleIncorrect();
  };

  handleCorrect() {
    const newScore = this.state.score + 1;
    const topScore = this.state.topScore;
    const newTopScore = Math.max(newScore,topScore);
    this.setState({score: newScore, topScore: newTopScore});
  };

  handleIncorrect() {
    alert("Already clicked this card! Try again");
    this.setState({score: 0});
    this.resetData();
  };

  resetData() {
    // reset state to the original json file data...
    this.setState({data: gameData});
  };

  // Render
  render() {
    return (
      <React.Fragment>
        <Navbar
          //key={0}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron></Jumbotron>
        <Wrapper>
          <GameBoard>
            {this.state.data.map(data => (
              <Gamecard
                key={data.id}
                id={data.id}
                name={data.name}
                image={data.image}
                clicked={data.clicked}
                handleItemClick={this.handleItemClick}
              />
        ))}

          </GameBoard>
        </Wrapper>
      </React.Fragment>
        
    );
  }
}

export default App;
