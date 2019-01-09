import {SEARCH_ARTISTS_BEGIN,SEARCH_ARTISTS_SUCCESS,SEARCH_ARTISTS_FAILURE} from '../constants.js';

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

function searchArtistReducers(state = initialState, action) {
    switch (action.type) {


    case SEARCH_ARTISTS_BEGIN:
    return {
        ...state,
        loading: true,
        error: null
    };

    case SEARCH_ARTISTS_SUCCESS:
    return {
        ...state,
        loading: false,
        currentListOfArtists: action.payload.artists
    };

    case SEARCH_ARTISTS_FAILURE:

    return {
        ...state,
        loading: false,
        error: action.payload.error,
        currentListOfArtists: []
    }
    

    default:
    return state

    }
}

export default searchArtistReducers;