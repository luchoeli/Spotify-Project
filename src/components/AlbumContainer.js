
import React from 'react';
import { connect } from 'react-redux'
import { searchAlbums} from '../actions/index'
import ArtistCard from '../components/ArtistCard'

class AlbumContainer extends React.Component {

    render() {
        const { error, loading, currentListOfAlbums } = this.props;
        console.log(currentListOfAlbums)
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        if(this.props.currentListOfAlbums.length>0){
            return ( 
                <div>
                    <h2>Artistas</h2>
                    <section className="cardContainer">                  
                        {
                            currentListOfAlbums.length > 0 && currentListOfAlbums.map((a) => {
                                console.log(a.name)
                                /*
                                return (
                                        <ArtistCard key={a.id}
                                                    id={a.id}
                                                    artistName={a.name}
                                                    artistImg={a.images[0] ? a.images[0].url : "https://i.4pcdn.org/s4s/1510200817001.png" }
                                                    />
                                );
                                */
                            })
                        }
                    </section>
                </div>
            )}
         return(
                <p>No artist found for "{this.props.busquedaEfectiva}"</p>
            )   
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
    searchAlbums: artist => dispatch(searchAlbums(artist)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlbumContainer)

