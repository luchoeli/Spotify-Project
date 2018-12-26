import React from 'react';

// deberia recibir como props un json con los resultados de la busqueda q?=ALGO

class ArtistSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSearch: this.props.currentSearch // yo llamo al componente al efectuar una busqueda, eso se vuelve este estado
        }
    }

    onSearch(event) {
        event.preventDefault();

        this.props.searchArtist(event.target.attributes.value); // input del cuadro de busqueda

        this.setState({
            currentSearch: event.target.attributes.value
        })
    }

    render() {
        return(
            <div id="artist_search_container">

                <h1> Artist </h1>

                <p> You are currently searching: {this.state.currentSearch} </p>

                <input class="SearchField" onClick={ this.onSearch } placeholder="Search for your favorite artist here"> </input>

                <br />

               <p> ACA VA LA ARTIST-CONTAINER </p>

            </div>
        )
    }
}

export default ArtistSearch;

//mapstatetoprops
//mapdispatchtoprops
//connect