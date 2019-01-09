import React from 'react'
import FavoriteContainer from '../components/FavoriteContainer'
import Header from '../components/Header.js'
import '../stylecheet/View.css'
import Input from '../components/Input'

function Home(){
    return(
        <div className="main_view bg-image">
            <Header haveSearchBar={ false } />
            <hr />  
            <h4>Welcome to</h4>
            <h1><strong>Spotisearch</strong></h1>
            <p>Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!</p>
            <Input />
            <FavoriteContainer />
        </div>
    ) 
}

export default Home;
