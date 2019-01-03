import $ from 'jquery';
const REFRESH_TOKEN = 'AQAXCsz639wCd18_d59-Va8TKziRnYoG0ZV6R96uTNA9XGt_3y4ZWbl-auUxWbj2-jCh0nWap7e45P9nF2Ibetolkg1hMksmcCQzT7rOdi5TwJjd4FqBKloWSk_ALuqYr-XG7Q';
//lucho 'AQA2Mdh_njAeAUYpKL-DZeh9MVHUhWTb06yiIaRfIcpjyfLQJcfAmsrh4_9OKhmcCqx6NrINUMdNzuABJ3YtC7Q6GWPW0qogQgYa_DZL7WsUDoPu5o_MobTrS0JA7bbIlqkY_w'
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