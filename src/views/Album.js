import React from 'react';
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom';
import Header from '../components/Header';
import TrackContainer from '../components/TrackContainer';
import {searchAlbumID} from '../actions'

class Album extends React.Component {
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

        this.props.searchAlbumID(mystring)
    }

    render() {
        const { error, loading, currentListOfTracks, currentAlbumName, currentAlbumArtist, currentAlbumReleaseDate, currentAlbumImg} = this.props;
        console.log(currentListOfTracks)
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            );
        }
/*
*/
        return (

            <div className="main_view">
                
                <Header haveSearchBar={true} />

                <hr />
                <div className="shadow p-3 mb-5 bg-white rounded">
                    <h1>{currentAlbumName}</h1>
                    <p>{currentAlbumArtist} - {currentAlbumReleaseDate}</p> 
                    <img src={currentAlbumImg} alt="Album logo "/>
                </div>     
                

                <hr />
                <Route>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item "><Link to="/artistsearch">ArtistSearch</Link></li>         
                            <li className="breadcrumb-item "><Link to="/artist">{currentAlbumArtist}</Link></li>    
                            <li className="breadcrumb-item active"><Link to="/album">{currentAlbumName}</Link></li>    
                        </ol>
                    </nav>
                </Route>
                <hr />
                <TrackContainer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {    
        currentListOfTracks: state.spotifyReducers.currentListOfTracks,
        currentAlbumName: state.spotifyReducers.currentAlbumName,
        currentAlbumArtist: state.spotifyReducers.currentAlbumArtist,
        currentAlbumReleaseDate: state.spotifyReducers.currentAlbumReleaseDate,
        currentAlbumImg: state.spotifyReducers.currentAlbumImg
    }
}
  
  const mapDispatchToProps = dispatch => ({
    searchAlbumID: albumID => dispatch(searchAlbumID(albumID)),
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Album)