import React from 'react'

import { Link } from 'react-router-dom'

const AlbumCard = (props) => {
    const { id, albumImg, albumName, albumReleaseDate } = props;
    return (
        <Link className="card-link" to={`/album/${id}`}>

            <div className="music-card">
                <img src={albumImg} alt={'imagen of artist'} />
                <div className="SongInfo">
                    <p><strong>{albumName}</strong></p>
                    <p>{albumReleaseDate}</p>
                </div>
            </div>

        </Link>
    );
}

export default AlbumCard;
