const ACCESS_TOKEN = '';

export default {
    options: {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + ACCESS_TOKEN
        },
        mode: 'cors',
        cache: 'default'
    }
};