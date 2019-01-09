import { combineReducers } from 'redux';
import favReducers from './FavReducers.js';
import searchAlbumIdReducers from './SearchAlbumIdReducers.js';
import searchAlbumReducers from './SearchAlbumReducers.js';
import searchArtistIdReducers from './SearchArtistIdReducers.js';
import searchArtistReducers from './SearchArtistReducers.js';
import updateSearchReducers from './UpdateSearchReducers.js';

export default combineReducers({
    favReducers,
    searchAlbumIdReducers,
    searchAlbumReducers,
    searchArtistIdReducers,
    searchArtistReducers,
    updateSearchReducers
})