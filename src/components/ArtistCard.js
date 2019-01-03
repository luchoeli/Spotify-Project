import React, { Component } from 'react';
import '../stylecheet/FavoriteStyle.css'
import { Link } from 'react-router-dom';
class ArtistCard extends Component {

    constructor() {
        super();
     
    }

    render() {
        return (
            <Link className="cardLink" to={{
                pathname: "/artist",
                search:"?sort=" + this.props.id,
                //hash: "#the-hash",
                //state: { fromDashboard: true }
            }} >

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
