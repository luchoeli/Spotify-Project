import React, { Component } from 'react';
import '../stylecheet/FavoriteStyle.css'
class MusicCard extends Component {

    render() {
        return (
            <div className="music-card">
                <img src={this.props.albumImg} alt={'imagen of album'} />
                <div className="SongInfo">
                    <p> <strong>{this.props.name}</strong></p>
                    <p>Artist: {this.props.artist} </p>
                    <p>Album: {this.props.album}</p>
                </div>
            </div>      
        );
    }
}

export default MusicCard;