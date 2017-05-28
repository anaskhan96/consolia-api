'use strict';

var fetch = require('node-fetch');

function loadComics(callback) {
    fetch('https://consolia-comic.com/api/comic', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
        .then((res) => {
            callback(res, null);
        }).catch((err) => {
            callback(undefined, err);
        });
}

module.exports = {
    loadComics
}