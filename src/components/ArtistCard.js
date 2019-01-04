import React from 'react';
import '../stylecheet/FavoriteStyle.css'
import { Link } from 'react-router-dom';
class ArtistCard extends React.Component {
    render() {
        return (
            <Link style={{ textDecoration: 'none' , color:'black'}} to={`/artist/${this.props.id}`}>

                <div className="MusicCard"> 
                        <img src={this.props.artistImg} alt={'imagen of artist'} />
                        <div className="SongInfo">
                            <p><strong>{this.props.artistName}</strong></p>
                        </div>
                    
                </div>
                
            </Link>
        );
    }
}
export default ArtistCard;
