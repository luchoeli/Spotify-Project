import {ADD_FAVS, DELETE_FAVS} from '../constants.js';

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

function favReducers(state = initialState, action) {
    switch (action.type) {

    case ADD_FAVS: // añade un contenido a favoritos

        var newArray = [...state.favsElements];
        newArray.push(action.fav);

        return {
            ...state,
            favsElements: [...newArray]
        }
    
    case DELETE_FAVS: // elimina un contenido de favoritos
    
        newArray = state.favsElements.filter(item => item.id !== action.id) // falta comparar por algun atributo
        
        return {
        ...state,
        favsElements: newArray
        }

    default:
    return state

    }
}

export default favReducers;