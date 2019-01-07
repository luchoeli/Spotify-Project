import React, { Component } from 'react';
import '../stylecheet/FavoriteStyle.css'
import Star from './Star'
class MusicCard extends Component {

    removeFav(e){
       
       
    }
    render() {
        return (
            <div className="MusicCard">
                <img src={this.props.albumImg} alt={'imagen of album'} />
                <div className="SongInfo">
                    <p> <strong>{this.props.name}</strong></p>
                    <p>Artist: {this.props.artist} </p>
                    <p>Album: {this.props.album}</p>
                    <Star isFav={true} onClick={this.props.onClick}/>
                </div>
            </div>      
        );
    }
}

export default MusicCard;