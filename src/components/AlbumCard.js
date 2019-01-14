import React from 'react'

import { Link } from 'react-router-dom'

const AlbumCard = (props) => {
    const { id, albumImg, albumName, albumReleaseDate } = props;
    return (
        <Link className=" music-card mi-card-link" to={`/album/${id}`}>

            <img src={albumImg} alt={'imagen of artist'} />
            <div className="song-info">
                <p><strong>{albumName}</strong></p>
                <p>{albumReleaseDate}</p>
            </div>


        </Link>
    );
}

export default AlbumCard;
