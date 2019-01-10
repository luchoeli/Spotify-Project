
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MusicCard from './MusicCard'
import { deleteFavs } from '../actions'



class FavoriteContainer extends Component {

    render() {

        let favs = this.props.favsElements;

        return (
            <div>
                <h2>Favorite Songs</h2>
                <section className="cardContainer">
                    {favs.length > 0 && favs.map((song) => {
                        return (
                            <MusicCard key={song.id}
                                name={song.name}
                                artist={song.artist}
                                album={song.albumName}
                                albumImg={song.albumimage ? song.albumimage : "https://i.4pcdn.org/s4s/1510200817001.png"}
                                onClick={() => this.props.deleteFavs(song.id)}
                            />
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
        favsElements: state.spotifyReducers.favsElements
    }
}

const mapDispatchToProps = dispatch => ({
    deleteFavs: song => dispatch(deleteFavs(song)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoriteContainer)

