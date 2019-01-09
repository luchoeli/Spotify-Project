import React from 'react'
import '../stylecheet/FavoriteStyle.css'
import { Link } from 'react-router-dom'

function AlbumCard(props) {
    return (
        <Link className="music-card" style={{ textDecoration: 'none' , color:'black'}} to={`/album/${props.id}`}>          
            <img src={props.albumImg} alt={'imagen of artist'} />
            <div className="SongInfo">
                <p><strong>{props.albumName}</strong></p>
                <p>{props.albumReleaseDate}</p>
            </div>                   
        </Link>
    );
  }

export default AlbumCard;
