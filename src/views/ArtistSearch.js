import React from 'react';
import { connect } from 'react-redux'
import ArtistContainer from '../components/ArtistContainer'
import { Route, Link } from 'react-router-dom';
import { searchArtists } from '../actions';
// deberia recibir como props un json con los resultados de la busqueda q?=ALGO

class ArtistSearch extends React.Component {

    constructor() {
        super();
        this.state = {
            busquedaEfectiva: ''
        }
    }

    componentDidMount() {
        var mystring = this.props.location.search.replace('?q=','');

        console.log("tu busqueda fue " + mystring);

        this.setState({
            busquedaEfectiva: mystring
        });

        this.props.searchArtists(mystring);
    }

    render() {
        
        return(
            //TODO realizar componente Input para reutilizar
            <div id="artist_search_container">
                <h1> Artist </h1>
                <p> You are currently searching: <strong>{this.state.busquedaEfectiva}</strong> </p> 
              
                <br />

                <Route>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </Route>

                  <form action="/artistsearch" /*onSubmit={ this.checkInput }*/ > 
                    <input  type="search" 
                    id="artistSearch" name="q" aria-label="Search through site content"
                    placeholder="Search your favorite artist here" />
                </form>

                <br />

               <ArtistContainer busquedaEfectiva={ this.state.busquedaEfectiva } />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {    

    }
}
  
  const mapDispatchToProps = dispatch => ({
    searchArtists: artist => dispatch(searchArtists(artist)),
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(ArtistSearch)