import React from 'react'
import '../stylecheet/FavoriteStyle.css'
import { Link } from 'react-router-dom'
class ArtistCard extends React.Component {
    render() {
        return (
            <Link className="music-card" style={{ textDecoration: 'none' , color:'black'}} to={`/artist/${this.props.id}`}>
                <img src={this.props.artistImg} alt={'imagen of artist'} />
                <div className="SongInfo">
                    <p><strong>{this.props.artistName}</strong></p>
                </div>
            </Link>
        );
    }
}
export default ArtistCard;
