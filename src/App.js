import React from 'react';
import './App.css';
import { searchArtist } from './actions';
import { connect } from 'react-redux';

class App extends React.Component { // pedir datos en component did mount

  componentDidMount() {
      this.props.searchArtist('The');
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
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(App)