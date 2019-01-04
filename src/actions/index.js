import {ADD_FAVS, DELETE_FAVS, 
        SEARCH_ARTISTS_BEGIN, SEARCH_ARTISTS_SUCCESS, SEARCH_ARTISTS_FAILURE,
        SEARCH_ALBUMS_BEGIN, SEARCH_ALBUMS_SUCCESS, SEARCH_ALBUMS_FAILURE, 
        SEARCH_TRACKS_BEGIN, SEARCH_TRACKS_SUCCESS,SEARCH_TRACKS_FAILURE, 
        UPDATE_SEARCH } from '../constants.js';

import {fetchArtistsSearch, fetchAlbumSearch, fetchAlbumTracks} from '../api/api.js'

export function updateSearch(input) {
    return {
        type: UPDATE_SEARCH,
        input
    }
}

//--------------------------------- 
export function searchArtists(artistSearch) {
    return dispatch => {
        dispatch(searchArtistsBegin());
        return fetchArtistsSearch(artistSearch)
            .then(json => {
                dispatch(searchArtistsSuccess(json.artists.items));
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
                dispatch(searchAlbumsSuccess(json.items));
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
export function searchTracks(albumID){
    return dispatch => {
        dispatch(searchTracksBegin());
        return fetchAlbumTracks(albumID)
            .then(json => {
                dispatch(searchTracksSuccess(json.items));
            })
            .catch(error =>
                dispatch(searchTracksFailure(error))
            );
    };
}

export const searchTracksBegin = () => ({
    type: SEARCH_TRACKS_BEGIN
  });
  
  export const searchTracksSuccess = tracks => ({
    type: SEARCH_TRACKS_SUCCESS,
    payload: { tracks }
  });
  
  export const searchTracksFailure = error => ({
    type: SEARCH_TRACKS_FAILURE,
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
