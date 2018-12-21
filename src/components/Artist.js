import React from 'react';

class Artist extends React.Component {

    onSearch(event) {
        event.preventDefault();

        this.props.searchArtist(event.target.attributes.value);
    }

    render() {
        return (

            <div>

                <input class="SearchField" onClick={ this.onSearch } placeholder="Search for another artist"> </input>

                <hr />

                <h1> {this.props.name} </h1>
                <h3> {this.props.genero} </h3>

                <p> NAVIGATION SIDE </p>

                <hr />

                <p> ACA VA EL SONGS-CONTAINER </p>

            </div>

        )
    }
}