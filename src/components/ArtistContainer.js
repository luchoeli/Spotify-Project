
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../stylecheet/FavoriteStyle.css'
import ArtistCard from './ArtistCard';
import {searchArtist} from '../actions/index';


class ArtistContainer extends Component {
    render() {
        

        return ( 
            <div>
                <h2>Artistas</h2>
                <section className="cardContainer">                  
                        
                    <p>ACA VAN LOS ARTISTAS CONTAINER</p>

                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {    
        
    }
}
  
const mapDispatchToProps = dispatch => ({
    searchArtist: artist => dispatch(searchArtist(artist))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistContainer)

