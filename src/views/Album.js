import React from 'react';
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom';
import Header from '../components/Header';
import TrackContainer from '../components/TrackContainer';
import {searchAlbumID} from '../actions'
import Loading from '../components/Loading';

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
    }

    render() {
        const { error, loading, currentAlbum} = this.props;
    
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        const breadcrumb = (
            <Route>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item "><Link to="/artistsearch">ArtistSearch</Link></li> 
                        {currentAlbum && <li className="breadcrumb-item "><Link to="/artist">{currentAlbum.artist}</Link></li>}
                        {currentAlbum && <li className="breadcrumb-item active"><Link to="/album">{currentAlbum.name}</Link></li>}
                    </ol>
                </nav>
            </Route>
        );

   
        return (
            <div className="main_view">
                <Header haveSearchBar={true} />
                <hr />
                { loading ? (
                    <Loading/>
                ) :
                (
                    currentAlbum ? (
                        <div>
                            <div className="shadow p-3 mb-5 bg-white rounded">
                                <div className="media">
                                    <img src={currentAlbum.image}  className="align-self-start mr-3" alt="Album Logo"/>
                                    <div className="media-body">
                                        <h3 className="mt-0">{currentAlbum.name}</h3>
                                        <p>{currentAlbum.artist} - {currentAlbum.release_date}</p>
                                    </div>
                                </div>
                                
                            </div>
                            <hr />
                            {breadcrumb}            
                            <hr />
                            <TrackContainer currentAlbum={this.props.currentAlbum} />
                        </div>
                    ) : (
                        <div>
                            {breadcrumb}
                            <p>album not found </p>
                        </div>
                    )
                )
                }
                
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