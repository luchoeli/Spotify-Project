import $ from 'jquery';
const REFRESH_TOKEN = 'AQB0obpFKCM4vUtzPL3XZ9AvLV-6EaLW-QN3LL07wA_8GQ3_4IRROzzV4so1eAFilcbDYl7UjLskKKt1neyjiOlIHcM0HVsPUuRKHLl5gnJ9zcfRuzRdpPCBT-fkqdNyJuq_9g';

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