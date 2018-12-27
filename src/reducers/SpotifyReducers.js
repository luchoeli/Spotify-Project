import {ADD_FAVS, DELETE_FAVS, SEARCH_ARTIST, SEARCH_ALBUM} from '../constants.js';
import { fetchArtistsSearch } from '../api/api.js';

const EMPTY = '';

const initialState = {
  favsElements: [],
  currentSearch: [],
  currentArtist: EMPTY,
  currentAlbum: EMPTY

}

function spotifyReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ARTIST: // pega a la api de spotify y trae json con datos

		let promise = fetchArtistsSearch(action.input);

		let artistArray = []

		

		promise.then(function(result){

			for (let i = 0; i < result.artists.items.length; i++) {

			let element = {
				name: result.artists.items[i].name,
				id: result.artists.items[i].id,
				images: [...result.artists.items[i].images],
				genres: [...result.artists.items[i].genres]
			};

			artistArray.push(element);
        }
		
		for ( let b = 0; b<artistArray.length; b++){
			console.log(artistArray[b].name);
		}

		});

        return {
          currentSearch: [...artistArray],
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

          var newArray = [...state.favsElements];
          newArray.push(action.track);

          return {
            favsElements: newArray
          }
      
    case DELETE_FAVS: // elimina un contenido de favoritos

        var newArray = state.favsElements.filter(item => item!==action.track) // falta comparar por algun atributo
        return {
          favsElements: newArray
        }

    default:
      return state

  }
}

export default spotifyReducer;