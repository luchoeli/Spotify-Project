import {ADD_FAVS, DELETE_FAVS, SEARCH_ARTIST, SEARCH_ALBUM} from '../Constantes.js';

const EMPTY = '';

const initialState = {
  favsElements: [],
  currentSearch: EMPTY,
  currentArtist: EMPTY,
  currentAlbum: EMPTY

}

function spotifyReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ARTIST: // pega a la api de spotify y trae json con datos

        //let temp = llamado a la api (action.TEXTO_DE_BUSQUEDA)

        // aca habria que filtrar el contenido de temp, para evitar datos basura

        return {
          currentSearch: {/* temp */},
          currentArtist: EMPTY,
          currentAlbum: EMPTY
        }

    case SEARCH_ALBUM: // pega a la api de spotify y trae json con datos

          // let temp = llamado a la api (action.ID_DEL_ARTISTA)

          // aca se haria filtrado de datos, porque necesito mas que solo la lista de albumes

          return { 
            currentArtist: {/* temp */},
            currentAlbum: EMPTY
          }

    case ADD_FAVS: // añade un contenido a favoritos

          let newArray = [...favsElements];
          newArray.push(action.track);

          return {
            favsElements: newArray
          }
      
    case DELETE_FAVS: // elimina un contenido de favoritos

        const newArray = state.favsElements.filter(item => item!=action.track) // falta comparar por algun atributo
        return {
          favsElements: newArray
        }

    default:
      return state

  }
}

export default spotifyReducer;