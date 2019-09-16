import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(players => this.setState({ players }))
      .catch(err => console.log("Error on Fetch: ", err));
  }

  render() {
    return (
      <div id="App">
        <Navbar />
        <h1>React App Ready</h1>
        <div id="PlayerList" data-testid="PlayerList">
          {this.state.players.map(player => {
            return (
              <div key={player.id}>
                <h2>{player.name}</h2>
                <h4>{player.country}</h4>
                <h5>{player.searches}</h5>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
