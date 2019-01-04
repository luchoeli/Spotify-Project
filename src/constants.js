/*
 * tipos de acciones
 */

export const ADD_FAVS = 'ADD_FAVS' // añade un contenido a favoritos
export const DELETE_FAVS = 'DELETE_FAVS' // elimina un contenido de favoritos

export const SEARCH_TRACK = 'SEARCH_TRACK' // busca las canciones dado un album, desde la api de spotify
export const UPDATE_SEARCH = 'UPDATE_SEARCH' // actualiza el tecto de busqueda (currentSearch)

export const SEARCH_ARTIST_ID_BEGIN = 'SEARCH_ARTIST_ID_BEGIN'
export const SEARCH_ARTIST_ID_SUCCESS = 'SEARCH_ARTIST_ID_SUCCESS'
export const SEARCH_ARTIST_ID_FAILURE = 'SEARCH_ARTIST_ID_FAILURE'

export const SEARCH_ARTIST = 'SEARCH_ARTIST' // busca los artistas desde api de spotify
export const SEARCH_ARTISTS_BEGIN = 'SEARCH_ARTISTS_BEGIN'
export const SEARCH_ARTISTS_SUCCESS = 'SEARCH_ARTISTS_SUCCESS'
export const SEARCH_ARTISTS_FAILURE = 'SEARCH_ARTISTS_FAILURE'

export const SEARCH_ALBUM = 'SEARCH_ALBUM'
export const SEARCH_ALBUMS_BEGIN = 'SEARCH_ALBUMS_BEGIN'
export const SEARCH_ALBUMS_SUCCESS = 'SEARCH_ALBUMS_SUCCESS'
export const SEARCH_ALBUMS_FAILURE = 'SEARCH_ALBUMS_FAILURE'

export const SEARCH_TRACKS = 'SEARCH_ALBUM'
export const SEARCH_TRACKS_BEGIN = 'SEARCH_TRACKS_BEGIN'
export const SEARCH_TRACKS_SUCCESS = 'SEARCH_TRACKS_SUCCESS'
export const SEARCH_TRACKS_FAILURE = 'SEARCH_TRACKS_FAILURE'