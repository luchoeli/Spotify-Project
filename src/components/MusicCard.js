import React from 'react';

import Star from './Star'

const MusicCard = (props) => {
    return (
        <div className="music-card">
            <img src={props.albumImg} alt={'imagen of album'} />
            <div className="SongInfo">
                <p> <strong>{props.name}</strong></p>
                <p>Artist: {props.artist} </p>
                <p>Album: {props.album}</p>
                <Star isFav={true} onClick={props.onClick}/>
            </div>
        </div>      
    );
  }

  export default MusicCard;