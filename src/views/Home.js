import React from 'react';
import { connect } from 'react-redux'
import FavoriteContainer from '../components/FavoriteContainer'
import {searchArtist} from '../actions/index'
import Header from '../components/Header.js';
import '../stylecheet/Home.css'


class Home extends React.Component {

    constructor(props){
        super(props)
        this.input_ref = React.createRef();
        this.handleOnEnterPress = this.handleOnEnterPress.bind(this)  
        this.state = {
            input_ref: React.createRef()
        }

    }

    handleOnEnterPress(e) {
         if (e.key === 'Enter') {
            e.preventDefault()
            console.log(this.state.input_ref.current.value)
            this.props.searchArtist(this.state.input_ref.current.value)
            window.location.href = '/artistsearch'; // sacado de stackoverflow
            
            
         }
     }

   //onKeyPress={this.handleOnEnterPress}

    componentDidUpdate(){

    }
   
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
                    placeholder="Search your favorite artist here" ref={this.state.input_ref}/>
                </form>
                <FavoriteContainer />
            </div>
        ) // FAVORITE SONGS SOLO SE MUESTRA CUANDO HAY AL MENOS 1 CANCION, ¿ES COMPONENTE?
        
    }
} 

const mapStateToProps = (state) => {
    return {    
        favsElements: state.spotifyReducers.favsElements,
    }
}
  
  const mapDispatchToProps = dispatch => ({
    searchArtist: artist => dispatch(searchArtist(artist))
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Home)
