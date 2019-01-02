/*
 * tipos de acciones
 */

export const ADD_FAVS = 'ADD_FAVS' // añade un contenido a favoritos
export const DELETE_FAVS = 'DELETE_FAVS' // elimina un contenido de favoritos
export const SEARCH_ARTIST = 'SEARCH_ARTIST' // busca los artistas desde api de spotify
export const SEARCH_ALBUM = 'SEARCH_ALBUM' // busca los albumes dado un artista, desde la api de spotify
export const SEARCH_TRACK = 'SEARCH_TRACK' // busca las canciones dado un album, desde la api de spotify
export const UPDATE_SEARCH = 'UPDATE_SEARCH' // actualiza el tecto de busqueda (currentSearch)
export const SEARCH_ARTISTS_BEGIN = 'SEARCH_ARTISTS_BEGIN'
export const SEARCH_ARTISTS_SUCCESS = 'SEARCH_ARTISTS_SUCCESS'
export const SEARCH_ARTISTS_FAILURE = 'SEARCH_ARTISTS_FAILURE'