import React from 'react';
import FavoriteContainer from '../components/FavoriteContainer'
import Header from '../components/Header.js';
import '../stylecheet/Home.css'


class Home extends React.Component {

    render(){

        
        return(
            <div id="home_container">
                <Header haveSearchBar={ false } />

                <h4>Welcome to</h4>
                <h1><strong>Spotisearch</strong></h1>
                <p>Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!</p>
                <form action="/artistsearch">
                    <input  type="search" 
                    id="artistSearch" name="q" aria-label="Search through site content"
                    placeholder="Search your favorite artist here" />
                </form>
                <FavoriteContainer />
            </div>
        ) // FAVORITE SONGS SOLO SE MUESTRA CUANDO HAY AL MENOS 1 CANCION, ¿ES COMPONENTE?
        
    }
} 

export default Home;
