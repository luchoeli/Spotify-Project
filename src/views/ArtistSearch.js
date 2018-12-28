import React from 'react';

// deberia recibir como props un json con los resultados de la busqueda q?=ALGO

class ArtistSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSearch: this.props.currentSearch // yo llamo al componente al efectuar una busqueda, eso se vuelve este estado
        }
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(text) {
    
        this.props.searchArtist(text); // input del cuadro de busqueda

        this.setState({
            currentSearch: text
        })
    }

    render() {
        return(
            <div id="artist_search_container">

                <h1> Artist </h1>

                <p> You are currently searching: {this.state.currentSearch} </p>

                <Input accion={ this.onSearch } />

                <br />

               <p> ACA VA LA ARTISTAS-CONTAINER </p>

            </div>
        )
    }
}

export default ArtistSearch;

//mapstatetoprops
//mapdispatchtoprops
//connect