
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import MusicCard from './MusicCard'
import { deleteFavs } from '../actions'

class FavoriteContainer extends Component {
    render() {
        console.log(this.props.favsElements)
        let favs = this.props.favsElements;
        if (favs.length > 0 )
        return ( 
            <section className="favoriteSongs">
                <Router>
                    <Route>
                    {
                        favs.map((song) => {
                            return (
                                <Link to=''>
                                    <MusicCard  key = {song.id}
                                                title = {song.title} 
                                                artist = {song.artist}  
                                                album = {song.album} 
                                                albumImg = {song.albumImg}
                                    />
                                </Link>
                            );
                        })
                    }
                    </Route>
                </Router>
            </section>
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

