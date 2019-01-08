import React from 'react'
import '../stylecheet/FavoriteStyle.css'
import { Link } from 'react-router-dom'

function AlbumCard(props) {
    return (
        <Link style={{ textDecoration: 'none' , color:'black'}} to={`/album/${props.id}`}>

            <div className="MusicCard"> 
                    <img src={props.albumImg} alt={'imagen of artist'} />
                    <div className="SongInfo">
                        <p><strong>{props.albumName}</strong></p>
                        <p>{props.albumReleaseDate}</p>
                    </div>                   
            </div>
            
        </Link>
    );
  }

export default AlbumCard;
