import { SEARCH_ALBUM_ID_BEGIN, SEARCH_ALBUM_ID_SUCCESS,SEARCH_ALBUM_ID_FAILURE,} from '../constants.js';

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

function searchAlbumIdReducers(state = initialState, action) {
    switch (action.type) {

    case SEARCH_ALBUM_ID_BEGIN:
    return {
        ...state,
        loading: true,
        error: null
    };

    case SEARCH_ALBUM_ID_SUCCESS:
    return {
        ...state,
        loading: false,
    
        currentListOfTracks: action.payload.album.tracks,
        
        currentAlbum: action.payload.album

    };

    case SEARCH_ALBUM_ID_FAILURE:

    return {
        ...state,
        loading: false,
        error: action.payload.error,
        currentListOfTracks: [],
        currentAlbum: EMPTY,
    }

    default:
    return state

    }
}

export default searchAlbumIdReducers;