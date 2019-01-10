import React from 'react'
import { Link } from 'react-router-dom'

const ArtistCard = (props) => {
    return (
        <Link className="card-link" to={`/artist/${props.id}`}>

            <div className="music-card">
                <img src={props.artistImg} alt={'imagen of artist'} />
                <div className="SongInfo">
                    <p><strong>{props.artistName}</strong></p>
                </div>

            </div>

        </Link>
    );
}

export default ArtistCard;
