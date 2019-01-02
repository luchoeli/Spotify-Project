import React from 'react';
import { connect } from 'react-redux'
import {searchArtist} from '../actions/index'
import { Route, Link } from 'react-router-dom';

class Artist extends React.Component {

    constructor() {
        super();

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(text) {

        this.props.searchArtist(text);

    }


    render() {
        return (

            <div>

                <Route>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/artistsearch">Artist Search</Link></li>
                    </ul>
                </Route>

                <input placeholder={ 'ingresa el artista' } />

                <hr />

                <p>LOGO DE LA BANDA [X]</p>
                <h1> {this.props.name} </h1>
                <h3> {this.props.genero} </h3>

                <p> NAVIGATION SIDE </p>

                <hr />

                <p> ACA VA EL ALBUMES-CONTAINER </p>

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
  )(Artist)