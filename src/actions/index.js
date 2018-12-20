import { ADD_FAVS, DELETE_FAVS } from '../Constantes';

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