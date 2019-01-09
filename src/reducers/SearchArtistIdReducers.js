import {SEARCH_ARTIST_ID_BEGIN, SEARCH_ARTIST_ID_SUCCESS, SEARCH_ARTIST_ID_FAILURE} from '../constants.js';

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

function searchArtistIdReducers(state = initialState, action) {
    switch (action.type) {

    case SEARCH_ARTIST_ID_BEGIN:
    return {
        ...state,
        loading: true,
        error: null
    };

    case SEARCH_ARTIST_ID_SUCCESS:
    return {
        ...state,
        loading: false,
    
        currentArtistName: action.payload.name,
        currentArtistImagen: action.payload.images[0].url,
        currentArtistGenre: action.payload.genres[0]
    };

    case SEARCH_ARTIST_ID_FAILURE:

    return {
        ...state,
        loading: false,
        error: action.payload.error,
        currentArtistName: EMPTY,
        currentArtistImagen: EMPTY,
        currentArtistGenre: EMPTY
    }

    default:
    return state

    }
}

export default searchArtistIdReducers;