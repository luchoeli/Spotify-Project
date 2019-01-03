import React from 'react';
import ArtistContainer from '../components/ArtistContainer'
import { connect } from 'react-redux'
import {searchArtist} from '../actions/index'
import { Route, Link } from 'react-router-dom';
// deberia recibir como props un json con los resultados de la busqueda q?=ALGO

class ArtistSearch extends React.Component {

    constructor(props) {

        super(props);

    }

    onSearch(text) {
    
        this.props.searchArtist(text); // input del cuadro de busqueda

    }

    componentDidMount() {
        this.props.searchArtist("prueba");
        console.log(this.props.currentListOfArtist);
    }



    render() {
        debugger
        return(
            <div id="artist_search_container">

                <Route>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </Route>

                <h1> Artist </h1>

                <p> You are currently searching: "{this.props.currentSearch}" </p>

                <input placeholder={ 'aca ingresa nuevamente el artista' }/>

                <br />

               <ArtistContainer />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {    
        currentSearch: state.spotifyReducers.currentSearch,
        currentListOfArtist: state.spotifyReducers.favsElements,
    }
}
  
  const mapDispatchToProps = dispatch => ({
    searchArtist: artist => dispatch(searchArtist(artist)),
   
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(ArtistSearch)