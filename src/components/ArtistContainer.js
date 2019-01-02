
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../stylecheet/FavoriteStyle.css'
import ArtistCard from './ArtistCard';
//import {fetchArtistsSearch} from '../api/api'
import {searchArtists} from '../actions'


class ArtistContainer extends Component {
    
    componentDidMount() {
        this.props.dispatch(searchArtists());
    }

    render() {
        const { error, loading, artists } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        //let artists = this.props.currentListOfArtists;
        console.log(artists)    
        console.log(this.props.currentListOfArtists.length)
        if(this.props.currentListOfArtists.length>0){
            return ( 
                <div>
                    <h2>Artistas</h2>
                    <section className="cardContainer">                  
                        {
                            artists.length > 0 && artists.map((a) => {

                                return (
                                        <ArtistCard key={a.id}
                                                    artistName={a.name}
                                                    artistImg={a.images ? a.images.url : "https://i.4pcdn.org/s4s/1510200817001.png" }
                                                    />
                                );
                            })
                        }

                    </section>
                </div>
            )}
         return(
                <p>No artist found for "{this.props.currentSearch}"</p>
            )   
    }
}

const mapStateToProps = (state) => {
    return {    
        currentSearch: state.spotifyReducers.currentSearch,
        currentListOfArtists: state.spotifyReducers.currentListOfArtists,
        artists: state.artists.items,
        loading: state.artists.loading,
        error: state.artists.error
    }
}
  
const mapDispatchToProps = dispatch => ({
    //searchArtist: artist => dispatch(searchArtist(artist)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistContainer)

