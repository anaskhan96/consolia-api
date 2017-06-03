# consolia-api
[![Build Status](https://travis-ci.org/anaskhan96/consolia-api.svg?branch=master)](https://travis-ci.org/anaskhan96/consolia-api)
[![npm version](https://badge.fury.io/js/consolia-api.svg)](https://badge.fury.io/js/consolia-api)

`consolia-api` is an npm module (with a command line utility) for fetching comics from [consolia-comic.com](https://consolia-comic.com).

### Installation

```bash
npm install --save consolia-api
```

### Usage

The package has two functions, `archive` (fetches all the comics), and `load` (fetches either the latest, random or id specified comic).

```javascript
var consolia = require('consolia-api');

// fetching all the comics
consolia.archive(function (data, err) {
	if (err != null)
		console.log(err);
	else
		console.log(data);
});

// fetching by the latest comic
consolia.load('latest', function (data, err) {
	// ---write your code---
});

// fetching any random comic
consolia.load('random', function (data, err) {
	// ---write your code---
});

// fetching by id
consolia.load(85, function (data, err) {
	// ---write your code---
});
```
`load` returns a JSON containing the data, while `archive` returns an array of all the JSONs. Example of one such comic returned:
```javascript
{ 
    title: 'Trust in software',
    image: 'https://static.consolia-comic.com/comics/trust.png',
    tooltip: 'I also don\'t trust the servers we host it on.',
    id: 118,
    posted_on: '2017-05-22',
    slug: 'trust',
    sublog: 'There are two kinds of developers in this world. Those who don\'t trust software, and those other devs who also do not trust software.'
}
```

### Command Line

`consolia-api` can also be installed globally to fetch comics right in the terminal.

```bash
npm install -g consolia-api
```

The following commands can be run :

```bash
Usage Details:

consolia [ latest | random | <id> ]
```
