
import React from 'react'
import { connect } from 'react-redux'
import '../stylecheet/FavoriteStyle.css'
import Star from './Star'
import { addFavs, deleteFavs } from '../actions'

class TrackContainer extends React.Component{



    render(){
        const { error, loading, currentAlbum, currentListOfTracks } = this.props;
        
        let favsID=[];

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
        if(currentListOfTracks.length>0)
         
        return ( 
            <div >
                <h2>Tracks</h2>
                <section className="cardContainer">                  
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Preview</th>
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
                                    let fav = {
                                        id: a.id,
                                        name: a.name,
                                        artist: a.artists[0].name,
                                        albumimage: currentAlbum.images,
                                        albumName: currentAlbum.name
                                    } 
                                    fun = () => this.props.addFavs(fav);
                                }
                                return (
                                    <tr key={index}>
                                        <th scope="row">{a.track_number}</th>
                                        <td>{a.name}</td>
                                        <td>
                                            <audio controls>
                                                <source src={a.preview_url} type="audio/ogg"/>
                                                <p>Your browser does not support the audio element.</p>
                                            </audio>
                                        </td>
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
     return(
            <p>No artist found for "{this.props.busquedaEfectiva}"</p>
        )   

    }
}
const mapStateToProps = (state) => {
    console.log(state.spotifyReducers.currentListOfTracks)
    return {
        favsElements: state.spotifyReducers.favsElements,
        currentListOfTracks: state.spotifyReducers.currentListOfTracks,

        currentAlbum: state.spotifyReducers.currentAlbum,

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

