import {ADD_FAVS, DELETE_FAVS, SEARCH_ARTIST} from '../Constantes.js';


const initialState = {
  favsElements: [
    {
      name: 'Synchronicity II',
      artist: 'The Police',
      album: 'Cetifiable'
    },
    {
      name: 'De Do Do Do De Da Da Da',
      artist: 'The Police',
      album: 'Cetifiable'
    }
  ]
}

function spotifyReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ARTIST: // pega a la api de spotify y trae json con datos
        return { }

    case ADD_FAVS: // añade un contenido a favoritos
          return { }
      
    case DELETE_FAVS: // elimina un contenido de favoritos
        return { }

    default:
      return state

  }
}

export default spotifyReducer;