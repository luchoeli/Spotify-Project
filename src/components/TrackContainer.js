
import React from 'react'
import { connect } from 'react-redux'
import '../stylecheet/FavoriteStyle.css'
import Star from './Star'
import { addFavs, deleteFavs } from '../actions'

class TrackContainer extends React.Component{



    render(){
        const { error, loading, currentAlbum } = this.props;
        
        let favsID=[];
        console.log(currentAlbum)
        this.props.favsElements.length>0 && this.props.favsElements.map((a) => {
            favsID.push(a.id)
        })

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
        if(currentAlbum && currentAlbum.tracks && currentAlbum.tracks.length) {
            const currentListOfTracks = currentAlbum.tracks;

            return ( 
                <div >
                <h2>Tracks</h2>
                <section className="cardContainer">                  
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Favorite</th>
                            </tr>
                        </thead>
                        <tbody>
                        {   
                            currentListOfTracks.map((a, index) => {                                
                                const isFav = favsID.includes(a.id)
                                let fun ='';
                                if (isFav){
                                    fun = () => this.props.deleteFavs(a.id);
                                }else{
                                    fun = () => this.props.addFavs(a.id, a.name, a.artists[0].name, currentAlbum.image, currentAlbum.name);
                                }
                                return (
                                    <tr key={index}>
                                        <th scope="row">{a.track_number}</th>
                                        <td>{a.name}</td>
                                        <td>
                                            <Star isFav={isFav} onClick={fun}/> 
                                        </td>
                                    </tr>  
                                );
                            })
                        }
                        </tbody>
                    </table>
                </section>
            </div>
            )   
        } else {
            return(
                <p>No artist found for "{this.props.busquedaEfectiva}"</p>
            )   
        }

    }
}
const mapStateToProps = (state) => {
    return {
        favsElements: state.spotifyReducers.favsElements,
        //currentListOfTracks: state.spotifyReducers.currentListOfTracks,
        //currentAlbum: state.spotifyReducers.currentAlbum,

    }
}
  
const mapDispatchToProps = dispatch => ({
    addFavs: fav => dispatch(addFavs(fav)),
    deleteFavs: song => dispatch(deleteFavs(song)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackContainer)

