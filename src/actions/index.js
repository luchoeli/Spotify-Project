import { ADD_FAVS, DELETE_FAVS, SEARCH_ARTIST_BEGIN,SEARCH_ARTIST_SUCCESS,SEARCH_ARTIST_FAILURE, SEARCH_ALBUM, SEARCH_TRACK, UPDATE_SEARCH } from '../constants.js';

export function updateSearch(input) {
    return {
        type: UPDATE_SEARCH,
        input
    }
}
export function searchTracks(albumId) {
    return {
        type: SEARCH_TRACK,
        albumId
    }
}

export function searchAlbums(artistId) {
    return {
        type: SEARCH_ALBUM,
        artistId
    }
}

export const searchArtistBegin = () => ({
  type: SEARCH_ARTIST_BEGIN
});

export const searchArtistSucces = artists => ({
  type: SEARCH_ARTIST_SUCCESS,
  payload: { artists }
});

export const searchArtistFailure = error => ({
  type: SEARCH_ARTIST_FAILURE,
  payload: { error }
});

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

// git add .
// git rebase --continue
