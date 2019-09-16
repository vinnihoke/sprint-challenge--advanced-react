import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import PlayerList from "./components/PlayerList";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     players: []
  //   };
  // }

  // componentDidMount() {
  //   fetch("http://localhost:5000/api/players")
  //     .then(res => res.json())
  //     .then(players => this.setState({ players }))
  //     .catch(err => console.log("Error on Fetch: ", err));
  // }

  render() {
    return (
      <div id="App">
        <Navbar />
        {/* <div id="PlayerList" data-testid="PlayerList">
          {this.state.players.map(player => {
            return (
              <div key={player.id}>
                <h2>{player.name}</h2>
                <h4>{player.country}</h4>
                <h5>{player.searches}</h5>
              </div>
            );
          })}
        </div> */}
        <PlayerList />
      </div>
    );
  }
}

export default App;
