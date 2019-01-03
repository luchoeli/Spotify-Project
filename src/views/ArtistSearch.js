import React from 'react';
import { connect } from 'react-redux'
import {searchArtists, updateSearch} from '../actions/index'
import ArtistContainer from '../components/ArtistContainer'
import { Route, Link } from 'react-router-dom';
// deberia recibir como props un json con los resultados de la busqueda q?=ALGO

class ArtistSearch extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {
        
        return(
            //TODO realizar componente Input para reutilizar
            <div id="artist_search_container">
                <h1> Artist </h1>
                <p> You are currently searching: "{this.props.currentSearch}" </p> 
              
                <br />

                <Route>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </Route>

                 <form action="artistsearch/:q">
                    <input  type="search" 
                    id="artistSearch" name="q" aria-label="Search through site content"
                    placeholder="Search your favorite artist here" />
                </form>

                <br />

               <ArtistContainer />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {    

    }
}
  
  const mapDispatchToProps = dispatch => ({
    //searchArtist: artist => dispatch(searchArtist(artist)),
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(ArtistSearch)