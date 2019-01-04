import React from 'react';
import { Route, Link } from 'react-router-dom';
import Header from '../components/Header';

class Album extends React.Component {

    constructor() {
        super();

    }


    render() {
        return (

            <div>
                
                <Header haveSearchBar={true} />

                <h1>ALBUM</h1>

                <Route>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/artistsearch">Artist Search</Link></li>
                        <li><Link to="/artist">Artist</Link></li>
                    </ul>
                </Route>


                <hr />

                <hr />
        
                <p>LOGO DEL ALBUM [X]</p>
                <h1> {this.props.name} </h1>
                <h3> {this.props.banda} - {this.props.anio} </h3>

                <hr />

                <p> ACA VA EL SONGS-CONTAINER </p>

            </div>

        )
    }
}

export default Album;