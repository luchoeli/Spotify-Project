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
            <Link style={{ textDecoration: 'none' , color:'black'}} className="cardLink" to={{
                pathname: "/artist",
                search:"?sort=" + this.props.id,
                hash: "#the-hash",
                state: { fromDashboard: true }
            }} >

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
