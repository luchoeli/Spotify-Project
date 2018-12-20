import React, { Component } from 'react';


class MusicCard extends Component {

    render() {
        return (
            //<Link to={this.props.routeUrl ? this.props.routeUrl : ''}>
                <div className="MusicCard">
                    <img src={this.props.albumImg} alt={'image of album'} />
                    <div className="SongInfo">
                        <p>{this.props.songName}</p>
                        <p>Artist: {this.props.artist} </p>
                        <p>Album: {this.props.album}</p>
                    </div>
                </div>
           // </Link>
        );
    }
}

export default MusicCard;