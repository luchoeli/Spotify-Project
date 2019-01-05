import React from 'react';
import { Route, Link } from 'react-router-dom';
import Header from '../components/Header';

class Album extends React.Component {

    render() {
        return (

            <div className="main_view">
                
                <Header haveSearchBar={true} />

                <h1>ALBUM</h1>

                <Route>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item"><Link to="/artistsearch">Artist Search</Link></li>
                        <li class="breadcrumb-item active"><Link to="/artist">Artist</Link></li>
                    </ol>
                </nav>
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