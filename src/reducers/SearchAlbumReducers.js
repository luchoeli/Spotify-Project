import {SEARCH_ALBUMS_BEGIN, SEARCH_ALBUMS_SUCCESS,SEARCH_ALBUMS_FAILURE} from '../constants.js';

const EMPTY = '';

const initialState = {
        favsElements: [],
        
        currentArtist: EMPTY,
        currentAlbum: EMPTY,

        currentSearch: EMPTY,
        loading: false,
        error: null,
        currentListOfArtists:EMPTY,
        currentListOfAlbums: EMPTY,
        currentListOfTracks: EMPTY
}

function searchAlbumReducers(state = initialState, action) {

    switch (action.type) {

    case SEARCH_ALBUMS_BEGIN:
    return {
        ...state,
        loading: true,
        error: null
    };

    case SEARCH_ALBUMS_SUCCESS:
    return {
        ...state,
        loading: false,
        currentListOfAlbums: action.payload.albums
    };

    case SEARCH_ALBUMS_FAILURE:

    return {
        ...state,
        loading: false,
        error: action.payload.error,
        currentListOfAlbums: []
    }

    default:
    return state

    }
}

export default searchAlbumReducers;