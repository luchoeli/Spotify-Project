import React from 'react';
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom';
import Header from '../components/Header';
import TrackContainer from '../components/TrackContainer';
import { searchAlbumID } from '../actions'
import Loading from '../components/Loading';

class Album extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albumID: this.props.match.params.id
        }
    }

    componentDidMount() {
        this.props.searchAlbumID(this.state.albumID)
    }

    render() {
        const { error, loading, currentAlbum } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        const linkToArtist = "/artist/" + currentAlbum.artistID;

        const breadcrumb = (
            <Route>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        {currentAlbum && <li className="breadcrumb-item "><Link to={linkToArtist}>{currentAlbum.artist}</Link></li>}
                        {currentAlbum && <li className="breadcrumb-item active">{currentAlbum.name}</li>}
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
                ) :
                    (
                        currentAlbum ? (
                            <div>
                                <div className="shadow p-1 mb-5 bg-white rounded">
                                    <div className="media">
                                        <img src={currentAlbum.image} className="align-self-start mr-3" alt="Album Logo" />
                                        <div className="media-body">
                                            <h3 className="mt-0">{currentAlbum.name}</h3>
                                            <p>{currentAlbum.artist} - {currentAlbum.release_date}</p>
                                        </div>
                                    </div>

                                </div>
                                <hr />
                                {breadcrumb}
                                <hr />
                                <TrackContainer currentAlbum={this.props.currentAlbum} />
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
        currentAlbum: state.spotifyReducers.currentAlbum,
        error: state.spotifyReducers.error,
        loading: state.spotifyReducers.loading
    }
}

const mapDispatchToProps = dispatch => ({
    searchAlbumID: albumID => dispatch(searchAlbumID(albumID)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Album)