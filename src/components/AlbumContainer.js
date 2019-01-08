
import React from 'react'
import { connect } from 'react-redux'
import '../stylecheet/FavoriteStyle.css'
import AlbumCard from '../components/AlbumCard'

class AlbumContainer extends React.Component {

    render() {
        const { error, loading, currentListOfAlbums } = this.props;
        
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

        return currentListOfAlbums.length>0 ? 
             ( 
                <div >
                    <h2>Albums</h2>
                    <section className="cardContainer">                  
                        {
                            currentListOfAlbums.length > 0 && currentListOfAlbums.map((a) => {                                
                                return (
                                    <AlbumCard  key={a.id}
                                                id={a.id}
                                                albumName={a.name}
                                                albumReleaseDate={a.albumReleaseDate}
                                                albumImg={a.images[0] ? a.images[0].url : "https://i.4pcdn.org/s4s/1510200817001.png" }
                                                />
                                );    
                            })
                        }
                    </section>
                </div>
            )
        : 
            (
                <p>No artist found for "{this.props.busquedaEfectiva}"</p>  
            );
    } 
}
const mapStateToProps = (state) => {
    return {    
        currentListOfAlbums: state.spotifyReducers.currentListOfAlbums,
        loading: state.spotifyReducers.loading,
        error: state.spotifyReducers.error
    }
}
  
const mapDispatchToProps = dispatch => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlbumContainer)

