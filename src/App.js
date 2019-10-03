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

  handleItemClick = id => {
    console.log(id);
    // const newArray = this.shuffleArray(this.state.data);
    // let newArray = this.state.data[id-1];
    let newArray = this.state.data;
    let guessedCorrectly = false;

    // console.log(newArray);

    // check the clicked state. if true then alert user and reset game. If false then incremet score and set clicked to true...
    newArray.map(e => {
      if (e.id == id) {
        // check state.clicked
        if (!e.clicked) {
          // User hasn't clicked it yet. so update the value and set iterator
          e.clicked = true;
          guessedCorrectly = true;
        }
      }
    });

    if (guessedCorrectly) {
      this.handleCorrect();
    } else {
      this.handleIncorrect();
    }

    newArray = this.shuffleArray(newArray);
    this.setState({data: newArray});
  };

  handleCorrect() {
    const newScore = this.state.score + 1;
    const topScore = this.state.topScore;
    const newTopScore = Math.max(newScore,topScore);
    this.setState({score: newScore, topScore: newTopScore});
  };

  handleIncorrect() {
    alert("Bad Guess");
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
          key={0}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Wrapper>
          <Jumbotron></Jumbotron>
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
