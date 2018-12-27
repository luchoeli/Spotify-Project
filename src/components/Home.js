import React from 'react';
//import { connect } from 'react-redux'
import FavoriteContainer from './FavoriteContainer'
//import { fetchArtistsSearch } from '../api/api.js'
import '../stylecheet/Home.css'
import MusicCard from './MusicCard';
class Home extends React.Component {

    constructor(props){
        super(props)
        this.artistSearchRef = React.createRef();
        this.state = {artists : []}
        
        this.onSubmit = this.onSubmit.bind(this)  
        this.setArtists = this.setArtists.bind(this)  
    }

    onSubmit(e){
        e.preventDefault();
        //console.log(this.artistSearchRef.current.value)
        //let json = fetchArtistsSearch(this.artistSearchRef.current.value)
        //this.renderArtists(json.items)
        
        this.renderArtists(ejemplo.artists.items)
    }

    renderArtists(){
        //console.log(ejemplo.artists.items)     
        return(
            <ArtistContainer artists={ejemplo.artists.items}/>     
        )
  
    }

    renderArtists(artists){
        artists.map((a) => {
            return(
                <MusicCard  
                />
            )
        })
    }

    render(){
        return(
            <div id="home_container">
                <h4>Welcome to</h4>
                <h1>Spotisearch</h1>
                <p>Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!</p>
                <form onSubmit={this.onSubmit}>
                    <input type="search" id="artistSearch" name="q" aria-label="Search through site content"
                    placeholder="Type the name of your favorite artist" ref={this.artistSearchRef}/>
                </form>
                <ArtistContainer artists={this.state.artists}/>
                <FavoriteContainer/>
            </div>
        ) // FAVORITE SONGS SOLO SE MUESTRA CUANDO HAY AL MENOS 1 CANCION, ¿ES COMPONENTE?
    }
}
//<ArtistContainer artists={ejemplo.artists.items}/>  
export default Home;