import React from 'react'
import { Link } from 'react-router-dom'

const ArtistCard = (props) => {
    return (
        <Link className=" music-card mi-card-link" to={`/artist/${props.id}`}>
            <img src={props.artistImg} alt={'imagen of artist'} />
            <div className="song-info">
                <p><strong>{props.artistName}</strong></p>
            </div>
        </Link>
    );
}

export default ArtistCard;
