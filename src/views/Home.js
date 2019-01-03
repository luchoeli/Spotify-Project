import React from 'react';
import { connect } from 'react-redux'
import FavoriteContainer from '../components/FavoriteContainer'
import {searchArtist} from '../actions/index'
import Header from '../components/Header.js';
import '../stylecheet/Home.css'


class Home extends React.Component {

    constructor(props){
        super(props)
    }

   //onKeyPress={this.handleOnEnterPress}
   
    render(){

        
        return(
            <div id="home_container">
                <Header haveSearchBar={ false } />

                <h4>Welcome to</h4>
                <h1><strong>Spotisearch</strong></h1>
                <p>Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!</p>
                <form action="/artistsearch/:q">
                    <input  type="search" 
                    id="artistSearch" name="q" aria-label="Search through site content"
                    placeholder="Search your favorite artist here" />
                </form>
                <FavoriteContainer />
            </div>
        ) // FAVORITE SONGS SOLO SE MUESTRA CUANDO HAY AL MENOS 1 CANCION, ¿ES COMPONENTE?
        
    }
} 

const mapStateToProps = (state) => {
    return {    
        //favsElements: state.spotifyReducers.favsElements,
    }
}
  
  const mapDispatchToProps = dispatch => ({
    //AsearchArtist: artist => dispatch(searchArtist(artist))
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Home)
