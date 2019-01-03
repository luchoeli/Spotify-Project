import $ from 'jquery';
const REFRESH_TOKEN = 'AQA1q2GA6tYCAuOeSs4IlHuMFeM4oKafDo-v2tf_WoeV-NOdh3y99gIO6VkMHitdtnCwMY4bwXSqaxRMKXmZSQwWM-F7jRyP9F3jFgOT2Nh2ryAriCuiXAPinSEZX1KOihtrsw';
//lucho 'AQA1q2GA6tYCAuOeSs4IlHuMFeM4oKafDo-v2tf_WoeV-NOdh3y99gIO6VkMHitdtnCwMY4bwXSqaxRMKXmZSQwWM-F7jRyP9F3jFgOT2Nh2ryAriCuiXAPinSEZX1KOihtrsw'
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