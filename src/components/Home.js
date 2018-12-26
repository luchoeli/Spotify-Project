import React from 'react';
import FavoriteContainer from './FavoriteContainer'
import '../stylecheet/Home.css'
class Home extends React.Component {

    onSubmit(event){

    }

    render(){
        return(
            <div id="home_container">

                <h4>Welcome to</h4>
                <h1>Spotisearch</h1>

                <p>Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!</p>
                <input onClick={ this.onSubmit } placeholder="Type the name of your favorite artist"></input>
                <br />
                
                <br />
                <FavoriteContainer/>
            </div>
        ) // FAVORITE SONGS SOLO SE MUESTRA CUANDO HAY AL MENOS 1 CANCION, ¿ES COMPONENTE?
    }
}
export default Home;