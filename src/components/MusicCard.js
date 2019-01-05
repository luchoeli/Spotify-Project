import React, { Component } from 'react';
import '../stylecheet/FavoriteStyle.css'
import { connect } from 'react-redux'
import { searchTracks } from '../actions/index'

class MusicCard extends Component {

    render() {

        const { error, loading } = this.props;
        
        if (error) {
            return <div>Error! {error.message} </div>; // TIRA ERROR ACA
        }

        if (loading) {
            return (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        }

        if(this.props.currentListOfTracks.length>0){

        return (
            <div className="MusicCard">
                <img src={this.props.albumImg} alt={'imagen of album'} />
                <div className="SongInfo">
                    <p> <strong>{this.props.name}</strong></p>
                    <p>Artist: {this.props.artist} </p>
                    <p>Album: {this.props.album}</p>
                </div>
            </div>
        );}

        return(
            <p>No artist found for "{this.props.busquedaEfectiva}"</p>
        )  
    }
}

const mapStateToProps = (state) => {
    return {    
        currentListOfTracks: state.spotifyReducers.currentListOfTracks
    }
}
  
const mapDispatchToProps = dispatch => ({
    searchTracks: albumID => dispatch(searchTracks(albumID))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MusicCard)