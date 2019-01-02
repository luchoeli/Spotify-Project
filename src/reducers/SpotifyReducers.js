import {ADD_FAVS, DELETE_FAVS, SEARCH_ARTIST, SEARCH_ALBUM, SEARCH_TRACK, UPDATE_SEARCH} from '../constants.js';
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