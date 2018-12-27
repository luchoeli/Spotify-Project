import React from 'react';
import './App.css';
import { searchArtist } from './actions';
import { connect } from 'react-redux';

class App extends React.Component { // pedir datos en component did mount

  componentDidMount() {
      this.props.searchArtist('The');
  }

  render() {

    
    
    //a.then(function(result){console.log(result.artists.items[3].name)});
    
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