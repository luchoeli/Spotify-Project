import React from 'react';
import { connect } from 'react-redux'
import { searchAlbums, searchArtistID} from '../actions/index'
import { Route, Link } from 'react-router-dom';
import AlbumContainer from '../components/AlbumContainer';
import Header from '../components/Header.js'
import '../stylecheet/View.css'

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
    }


    render() {
        const { error, loading, currentArtistImagen, currentArtistName, currenteArtistGenre} = this.props;

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

        return (             
            <div className="main_view">
                <Header haveSearchBar={true} />
                <hr />
                <div className="artistInfo, shadow p-3 mb-5 bg-white rounded">
                    <h1>{currentArtistName}</h1>
                    <p>{currenteArtistGenre}</p> 
                    <img src={currentArtistImagen} alt="Artist logo "/>
                </div>     

                <Route>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item "><Link to="/artistsearch">Artist</Link></li>         
                            <li className="breadcrumb-item active"><Link to="/artist/">{currentArtistName}</Link></li>      
                        </ol>
                    </nav>
                </Route>

                <hr />
                <AlbumContainer  busquedaEfectiva={ this.state.busquedaEfectiva }/>

                <hr />
            </div>
        )
        
    }
}


const mapStateToProps = (state) => {
    return {    
        currentListOfAlbums: state.spotifyReducers.currentListOfAlbums,

        currentArtistName: state.spotifyReducers.currentArtistName,
        currentArtistImagen: state.spotifyReducers.currentArtistImagen,
        currenteArtistGenre: state.spotifyReducers.currentArtistGenre

    }
}
  
  const mapDispatchToProps = dispatch => ({
    searchAlbums: artist => dispatch(searchAlbums(artist)),
    searchArtistID: artist => dispatch(searchArtistID(artist)),
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Artist)