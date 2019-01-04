import React from 'react';
import { connect } from 'react-redux'
import { searchAlbums, searchTracks} from '../actions/index'
import { Route, Link } from 'react-router-dom';
import AlbumContainer from '../components/AlbumContainer';
import Header from '../components/Header.js'

class Artist extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        var mystring = this.props.match.params.id;
        console.log("tu busqueda fue " + mystring);
        this.props.searchAlbums(mystring)
        this.props.searchTracks("1WMVvswNzB9i2UMh9svso5")
    }


    render() {
        const { error, loading, currentListOfAlbums, currentListOfTracks } = this.props;
        console.log(currentListOfAlbums)
        console.log(currentListOfTracks)
        
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        if(this.props.currentListOfAlbums.length>0){          
            return (                
                <div>
                <Header haveSearchBar={true} />

                <h1>ARTIST</h1>  
                <Route>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/artistsearch">Artist Search</Link></li>
                    </ul>
                </Route>

                <hr />

                <p>LOGO DE LA BANDA [X]</p>
                <h1> {this.props.name} </h1>
                <h3> {this.props.genero} </h3>

                <hr />


            </div>

            )
        }

        return(
            <p>No artist found for "{this.props.busquedaEfectiva}"</p>
        )   

    
    }
}


const mapStateToProps = (state) => {
    return {    
        currentSearch: state.spotifyReducers.currentSearch,
        currentListOfAlbums: state.spotifyReducers.currentListOfAlbums,
        currentListOfTracks: state.spotifyReducers.currentListOfTracks
    }
}
  
  const mapDispatchToProps = dispatch => ({
    searchAlbums: artist => dispatch(searchAlbums(artist)),
    searchTracks: albumID => dispatch(searchTracks(albumID)),
   
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Artist)