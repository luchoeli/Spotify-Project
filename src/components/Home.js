import React from 'react';
import { connect } from 'react-redux'
import spotifyReducers from '../reducers'
import FavoriteContainer from './FavoriteContainer'
import {searchArtist} from '../actions/index'
import '../stylecheet/Home.css'

class Home extends React.Component {

    constructor(props){
        super(props)
        this.input_ref = React.createRef();
        this.onSubmit = this.onSubmit.bind(this)  

    }

    onSubmit(e){
       
       
    }

   

    componentDidUpdate(){

    }
   

    render(){
        return(
            <div id="home_container">
                <h4>Welcome to</h4>
                <h1>Spotisearch</h1>
                <p>Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!</p>
                <form onSubmit={this.onSubmit}>
                    <input type="search" id="artistSearch" name="q" aria-label="Search through site content"
                    placeholder="Type the name of your favorite artist" ref={this.artistSearchRef}/>
                </form>
                <FavoriteContainer />
            </div>
        ) // FAVORITE SONGS SOLO SE MUESTRA CUANDO HAY AL MENOS 1 CANCION, ¿ES COMPONENTE?
        
    }
} 

const mapStateToProps = (state) => {
    return {    
        currentSearch: state.spotifyReducers.currentSearch,
        favsElements: state.spotifyReducers.favsElements,
    }
}
  
  const mapDispatchToProps = dispatch => ({
    searchArtist: artist => dispatch(searchArtist(artist)),
   
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Home)
