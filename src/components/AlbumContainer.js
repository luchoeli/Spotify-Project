
import React from 'react'
import { connect } from 'react-redux'
import { searchAlbums } from '../actions/index'
import AlbumCard from '../components/AlbumCard'
import Loading from './Loading';

class AlbumContainer extends React.Component {

    componentDidMount() {

        this.props.searchAlbums(this.props.artistId);

    }

    render() {
        const { error, loading, currentListOfAlbums } = this.props;

        if (error) {
            return <div>Error! {error.message} </div>; // TIRA ERROR ACA
        }

        if (loading) {
            return <Loading />
        }

        return currentListOfAlbums.length > 0 ?
            (
                <div >
                    <h2>Albums</h2>
                    <section className="cardContainer">
                        {
                            currentListOfAlbums.map((a) => {
                                return (
                                    <AlbumCard key={a.id}
                                        id={a.id}
                                        albumName={a.name}
                                        albumReleaseDate={a.albumReleaseDate}
                                        albumImg={a.images[ 0 ] ? a.images[ 0 ].url : "https://i.4pcdn.org/s4s/1510200817001.png"}
                                    />
                                );
                            })
                        }
                    </section>
                </div>
            )
            :
            (
                <p>No albums found</p>
            );
    }
}
const mapStateToProps = (state) => {
    return {
        currentListOfAlbums: state.spotifyReducers.currentListOfAlbums,
        error: state.spotifyReducers.errorAlbums,
        loading: state.spotifyReducers.loadingAlbums
    }
}
const mapDispatchToProps = dispatch => ({
    searchAlbums: artist => dispatch(searchAlbums(artist)),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlbumContainer)

