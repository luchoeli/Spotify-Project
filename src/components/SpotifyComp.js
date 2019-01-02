import React from 'react';

import ArtistSearch from '../views/ArtistSearch';
import Home from './Home';

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
