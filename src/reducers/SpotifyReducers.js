import {ADD_FAVS, DELETE_FAVS} from '../Constantes.js';


const initialState = {
  favsElements: []
}

function spotifyReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_FAVS: // añade un contenido a favoritos
          return { }
      
    case DELETE_FAVS: // elimina un contenido de favoritos
        return { }

    default:
      return state

  }
}

export default spotifyReducer;