import {ADD_FAVS, DELETE_FAVS} from '../Constantes';

const initialState = {
  favsElements: [
                  {
                    name: 'song title',
                    id: 'id',
                    album: 'album',
                    albumImg: 'https://i.scdn.co/image/95191136789abd43fc7ad7b4ea5526eca2986c26',
                    artist: 'artist'
                  },
                  {
                    name: 'sds title',
                    id: 'idws',
                    album: 'album',
                    albumImg: 'https://i.scdn.co/image/95191136789abd43fc7ad7b4ea5526eca2986c26',
                    artist: 'artist'
                  }
                  
                ]
}

const spotifyReducer = (state = initialState, action) => {
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