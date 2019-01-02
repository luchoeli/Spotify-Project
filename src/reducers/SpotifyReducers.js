import {ADD_FAVS, DELETE_FAVS, SEARCH_ARTIST_BEGIN,SEARCH_ARTIST_SUCCESS,SEARCH_ARTIST_FAILURE, SEARCH_ALBUM, SEARCH_TRACK, UPDATE_SEARCH} from '../constants.js';
import { fetchArtistsSearch, fetchAlbumSearch, fetchTrackSearch } from '../api/api.js';

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

            currentSearch: "kapanga",
            loading: false,
            error: null,
            currentListOfArtists:[{
                                    name: 'artist',
                                    id: '1',
                                    album: 'album',
                                    albumImg: 'https://i.scdn.co/image/95191136789abd43fc7ad7b4ea5526eca2986c26',
                                    artist: 'arstist'
                                  },
                                  {
                                    name: 'sds title',
                                    id: '2',
                                    album: 'albumf',
                                    albumImg: 'https://i.scdn.co/image/95191136789abd43fc7ad7b4ea5526eca2986c26',
                                    artist: 'artist'
                                  }    
                                  ],
            currentListOfAlbums: EMPTY,
            currentListOfTracks: EMPTY
}

function spotifyReducer(state = initialState, action) {
  switch (action.type) {
    
    case UPDATE_SEARCH: 
      return {
          currentSearch: action.input
      }

      {
          /*  
          case SEARCH_ARTIST: // pega a la api de spotify y trae json con datos
              let promise = fetchArtistsSearch(action.input);

              let artistArray = []
              promise.then(function(result) { 
                
                for (let i = 0; i < result.artists.items.length; i++) {
                  let element = {
                    name: result.artists.items[i].name,
                    id: result.artists.items[i].id,
                    images: result.artists.items[i].images,
                    genres: result.artists.items[i].genres
                  };

                  artistArray.push(element);
                }
                
                for ( let i = 0; i<artistArray.length; i++){
                  console.log(artistArray[i].name);
                }
              });
              return {
                currentSearch: action.input,
                currentListOfArtists: [artistArray],
                listOfAlbums: EMPTY,
                currentListOfTracks: EMPTY
                }
      */
      }
      case SEARCH_ARTIST_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      };

    case SEARCH_ARTIST_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        items: action.payload.artists
      };

    case SEARCH_ARTIST_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      }

    case SEARCH_ALBUM: // pega a la api de spotify y trae json con datos

          let promise2 = fetchAlbumSearch(action.artistId)

          let albumSearch = []

          promise2.then(function(result) {

            for (let i = 0; i < result.items.length; i++) {

                let element = {
                  name: result.items[i].name,
                  date: result.items[i].release_date,
                  images: result.items[i].images,
                  id: result.items[i].id
                };

                albumSearch.push(element);

            }

            console.log('---------------------------')

            for (let i = 0; i < albumSearch.length; i++) {
              console.log(albumSearch[i].name + ' - ' + albumSearch[i].date)
            }

          });

          return { 
            listOfAlbums: albumSearch,
            currentListOfTracks: EMPTY
            
          }

    case SEARCH_TRACK:

        let promise3 = fetchTrackSearch(action.albumId);

        let trackSearch = []

        promise3.then(function(result) {

            for (let i = 0; i < result.items.length; i++) {

                let element = {
                  name: result.items[i].name,
                  duration: Math.trunc(result.items[i].duration / 1000), // parte entera superior
                  id: result.items[i].id
                };

                trackSearch.push(element);

            }

            console.log('---------------------------')

            for (let i = 0; i < trackSearch.length; i++) {
              console.log(trackSearch[i].name)
            }

          });

      return {
          currentListOfTracks: trackSearch
      }

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