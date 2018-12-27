import { ADD_FAVS, DELETE_FAVS, SEARCH_ARTIST, SEARCH_ALBUM } from '../constants.js';

export function searchAlbums(artistId) {
    return {
        type: SEARCH_ALBUM,
        artistId
    }
}

export function searchArtist(input) {
    return {
        type: SEARCH_ARTIST,
        input
    }
}

export function addFavs(track) {
    return {
        type: ADD_FAVS,
        track
    }
}

export function deleteFavs(track) {
    return {
        type: DELETE_FAVS,
        track
    }
}