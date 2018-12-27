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


