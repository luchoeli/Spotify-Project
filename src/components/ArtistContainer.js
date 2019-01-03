
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../stylecheet/FavoriteStyle.css'
import ArtistCard from './ArtistCard';
import {searchArtists} from '../actions'


class ArtistContainer extends Component {
    componentDidMount(){
        console.log("did mount")
    }
    render() {
        const { error, loading, currentListOfArtists } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        if(this.props.currentListOfArtists.length>0){
            return ( 
                <div>
                    <h2>Artistas</h2>
                    <section className="cardContainer">                  
                        {
                            currentListOfArtists.length > 0 && currentListOfArtists.map((a) => {

                                return (
                                        <ArtistCard key={a.id}
                                                    artistName={a.name}
                                                    artistImg={a.images[0] ? a.images[0].url : "https://i.4pcdn.org/s4s/1510200817001.png" }
                                                    />
                                );
                            })
                        }

                    </section>
                </div>
            )}
         return(
                <p>No artist found for "{this.props.busquedaEfectiva}"</p>
            )   
    }
}

const mapStateToProps = (state) => {
    return {    
        currentSearch: state.spotifyReducers.currentSearch,
        currentListOfArtists: state.spotifyReducers.currentListOfArtists,
        loading: state.spotifyReducers.loading,
        error: state.spotifyReducers.error
    }
}
  
const mapDispatchToProps = dispatch => ({
    searchArtists: artist => dispatch(searchArtists(artist)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistContainer)

