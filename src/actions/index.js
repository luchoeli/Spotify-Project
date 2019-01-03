import { ADD_FAVS, DELETE_FAVS, SEARCH_ARTISTS_BEGIN, SEARCH_ARTISTS_SUCCESS, SEARCH_ARTISTS_FAILURE, SEARCH_ALBUM, SEARCH_ALBUMS_BEGIN, SEARCH_ALBUMS_SUCCESS, SEARCH_ALBUMS_FAILURE, SEARCH_TRACK, UPDATE_SEARCH } from '../constants.js';

import {fetchArtistsSearch, fetchAlbumSearch} from '../api/api.js'
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

//--------------------------------- 
export function searchArtists(artistSearch) {
    return dispatch => {
        dispatch(searchArtistsBegin());
        return fetchArtistsSearch(artistSearch)
            .then(json => {
                dispatch(searchArtistsSuccess(json.artists.items));
                return json.artists.items;
            })
            .catch(error =>
                dispatch(searchArtistsFailure(error))
            );
    };
}

export const searchArtistsBegin = () => ({
  type: SEARCH_ARTISTS_BEGIN
});

export const searchArtistsSuccess = artists => ({
  type: SEARCH_ARTISTS_SUCCESS,
  payload: { artists }
});

export const searchArtistsFailure = error => ({
  type: SEARCH_ARTISTS_FAILURE,
  payload: { error }
});
//---------------------------------------------
export function searchAlbums(artistID){
    return dispatch => {
        dispatch(searchAlbumsBegin());
        return fetchAlbumSearch(artistID)
            .then(json => {
                dispatch(searchAlbumsSuccess(json.artists.items));
                return json.artists.items;
            })
            .catch(error =>
                dispatch(searchAlbumsFailure(error))
            );
    };
}

export const searchAlbumsBegin = () => ({
    type: SEARCH_ALBUMS_BEGIN
  });
  
  export const searchAlbumsSuccess = albums => ({
    type: SEARCH_ALBUMS_SUCCESS,
    payload: { albums }
  });
  
  export const searchAlbumsFailure = error => ({
    type: SEARCH_ALBUMS_FAILURE,
    payload: { error }
  });
//---------------------------------------------
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
