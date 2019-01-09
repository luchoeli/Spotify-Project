import {UPDATE_SEARCH} from '../constants.js';

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

function updateSearchReducers(state = initialState, action) {
    switch (action.type) {

    case UPDATE_SEARCH: 
    return {
        currentSearch: action.input
    }

    default:
    return state

    }
}

export default updateSearchReducers;