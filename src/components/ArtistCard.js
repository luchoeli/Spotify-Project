import React, { Component } from 'react';
import '../stylecheet/FavoriteStyle.css'
import { Link } from 'react-router-dom';
class ArtistCard extends Component {

    constructor() {
        super();
        this.avisar=this.avisar.bind(this);
    }

    avisar = () => {
        alert("CARD CLICKEADA DE " + this.props.artistName + ", ID [" + this.props.id + "]")
    }

    render() {
        return (
            <Link to={"/artist/"+this.props.id} >
                <div className="MusicCard" onClick={ this.avisar } > 
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