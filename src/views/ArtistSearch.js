import React from 'react'
import { connect } from 'react-redux'
import ArtistContainer from '../components/ArtistContainer'
import { Route, Link } from 'react-router-dom'
import { searchArtists } from '../actions'
import SearchForm from '../components/SearchForm'
import Header from '../components/Header'

class ArtistSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            busquedaEfectiva: this.props.location.search.replace('?q=', '')
        }
    }

    componentDidMount() {
        this.props.searchArtists(this.state.busquedaEfectiva);
    }

    render() {

        return (

            <div className="main_view">

                <Header haveSearchBar={false} />

                <h1> Artists </h1>
                <p> You are currently searching: <strong>{this.state.busquedaEfectiva}</strong> </p>

                <SearchForm />

                <br />

                <Route>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item" aria-current="page"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page"><Link to="/artistsearch">Artists</Link></li>
                        </ol>
                    </nav>
                </Route>

                <ArtistContainer busquedaEfectiva={this.state.busquedaEfectiva} />

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    searchArtists: artist => dispatch(searchArtists(artist)),
})

export default connect(
    null,
    mapDispatchToProps
)(ArtistSearch)