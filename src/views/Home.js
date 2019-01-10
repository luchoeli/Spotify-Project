import React from 'react'
import FavoriteContainer from '../components/FavoriteContainer'
import Header from '../components/Header'
import SearchForm from '../components/SearchForm'

const Home = () => {
    return(
        <div className="main_view">
            <Header haveSearchBar={ false } />
            <hr />  
            <h4>Welcome to</h4>
            <h1><strong>Spotisearch</strong></h1>
            <p>Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!</p>
            <SearchForm />
            <FavoriteContainer />
        </div>
    ) 
}
export default Home;
