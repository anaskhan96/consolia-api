'use strict';

var fetch = require('node-fetch');

var endpoint = 'https://consolia-comic.com/api/comic';
var header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};
var imgPrefixUrl = 'https://static.consolia-comic.com/comics/';
var lastId = 0;

function archive(callback) {
    fetch(endpoint, {
        method: 'GET',
        headers: header
    }).then((response) => response.json())
        .then((res) => {
            lastId = res[0].id;
            for (var i = 0; i < lastId; i++)
                res[i].image = imgPrefixUrl + res[i].image;
            res = res.reverse();
            callback(res, null);
        }).catch((err) => {
            callback(undefined, err.message);
        });
}

function load(str, callback) {
    fetch(endpoint, {
        method: 'GET',
        headers: header
    }).then((response) => response.json())
        .then((res) => {
            lastId = res[0].id;
            if (isNaN(str)) {
                if (str == 'latest') {
                    res[0].image = imgPrefixUrl + res[0].image;
                    callback(res[0], null);
                } else if (str == 'random') {
                    res = res.reverse();
                    var randId = Math.floor(Math.random() * lastId);
                    res[randId].image = imgPrefixUrl + res[randId].image;
                    callback(res[randId], null);
                } else {
                    callback(undefined, 'first argument invalid; should either be "latest", "random" or a corresponding id');
                }
            } else {
                var id = parseInt(str);
                if (id <= lastId) {
                    res = res.reverse();
                    res[id - 1].image = imgPrefixUrl + res[id - 1].image
                    callback(res[id - 1], null);
                } else
                    callback(undefined, 'comic specific to the given id doesn\'t exist');
            }
        }).catch((err) => {
            callback(undefined, err.message);
        });
}

module.exports = {
    archive,
    load
}