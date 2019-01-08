
import React from 'react'
import { connect } from 'react-redux'
import '../stylecheet/FavoriteStyle.css'

class TrackContainer extends React.Component{
    render(){
        const { error, loading, currentAlbum } = this.props;
        
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
        if(currentAlbum.tracks.length>0)
         
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
                            currentAlbum.tracks.map((a, index) => {                                
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
                                        <th scope="row">{index}</th>
                                        <td>{a.name}</td>
                                        <td>Star</td>
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
    return {
        currentAlbum: state.spotifyReducers.currentAlbum,
        favsElements: state.spotifyReducers.favsElements,
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

