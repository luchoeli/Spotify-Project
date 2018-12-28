import React from 'react';
import { connect } from 'react-redux'
import {searchArtist} from '../actions/index'
import ArtistContainer from '../components/ArtistContainer'

// deberia recibir como props un json con los resultados de la busqueda q?=ALGO

class ArtistSearch extends React.Component {

    constructor(props) {
        super(props);
        this.input_ref = React.createRef();
        this.handleOnEnterPress = this.handleOnEnterPress.bind(this) 
        
        
    }    
    
    handleOnEnterPress(e) {
        
        if (e.key === 'Enter') {
            e.preventDefault()
            console.log(this.input_ref.current.value)
            this.setState({ currentSearch: this.input_ref.current.value})
        }
        console.log(this.props.currentSearch)
       
    }

  
    render() {

        return(
            
            <div id="artist_search_container">
                <h1> Artist </h1>
                <p> You are currently searching: "{this.props.currentSearch}" </p> 
                
                <form>
                    <input onKeyPress={this.handleOnEnterPress}  type="search" 
                    id="artistSearch" name="q" aria-label="Search through site content"
                    placeholder="Search your favorite artist here" ref={this.input_ref}/>
                </form>
                <br />
            </div>
        )
               //<ArtistContainer/>
    }
}

const mapStateToProps = (state) => {
    return {    
        currentSearch: state.spotifyReducers.currentSearch,
    }
}
  
  const mapDispatchToProps = dispatch => ({
    //searchArtist: artist => dispatch(searchArtist(artist)),
   
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(ArtistSearch)