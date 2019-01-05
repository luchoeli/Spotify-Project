import {ADD_FAVS, DELETE_FAVS, 
        SEARCH_ARTIST_ID_BEGIN, SEARCH_ARTIST_ID_SUCCESS, SEARCH_ARTIST_ID_FAILURE,
        SEARCH_ARTISTS_BEGIN, SEARCH_ARTISTS_SUCCESS, SEARCH_ARTISTS_FAILURE,
        SEARCH_ALBUMS_BEGIN, SEARCH_ALBUMS_SUCCESS, SEARCH_ALBUMS_FAILURE, 
        SEARCH_ALBUM_ID_BEGIN, SEARCH_ALBUM_ID_SUCCESS,SEARCH_ALBUM_ID_FAILURE, 
        UPDATE_SEARCH } from '../constants.js';

import {fetchArtistsSearch, fetchAlbumSearch, fetchAlbum, fetchArtist} from '../api/api.js'

export function updateSearch(input) {
    return {
        type: UPDATE_SEARCH,
        input
    }
}
//--------------------------------- 
export function searchArtistID(artistID) {
    return dispatch => {
        dispatch(searchArtistsBegin());
        return fetchArtist(artistID)
            .then(json => {
                dispatch(searchArtistsIDSuccess(json.name, json.images, json.genres));
            })
            .catch(error =>
                dispatch(searchArtistsIDFailure(error))
            );
    };
}

export const searchArtistsIDBegin = () => ({
  type: SEARCH_ARTIST_ID_BEGIN
});

export const searchArtistsIDSuccess = (name, images, genres) => ({
  type: SEARCH_ARTIST_ID_SUCCESS,
  payload: { name, images, genres }
});

export const searchArtistsIDFailure = error => ({
  type: SEARCH_ARTIST_ID_FAILURE,
  payload: { error }
});
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
                dispatch(searchAlbumsFailure(error)),
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
export function searchAlbumID(albumID){
    return dispatch => {
        dispatch(searchAlbumIDBegin());
        return fetchAlbum(albumID)
            .then(json => {
                dispatch(searchAlbumIDSuccess(json.name, json.artists[0].name, json.release_date, json.images, json.tracks.items));
            })
            .catch(error =>
                dispatch(searchAlbumIDFailure(error))
            );
    };
}

export const searchAlbumIDBegin = () => ({
    type: SEARCH_ALBUM_ID_BEGIN
  });
  
  export const searchAlbumIDSuccess = (name, artists, release_date, images, tracks) => ({
    type: SEARCH_ALBUM_ID_SUCCESS,
    payload: { name, artists, release_date, images, tracks }
  });
  
  export const searchAlbumIDFailure = error => ({
    type: SEARCH_ALBUM_ID_FAILURE,
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
