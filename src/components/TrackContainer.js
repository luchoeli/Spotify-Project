
import React from 'react'
import { connect } from 'react-redux'
import Star from './Star'
import { addFavs, deleteFavs } from '../actions'

class TrackContainer extends React.Component {

    groupByAlbum(songs) {
        const result = songs.reduce(function (r, a) {
            r[a.disc_number] = r[a.disc_number] || [];
            r[a.disc_number].push(a);
            return r;
        }, []);
        return result;
    }

    render() {
        const { currentAlbum } = this.props;

        let favsID = [];
 
        this.props.favsElements.length > 0 && this.props.favsElements.map((a) => {
            favsID.push(a.id)
        })


        if (currentAlbum && currentAlbum.tracks && currentAlbum.tracks.length) {
            const currentListOfTracks = currentAlbum.tracks;

            let songs = this.groupByAlbum(currentListOfTracks);
            return (
                <div >
                    <h2>Tracks</h2>
                    <section className="cardContainer">
                        {
                            songs.map((cd, index) => {
                                return (
                                    <table key={index} className="table-hover table-striped table table-dark">
                                        <thead>
                                            <tr>
                                                <th scope="col">Disc # {index}</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Preview</th>
                                                <th scope="col">Favorite</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cd.map((a) => {
                                                    const isFav = favsID.includes(a.id)
                                                    let fun = '';

                                                    if (isFav) {
                                                        fun = () => this.props.deleteFavs(a.id);
                                                    } else {
                                                        const fav = {
                                                            id: a.id,
                                                            name: a.name,
                                                            artist: a.artists[0].name,
                                                            albumImage: currentAlbum.image,
                                                            albumName: currentAlbum.name
                                                        }
                                                        fun = () => this.props.addFavs(fav);
                                                    }
                                                    return (
                                                        <tr key={a.id}>
                                                            <th scope="row">{a.track_number}</th>
                                                            <td>{a.name}</td>
                                                            <td>
                                                                <audio controls>
                                                                    <source src={a.preview_url} type="audio/ogg" />
                                                                    <p>Your browser does not support the audio element.</p>
                                                                </audio>
                                                            </td>
                                                            <td>
                                                                <Star isFav={isFav} onClick={fun} />
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </table>
                                );
                            })
                        }

                    </section>
                </div>
            )
        } else {
            return (
                <p>No artist found for "{this.props.busquedaEfectiva}"</p>
            )
        }

    }
}
const mapStateToProps = (state) => {
    return {
        favsElements: state.spotifyReducers.favsElements
    }
}

const mapDispatchToProps = dispatch => ({
    addFavs: fav => dispatch(addFavs(fav)),
    deleteFavs: song => dispatch(deleteFavs(song))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackContainer)

