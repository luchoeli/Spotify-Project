import React from 'react';
import '../stylecheet/FavoriteStyle.css'
import { Link } from 'react-router-dom';
class AlbumCard extends React.Component {
    render() {
        return (
            //<Link style={{ textDecoration: 'none' , color:'black'}} to={`/artist/${this.props.id}`}>

                <div className="MusicCard"> 
                        <img src={this.props.albumImg} alt={'imagen of artist'} />
                        <div className="SongInfo">
                            <p><strong>{this.props.albumName}</strong></p>
                            <p>{this.props.albumReleaseDate}</p>
                        </div>
                    
                </div>
                
            //</Link>
        );
    }
}
export default AlbumCard;
