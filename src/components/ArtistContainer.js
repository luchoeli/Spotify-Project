
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../stylecheet/FavoriteStyle.css'
import ArtistCard from './ArtistCard';
import {fetchArtistsSearch} from '../api/api'


class ArtistContainer extends Component {

    render() {
        
        let artists = this.props.currentListOfArtists;
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
        currentListOfArtists: state.spotifyReducers.currentListOfArtists
    }
}
  
const mapDispatchToProps = dispatch => ({
   // searchArtist: artist => dispatch(searchArtist(artist)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistContainer)

