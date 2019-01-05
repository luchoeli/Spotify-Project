import $ from 'jquery';
const REFRESH_TOKEN = 'AQBVtKNC17U9g692pbmFB9n9LdipfPZRpaX1iSDujmiVkIVPI_dKFymTfRc_w6dUFIL9wxOcWAbNWY6N0V-ljNkav3UK-F5YyKD68pZ8XE1OG0aKo-e-fahJDKxG_gSMNGGSDg';
class SpotifyOptions {
    constructor() {
        this.options = {
            method: 'GET',
            mode: 'cors',
            headers: '',
            cache: 'default'
        }
        this.refreshToken();
        this.refreshTokenInterval();
    }

    getLocalStgOpts() {
        return localStorage.spotifyOptions ?
            JSON.parse(localStorage.getItem('spotifyOptions')) : ''
    }

    refreshToken() {
        let _self = this;
        const url = 'http://localhost:8888/refresh_token';
        return $.ajax({
            url,
            data: {
                'refresh_token': REFRESH_TOKEN
            }
        }).done(function (data) {
            _self.options.headers = {
                'Authorization': 'Bearer ' + data.access_token
            }
            localStorage.setItem("spotifyOptions", JSON.stringify(_self.options));
        });
    }

    refreshTokenInterval(time = 1000 * 60 * 30) {
        let _self = this;
        setInterval(function () {
            return _self.refreshToken();
        }, time);
    }
}

export default SpotifyOptions;