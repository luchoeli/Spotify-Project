import React from 'react';
import { connect } from 'react-redux'
import { searchAlbums, searchTracks, searchArtistID} from '../actions/index'
import { Route, Link } from 'react-router-dom';
import AlbumContainer from '../components/AlbumContainer';
import Header from '../components/Header.js'

class Artist extends React.Component {

    constructor() {
        super();
        this.state = {
            busquedaEfectiva: ''
        }
    }
    componentDidMount() {
        var mystring = this.props.match.params.id;
        console.log("tu busqueda fue " + mystring);

        this.setState({
            busquedaEfectiva: mystring
        }); 

        this.props.searchAlbums(mystring)
        this.props.searchArtistID(mystring)
        this.props.searchTracks("1WMVvswNzB9i2UMh9svso5")
    }


    render() {
        const { error, loading, currentArtistImagen} = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

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

                <img src={currentArtistImagen} alt="logo de la banda"/>
                <AlbumContainer  busquedaEfectiva={ this.state.busquedaEfectiva }/>

                <hr />
            </div>
        )
        
    }
}


const mapStateToProps = (state) => {
    return {    
        currentSearch: state.spotifyReducers.currentSearch,
        currentListOfAlbums: state.spotifyReducers.currentListOfAlbums,
        currentListOfTracks: state.spotifyReducers.currentListOfTracks,

        currentArtistName: state.spotifyReducers.currentArtistName,
        currentArtistImagen: state.spotifyReducers.currentArtistImagen
    }
}
  
  const mapDispatchToProps = dispatch => ({
    searchAlbums: artist => dispatch(searchAlbums(artist)),
    searchArtistID: artist => dispatch(searchArtistID(artist)),
    searchTracks: albumID => dispatch(searchTracks(albumID))
   
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Artist)