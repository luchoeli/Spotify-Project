import React from 'react';
import Home from './Home';
import ArtistSearch from '../views/ArtistSearch';

class SpotifyComp extends React.Component {
 
  render() {
    return (
      <div id="container">
          <ArtistSearch/> 
      </div>
    )
  }
}

export default SpotifyComp;
