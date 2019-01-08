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
    
        this.setState({
            busquedaEfectiva: mystring
        }); 

        this.props.searchAlbumID(mystring)
        console.log("montado")
    }

    render() {
        const { error, loading, currentAlbum} = this.props;
    
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
                    <div className="media">
                        <img src={currentAlbum.images}  className="align-self-start mr-3" alt="Album Logo"/>
                        <div className="media-body">
                            <h3 className="mt-0">{currentAlbum.name}</h3>
                            <p>{currentAlbum.artist} - {currentAlbum.release_date}</p>
                        </div>
                    </div>
                       
                </div>     

                <hr />
                <Route>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item "><Link to="/artistsearch">ArtistSearch</Link></li>         
                            <li className="breadcrumb-item "><Link to="/artist">{currentAlbum.artist}</Link></li>    
                            <li className="breadcrumb-item active"><Link to="/album">{currentAlbum.name}</Link></li>    
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
        currentAlbum: state.spotifyReducers.currentAlbum,
    }
}
  
  const mapDispatchToProps = dispatch => ({
    searchAlbumID: albumID => dispatch(searchAlbumID(albumID)),
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Album)