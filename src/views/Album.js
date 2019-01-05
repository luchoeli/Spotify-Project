import React from 'react';
import { Route, Link } from 'react-router-dom';
import Header from '../components/Header';

class Album extends React.Component {

    componentWillMount() {
        var mystring = this.props.match.params.id;
        console.log("tu busqueda fue " + mystring);

        this.props.searchTrack(mystring)
    }

    render() {
        const { error, loading} = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        if(this.props.currentListOfTracks.length>0){          
            return (                
                <div>
                <Header haveSearchBar={true} />

                <h1>ARTIST</h1>  
                <Route>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/artistsearch">Artist Search</Link></li>
                    </ul>
                </Route>

                <hr />

                <img src={currentArtistImagen} alt="logo de la banda"/>
                <AlbumContainer  busquedaEfectiva={ this.state.busquedaEfectiva }/>

                <hr />


            </div>

            )
        }

        return(
            <p>No artist found for "{this.props.busquedaEfectiva}"</p>
        )   

    
    }
}

export default Album;

