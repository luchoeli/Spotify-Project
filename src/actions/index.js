import { ADD_FAVS, DELETE_FAVS } from './Constantes.js';

export function searchArtist(input) {
    return {
        type: SEARCH_ARTIST,
        input
    }
}

export function addFavs(data) {
    return {
        type: ADD_FAVS,
        data
    }
}

export function deleteFavs(data) {
    return {
        type: DELETE_FAVS,
        data
    }
}