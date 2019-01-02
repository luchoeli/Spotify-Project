import React from 'react';
import { connect } from 'react-redux'
import {searchArtist} from '../actions/index'
import '../stylecheet/Home.css'
import ArtistSearch from '../views/ArtistSearch';
import FavoriteContainer from '../components/FavoriteContainer'

class Home extends React.Component {

    constructor(props){
        super(props)
        this.input_ref = React.createRef();
        this.onSubmit = this.onSubmit.bind(this) 
    }

    onSubmit(e){
       
       
    }
   

    render(){
        return(

            <div id="home_container">
                <h4>Welcome to</h4>
                <h1>Spotisearch</h1>
                <p>Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!</p>
                <form onSubmit={this.onSubmit}>
                    <input type="search" id="artistSearch" name="q" aria-label="Search through site content"
                    placeholder="Type the name of your favorite artist" ref={this.input_ref}/>
                </form>
                <FavoriteContainer />
                <ArtistSearch/>
            </div>
            
        )
        
    }
} 

const mapStateToProps = (state) => {
    return {    
        currentSearch: state.spotifyReducers.currentSearch,
        favsElements: state.spotifyReducers.favsElements,
    }
}
  
  const mapDispatchToProps = dispatch => ({
   
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Home)
