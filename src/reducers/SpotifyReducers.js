import {ADD_FAVS, DELETE_FAVS, 
        SEARCH_ARTIST_ID_BEGIN, SEARCH_ARTIST_ID_SUCCESS, SEARCH_ARTIST_ID_FAILURE,
        SEARCH_ARTISTS_BEGIN,SEARCH_ARTISTS_SUCCESS,SEARCH_ARTISTS_FAILURE, 
        SEARCH_ALBUMS_BEGIN, SEARCH_ALBUMS_SUCCESS,SEARCH_ALBUMS_FAILURE, 
        SEARCH_TRACKS_BEGIN, SEARCH_TRACKS_SUCCESS,SEARCH_TRACKS_FAILURE,
        UPDATE_SEARCH} from '../constants.js';

const EMPTY = '';

const initialState = {
            favsElements: [{
              name: 'song title',
              id: '1',
              album: 'album',
              albumImg: 'https://i.scdn.co/image/95191136789abd43fc7ad7b4ea5526eca2986c26',
              artist: 'artist'
            },
            {
              name: 'sds title',
              id: '2',
              album: 'albumf',
              albumImg: 'https://i.scdn.co/image/95191136789abd43fc7ad7b4ea5526eca2986c26',
              artist: 'artist'
            }    
            ],
            
            currentArtist: EMPTY,
            currentAlbumn: EMPTY,

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
        currentArtistImagen:action.payload.images[0].url
      };

    case SEARCH_ARTIST_ID_FAILURE:

      return {
        ...state,
        loading: false,
        error: action.payload.error,
        currentArtistName: EMPTY,
        currentArtistImagen: EMPTY
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
      case SEARCH_TRACKS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case SEARCH_TRACKS_SUCCESS:
      return {
        ...state,
        loading: false,
        currentListOfTracks: action.payload.tracks
      };

    case SEARCH_TRACKS_FAILURE:

      return {
        ...state,
        loading: false,
        error: action.payload.error,
        currentListOfTracks: []
      }
    
    //----------------------------------------------------------//
    case ADD_FAVS: // añade un contenido a favoritos

          var newArray = [...state.favsElements];
          newArray.push(action.track);

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