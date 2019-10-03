import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import data from './data.json'
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
    this.setState({data});
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
    const newArray = this.shuffleArray(this.state.data);
    this.setState({newArray});
  };

  handleCorrect() {
    //const newTopScore = Math.max(newScore,topScore)
  };

  handleIncorrect() {

  };

  resetData() {

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
