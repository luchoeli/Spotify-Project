import React from 'react'
import { connect } from 'react-redux'
import ArtistContainer from '../components/ArtistContainer'
import { Route, Link } from 'react-router-dom'
import { searchArtists } from '../actions'
import Input from '../components/Input'
import Header from '../components/Header'
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


        this.setState({
            busquedaEfectiva: mystring
        });

        this.props.searchArtists(mystring);
    }

    render() {
        
        return(
            //TODO realizar componente Input para reutilizar
            <div className="main_view">
                
                <Header haveSearchBar={ false } />

                <h1> Artists </h1>
                <p> You are currently searching: <strong>{this.state.busquedaEfectiva}</strong> </p> 

                <Input />

                <br />

                <Route>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item" aria-current="page"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page"><Link to="/artistsearch">Artists</Link></li>
                        </ol>
                    </nav>    
                </Route>

               <ArtistContainer busquedaEfectiva={ this.state.busquedaEfectiva } />

            </div>
        )
    }
}
  
  const mapDispatchToProps = dispatch => ({
    searchArtists: artist => dispatch(searchArtists(artist)),
  })
  
  export default connect (
    mapDispatchToProps
  )(ArtistSearch)