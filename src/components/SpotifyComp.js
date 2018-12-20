import React from 'react';

class SpotifyComp extends React.Component {
 
  render() {
    return (
      <div id="container">

            <NavigationSide />
            <hr />
            <Home />
            <hr />
            <ArtistSearch />
            <hr />
            <Artist />
            <hr />
            <Album />

      </div>
    )// route 1 = Home | route 2 = ArtistSearch | route 3 = Artist | route 4 = Album  
  }
}

export default SpotifyComp;