
import React from 'react'
import { connect } from 'react-redux'
import '../stylecheet/FavoriteStyle.css'
import ArtistCard from './ArtistCard'

class ArtistContainer extends React.Component {

    render() {
        const { error, loading, currentListOfArtists } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return (
                <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            );
        }

        if(this.props.currentListOfArtists.length>0){
            return ( 
                <div>
                    <section className="cardContainer">                  
                        {
                            currentListOfArtists.length > 0 && currentListOfArtists.map((a) => {

                                return (
                                        <ArtistCard key={a.id}
                                                    id={a.id}
                                                    artistName={a.name}
                                                    artistImg={a.images[0] ? a.images[0].url : "https://i.4pcdn.org/s4s/1510200817001.png" }
                                                    />
                                );
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
        currentListOfArtists: state.spotifyReducers.currentListOfArtists,
        loading: state.spotifyReducers.loading,
        error: state.spotifyReducers.error
    }
}
  
const mapDispatchToProps = dispatch => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistContainer)

