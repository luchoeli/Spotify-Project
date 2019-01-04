import SpotifyOptions from './SpotifyOptions'
const SpotifyOpts = new SpotifyOptions();
let options = SpotifyOpts.getLocalStgOpts();

const baseUrl = 'https://api.spotify.com/v1/';

const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
    
const fetchData = (url) => {
    return fetch(url,options)
            .then(handleErrors)
            .then(response => response.json())
            .catch(error => console.error(error)) 
}

// "https://api.spotify.com/v1/search?q=kapanga&type=artist&limit=10"
export const fetchArtistsSearch = (artist) => {
    const url = baseUrl + "search?q=" + artist + "&type=artist&limit=10";
    return fetchData(url, options); 
}
// https://api.spotify.com/v1/artists/{id}

export const fetchArtist = (artistID) => {
    const url = baseUrl + "artists" + artistID;
    return fetchData(url, options); 
}

//	https://api.spotify.com/v1/artists/{id}/albums
export const fetchAlbumSearch = (artistId) => {
    const url = baseUrl + 'artists/' + artistId + '/albums';
    return fetchData(url, options);
}


// https://api.spotify.com/v1/albums/{id}/tracks
export const fetchAlbumTracks = (albumId) => {
    const url = baseUrl + 'albums/' + albumId + '/tracks';
    return fetchData(url, options);
}

