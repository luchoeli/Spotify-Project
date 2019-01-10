
import React from 'react'
import { connect } from 'react-redux'
import ArtistCard from './ArtistCard'
import Loading from './Loading';

class ArtistContainer extends React.Component {

    render() {
        const { error, loading, currentListOfArtists } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return (<Loading />)
        }

        if (currentListOfArtists.length) {
            return (
                <div>
                    <section className="cardContainer">
                        {
                            currentListOfArtists.map((a) => {
                                return (
                                    <ArtistCard key={a.id}
                                        id={a.id}
                                        artistName={a.name}
                                        artistImg={a.images[0] ? a.images[0].url : "https://i.4pcdn.org/s4s/1510200817001.png"}
                                    />
                                );
                            })
                        }

                    </section>
                </div>
            )
        }
        return (
            <p>No artist found for "{this.props.busquedaEfectiva}"</p>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentListOfArtists: state.spotifyReducers.currentListOfArtists,
        error: state.spotifyReducers.error,
        loading: state.spotifyReducers.loading
    }
}

export default connect(
    mapStateToProps,
    null
)(ArtistContainer)



