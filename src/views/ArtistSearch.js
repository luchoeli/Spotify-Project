import React from 'react';
import { connect } from 'react-redux'
import {searchArtists, updateSearch} from '../actions/index'
import ArtistContainer from '../components/ArtistContainer'

// deberia recibir como props un json con los resultados de la busqueda q?=ALGO

class ArtistSearch extends React.Component {

    constructor(props) {
        super(props);
       
        this.handleOnEnterPress = this.handleOnEnterPress.bind(this) 
        this.state = {
                        input_ref: React.createRef(),
                    }

    }    
    handleOnEnterPress(e) {
        if (e.key === 'Enter') {
            e.preventDefault()
            console.log(this.state.input_ref.current.value)
            this.props.updateSearch(this.state.input_ref.current.value)
            this.props.searchArtist(this.state.input_ref.current.value)
        }
       
    }

    render() {
        
        return(
            //TODO realizar componente Input para reutilizar
            <div id="artist_search_container">
                <h1> Artist </h1>
                <p> You are currently searching: "{this.props.currentSearch}" </p> 
                <form>
                    <input onKeyPress={this.handleOnEnterPress}  type="search" 
                    id="artistSearch" name="q" aria-label="Search through site content"
                    placeholder="Search your favorite artist here" ref={this.state.input_ref}/>
                </form>
                <ArtistContainer/>
                <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {    
        currentSearch: state.spotifyReducers.currentSearch,
        currentListOfArtists: state.spotifyReducers.currentListOfArtists
    }
}
  
  const mapDispatchToProps = dispatch => ({
    searchArtist: artist => dispatch(searchArtists(artist)),
    updateSearch: input => dispatch(updateSearch(input))
   
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(ArtistSearch)