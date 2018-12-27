import React, { Component } from 'react';
import '../stylecheet/FavoriteStyle.css'
class ArtistCard extends Component {
    render() {
        return (
            <div className="MusicCard">
                <img src={this.props.artistImg} alt={'imagen of artist'} />
                <div className="SongInfo">
                    <p><strong>{this.props.artistName}</strong></p>
                </div>
            </div>
        );
    }
}

export default ArtistCard;