import {
  ADD_FAVS, DELETE_FAVS,
  SEARCH_ARTIST_ID_BEGIN, SEARCH_ARTIST_ID_SUCCESS, SEARCH_ARTIST_ID_FAILURE,
  SEARCH_ARTISTS_BEGIN, SEARCH_ARTISTS_SUCCESS, SEARCH_ARTISTS_FAILURE,
  SEARCH_ALBUMS_BEGIN, SEARCH_ALBUMS_SUCCESS, SEARCH_ALBUMS_FAILURE,
  SEARCH_ALBUM_ID_BEGIN, SEARCH_ALBUM_ID_SUCCESS, SEARCH_ALBUM_ID_FAILURE,
  UPDATE_SEARCH
} from '../constants.js';

const EMPTY = '';

const initialState = {
  favsElements: [],

  currentArtist: EMPTY,
  currentAlbum: EMPTY,

  currentSearch: EMPTY,
  loading: false,
  error: null,

  loadingAlbums: false,
  errorAlbums: null,

  currentListOfArtists: EMPTY,
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
        error: null,
        currentArtist: null
      };

    case SEARCH_ARTIST_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        currentArtist: action.payload.artist
      };

    case SEARCH_ARTIST_ID_FAILURE:

      return {
        ...state,
        loading1: false,
        error1: action.payload.error,
        currentArtist: null
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
        error: false,
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
        loadingAlbums: true,
        errorAlbums: null
      };

    case SEARCH_ALBUMS_SUCCESS:
      return {
        ...state,
        loadingAlbums: false,
        errorAlbums: false,
        currentListOfAlbums: action.payload.albums
      };

    case SEARCH_ALBUMS_FAILURE:

      return {
        ...state,
        loadingAlbums: false,
        errorAlbums: action.payload.error,
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

        currentListOfTracks: action.payload.album.tracks,

        currentAlbum: action.payload.album

      };

    case SEARCH_ALBUM_ID_FAILURE:

      return {
        ...state,
        loading: false,
        error: action.payload.error,
        currentListOfTracks: [],
        currentAlbum: EMPTY,
      }

    //----------------------------------------------------------//
    case ADD_FAVS: // añade un contenido a favoritos

      const fav = {
        name: action.fav.name,
        id: action.fav.id,
        album: action.fav.albumName,
        albumImg: action.fav.albumImage,
        artist: action.fav.artist
      };

      var newArray = [...state.favsElements];
      newArray.push(fav);

      return {
        ...state,
        favsElements: [...newArray]
      }

    case DELETE_FAVS: // elimina un contenido de favoritos

      newArray = state.favsElements.filter(item => item.id !== action.id)

      return {
        ...state,
        favsElements: newArray
      }

    default:
      return state
  }
}

export default spotifyReducer;