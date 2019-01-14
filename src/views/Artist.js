import React from 'react';
import { connect } from 'react-redux'
import { searchArtistID } from '../actions/index'
import AlbumContainer from '../components/AlbumContainer';
import Header from '../components/Header'
import Loading from '../components/Loading';
import { Route, Link } from 'react-router-dom';

class Artist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artistId: this.props.match.params.id
        }
    }
    componentDidMount() {
        this.props.searchArtistID(this.state.artistId);
    }

    render() {
        const { error, loading, currentArtist } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        const breadcrumb = (

            <Route>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        {currentArtist && <li className="breadcrumb-item active">{currentArtist.name}</li>}
                    </ol>
                </nav>
            </Route>

        );

        return (
            <div className="main_view">
                <Header haveSearchBar={true} />
                <hr />
                {loading ? (
                    <Loading />
                ) : (
                        currentArtist ? (
                            <div>
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <div className="media">
                                        <img src={currentArtist.image} className="align-self-start mr-3" alt="Album Logo" />
                                        <div className="media-body">
                                            <h3 className="mt-0">{currentArtist.name}</h3>
                                            <p>{currentArtist.genres[0]}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                {breadcrumb}
                                <hr />
                                <AlbumContainer artistId={this.state.artistId} />
                            </div>
                        ) : null
                    )
                }
            </div>
        )

    }
}


const mapStateToProps = (state) => {
    return {
        currentArtist: state.spotifyReducers.currentArtist,
        error: state.spotifyReducers.error,
        loading: state.spotifyReducers.loading
    }
}

const mapDispatchToProps = dispatch => ({
    searchArtistID: artist => dispatch(searchArtistID(artist))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Artist)