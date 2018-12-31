import React from 'react';
import { connect } from 'react-redux'
import {searchArtist, updateSearch} from '../actions/index'
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
    /*
    componentDidMount(){

    }

    componentWillReceiveProps(){

    }
    shouldComponentUpdate(nextProps, nextState) {
        return (nextState.currentSearch !== this.props.currentSearch && 
            nextState.currentListOfArtists ===  this.props.currentListOfArtists)
        }
        
        
        componentWillUpdate(){
            console.log("Will-UPDATE")
        }
        
        */
       handleOnEnterPress(e) {
           if (e.key === 'Enter') {
               e.preventDefault()
               console.log(this.state.input_ref.current.value)
               this.props.updateSearch(this.state.input_ref.current.value)
               this.props.searchArtist(this.state.input_ref.current.value)
        }
       
    }

    render() {
        const artist = <ArtistContainer/>
        
        return(
            <div id="artist_search_container">
                <h1> Artist </h1>
                <p> You are currently searching: "{this.props.currentSearch}" </p> 
                
                <form>
                    <input onKeyPress={this.handleOnEnterPress}  type="search" 
                    id="artistSearch" name="q" aria-label="Search through site content"
                    placeholder="Search your favorite artist here" ref={this.state.input_ref}/>
                </form>
                <br />
                {artist}
            </div>
        )
               // <ArtistContainer/>
    }
}

const mapStateToProps = (state) => {
    return {    
        currentSearch: state.spotifyReducers.currentSearch,
        currentListOfArtists: state.spotifyReducers.currentListOfArtists
    }
}
  
  const mapDispatchToProps = dispatch => ({
    searchArtist: artist => dispatch(searchArtist(artist)),
    updateSearch: input => dispatch(updateSearch(input))
   
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(ArtistSearch)