import React from 'react';
import './App.css';
import { searchArtist } from './actions';
import { searchAlbums } from './actions';
import { connect } from 'react-redux';

class App extends React.Component { // pedir datos en component did mount

  componentDidMount() {
      this.props.searchArtist('The');
      this.props.searchAlbums('2BTZIqw0ntH9MvilQ3ewNY');
  }

  render() {

    // en el return falta insertar el componente "Input" que esta en otro branch
    
    return (
      <div id="container">

          HOLA

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
  searchAlbums: artistId => dispatch(searchAlbums(artistId))
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(App)