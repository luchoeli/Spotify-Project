import React from 'react'
import FavoriteContainer from '../components/FavoriteContainer'
import Header from '../components/Header.js'
import '../stylecheet/Home.css'
import Input from '../components/Input'


class Home extends React.Component {

    render(){

        
        return(
            <div id="home_container">
                <Header haveSearchBar={ false } />
                <hr />  
                <h4>Welcome to</h4>
                <h1><strong>Spotisearch</strong></h1>
                <p>Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!</p>
                <Input />
                <FavoriteContainer />
            </div>
        ) // FAVORITE SONGS SOLO SE MUESTRA CUANDO HAY AL MENOS 1 CANCION, ¿ES COMPONENTE?
        
    }
} 

export default Home;
