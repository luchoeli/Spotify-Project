
import React from 'react'
import { connect } from 'react-redux'
import '../stylecheet/FavoriteStyle.css'
import Star from './Star'

class TrackContainer extends React.Component{

    starClick(e){
        console.log("jej")
    }

    render(){
        const { error, loading, currentListOfTracks } = this.props;
        
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
                            <th scope="col">Favorite</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            currentListOfTracks.length > 0 && currentListOfTracks.map((a, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index}</th>
                                        <td>{a.name}</td>
                                        <td>
                                            <Star isFav={true} onClick={this.starClick}/> 
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
    return {    
        currentListOfTracks: state.spotifyReducers.currentListOfTracks,
    }
}
  
const mapDispatchToProps = dispatch => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackContainer)

