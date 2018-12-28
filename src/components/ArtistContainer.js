
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../stylecheet/FavoriteStyle.css'
import ArtistCard from './ArtistCard';
import {fetchArtistsSearch} from '../api/api'


class ArtistContainer extends Component {

    apiSearch(){
        let promise = fetchArtistsSearch(this.props.currentSearch);

        let artistArray = []

        promise.then(function(result) {

            for (let i = 0; i < result.artists.items.length; i++) {

                let element = {
                    name: result.artists.items[i].name,
                    id: result.artists.items[i].id,
                    images: result.artists.items[i].images,
                    genres: result.artists.items[i].genres
                };
                artistArray.push(element);
            }
      
            for ( let i = 0; i<artistArray.length; i++){
                console.log(artistArray[i].name);
            }
            console.log(artistArray)
            this.setState({
                currentListOfArtists: [...artistArray]
            })
            

		});
    }

    render() {
        let artists = this.props.currentListOfArtists;
        console.log(this.props.currentSearch)
        return ( 
            <div>
                <h2>Artistas</h2>
                <section className="cardContainer">                  
                    {
                        artists.length > 0 && artists.map((a) => {
                            return (
                                    <ArtistCard artistImg={a.images[2] ? a.images[2].url : "https://i.4pcdn.org/s4s/1510200817001.png" }
                                                artistName={a.name}/>
                            );
                        })
                    }

                </section>
            </div>
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

