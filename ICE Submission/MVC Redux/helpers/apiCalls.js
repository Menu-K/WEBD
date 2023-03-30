exports.getSWAPI = (url) => {
    return fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.json()
    }).then(data => {
        return data
    }).catch(error => {
        console.log('Fetch Error');
        console.log(error);
    });
};