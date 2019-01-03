import React from 'react';
import { connect } from 'react-redux'
import {searchArtists} from '../actions/index'
import { Route, Link } from 'react-router-dom';

class Artist extends React.Component {

    constructor() {
        super();

        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        var mystring = this.props.location.search.replace('?sort=','');

        console.log("tu busqueda fue " + mystring);

        // el id se encuentra en "mystring", ¿lo pongo como estado?
    }

    onSearch(text) {

        this.props.searchArtists(text);

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
    searchArtists: artist => dispatch(searchArtists(artist)),
   
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Artist)