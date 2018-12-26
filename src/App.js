import React from 'react';
import Home from './Home.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div id="container">

            <NavigationSide />
            <hr />
            <Home />
            <hr />
            <ArtistSearch currentSearch={ this/* input de un cuadro de texto */ } />
            <hr />
            <Artist />
            <hr />
            <Album />

      </div>
    )
  }
}



export default App;
