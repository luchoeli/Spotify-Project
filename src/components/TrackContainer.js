
import React from 'react'
import { connect } from 'react-redux'
import '../stylecheet/FavoriteStyle.css'

class TrackContainer extends React.Component{
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
                <ol>
                    {
                        currentListOfTracks.length > 0 && currentListOfTracks.map((a) => {
                            console.log("nombre: " + a.name)
                            
                            return (
                                <li>
                                    <p>{a.name}</p>
                                </li>        
                            );
                        })
                    }
                </ol>

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

