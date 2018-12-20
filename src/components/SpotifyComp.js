import React from 'react';
import Home from './Home'
class SpotifyComp extends React.Component {
 
  render() {
    return (
      <div id="container">
        <Home />
      </div>
    )// route 1 = Home | route 2 = ArtistSearch | route 3 = Artist | route 4 = Album  
  }
}
/*
<NavigationSide />
<hr />
<ArtistSearch />
<hr />
<Artist />
<hr />
<Album />
*/
export default SpotifyComp;