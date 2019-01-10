import React from 'react';
import './App.css';
import { searchArtist, searchAlbums, searchTracks } from './actions';
import { connect } from 'react-redux';
import Header from './components/Header.js';

class App extends React.Component { // pedir datos en component did mount

  componentDidMount() {
      this.props.searchArtist('The'); // ejemplo de busqueda en la api
      this.props.searchAlbums('2BTZIqw0ntH9MvilQ3ewNY'); // ejemplo de albumes desde la api
      this.props.searchTracks('6akEvsycLGftJxYudPjmqK'); // ejemplo de canciones desde la api
  }

  render() {

    // en el return falta insertar el componente "Input" que esta en otro branch
    
    return (
      <div id="container">

          <h1>Texto de prueba</h1>

          <Header haveSearchBar={ true } />


      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    favsElements: state.spotifyReducers.favsElements
  }
}

const mapDispatchToProps = dispatch => ({
  searchArtist: artist => dispatch(searchArtist(artist)),
  searchAlbums: artistId => dispatch(searchAlbums(artistId)),
  searchTracks: albumId => dispatch(searchTracks(albumId))
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(App)