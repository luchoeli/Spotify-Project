import React from 'react';

class Home extends React.Component {

    onSubmit(event){

    }

    render(){
        return(
            <div id="home_container">

                <h4>Welcome to</h4>
                <h1>Spotisearch</h1>

                <p>Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!</p>

                <input class="SearchField" onClick={ this.onSubmit } placeholder="Type the name of your favorite artist"></input>

                <br />

                <h2>Favorite Songs</h2>

                <br />

                <p>IF (CancionesFavoritas>=1) MOSTRARLAS ELSE NO MOSTRAR NADA</p>

            </div>
        )
    }
}

export default Home;












