import React from 'react';
import Input from '../components/Input.js';

class Artist extends React.Component {

    constructor() {
        super();

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(text) {

        this.props.searchArtist(text);

    }


    render() {
        return (

            <div>

                <Input accion={ this.onSearch } />

                <hr />

                <p>LOGO DE LA BANDA [X]</p>
                <h1> {this.props.name} </h1>
                <h3> {this.props.genero} </h3>

                <p> NAVIGATION SIDE </p>

                <hr />

                <p> ACA VA EL ALBUMES-CONTAINER </p>

            </div>

        )
    }
}

export default Artist;