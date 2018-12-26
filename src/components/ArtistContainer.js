
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MusicCard from './MusicCard'
import '../stylecheet/FavoriteStyle.css'
import ArtistCard from './ArtistCard';


class ArtistContainer extends Component {
    render() {
        let artists = this.props.artists;
        console.log(artists)
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
       
    }
}
  
const mapDispatchToProps = dispatch => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistContainer)

