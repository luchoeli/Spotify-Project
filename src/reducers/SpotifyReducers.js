import {ADD_FAVS, DELETE_FAVS, 
        SEARCH_ARTIST_ID_BEGIN, SEARCH_ARTIST_ID_SUCCESS, SEARCH_ARTIST_ID_FAILURE,
        SEARCH_ARTISTS_BEGIN,SEARCH_ARTISTS_SUCCESS,SEARCH_ARTISTS_FAILURE, 
        SEARCH_ALBUMS_BEGIN, SEARCH_ALBUMS_SUCCESS,SEARCH_ALBUMS_FAILURE, 
        SEARCH_ALBUM_ID_BEGIN, SEARCH_ALBUM_ID_SUCCESS,SEARCH_ALBUM_ID_FAILURE,
        UPDATE_SEARCH} from '../constants.js';

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

function spotifyReducer(state = initialState, action) {
  switch (action.type) {
    
    case UPDATE_SEARCH: 
      return {
          currentSearch: action.input
      }
//----------------------------------------------------------//
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
//----------------------------------------------------------//
    case SEARCH_ARTISTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case SEARCH_ARTISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        currentListOfArtists: action.payload.artists
      };

    case SEARCH_ARTISTS_FAILURE:

      return {
        ...state,
        loading: false,
        error: action.payload.error,
        currentListOfArtists: []
      }
     //----------------------------------------------------------//
      case SEARCH_ALBUMS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case SEARCH_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        currentListOfAlbums: action.payload.albums
      };

    case SEARCH_ALBUMS_FAILURE:

      return {
        ...state,
        loading: false,
        error: action.payload.error,
        currentListOfAlbums: []
      }
//----------------------------------------------------------//
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
        currentAlbum: action.payload.album,
      };

    case SEARCH_ALBUM_ID_FAILURE:

      return {
        ...state,
        loading: false,
        error: action.payload.error,
        currentListOfTracks: []
      }
    
    //----------------------------------------------------------//
    case ADD_FAVS: // añade un contenido a favoritos

          var newArray = [...state.favsElements];
<<<<<<< HEAD
          newArray.push(action.track);
=======
          newArray.push(action.fav);
>>>>>>> eceb082... usando objetos entre actions, reducers, views y comps

          return {
            favsElements: newArray
          }
      
    case DELETE_FAVS: // elimina un contenido de favoritos

        newArray = state.favsElements.filter(item => item!==action.track) // falta comparar por algun atributo
        return {
          favsElements: newArray
        }

    default:
      return state

  }
}

export default spotifyReducer;