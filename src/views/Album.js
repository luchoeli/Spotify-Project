import React from 'react';
import { Route, Link } from 'react-router-dom';
import Header from '../components/Header';
import { connect } from 'react-redux'
import { searchTracks } from '../actions/index'

class Album extends React.Component {

    componentWillMount() {
        var mystring = this.props.match.params.id;
        console.log("tu busqueda fue " + mystring);

        this.props.searchTracks(mystring)
        console.log(this.props.currentListOfTracks.length)
        debugger
    }

    render() {
        const { error, loading } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        if(this.props.currentListOfTracks.length>0){          
            return (                
                <div>
                <Header haveSearchBar={true} />

                <h1>ARTIST</h1>  
                <Route>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item "><Link to="/artistsearch">Artist</Link></li>         
                            <li className="breadcrumb-item "><Link to="/artist">artistName</Link></li>    
                            <li className="breadcrumb-item active"><Link to="/album">albumName</Link></li>    
                        </ol>
                    </nav>
                </Route>

                <hr />

        

                <hr />


            </div>

            )
        }

        return(
            <p>No album found for "{this.props.busquedaEfectiva}"</p>
        )   

    
    }
}

const mapStateToProps = (state) => {
    return {    
        currentListOfTracks: state.spotifyReducers.currentListOfTracks
    }
}
  
  const mapDispatchToProps = dispatch => ({
    searchTracks: albumID => dispatch(searchTracks(albumID))
  })
  
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(Album)

