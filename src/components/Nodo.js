import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import Artist from '../views/Artist.js';
import ArtistSearch from '../views/ArtistSearch.js';
import Home from '../views/Home.js';

class Nodo extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Artist">Artist</Link></li>
            <li><Link to="/ArtistSearch">ArtistSearch</Link></li>
          </ul>
          <hr/>

          // All 3 components below would be rendered when in a homepage
          <Route exact path="/" component={Home}/>
          <Route exact path="/" component={Artist}/>
          <Route exact path="/" component={ArtistSearch}/>

          <Route path="/Artist" component={Artist}/>
          <Route path="/ArtistSearch" component={ArtistSearch}/>
        </div>
      </Router>
  )}
}

export default Nodo;