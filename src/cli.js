#! /usr/bin/env node
const consolia = require('../index.js');

function printUsageDetails() {
    console.log("\nUsage Details:\n");
    console.log("consolia [ latest | random | <id> ]\n");
    process.exit(1);
}

function printComic(action) {
    consolia.load(action, function (data, err) {
        if (err != null) {
            console.log("Error occurred: " + err);
            process.exit(1);
        } else {
            console.log(data);
            process.exit(0);
        }
    });
}

if (process.argv.length != 3) {
    return printUsageDetails();
} else {
    var action = process.argv[2];
    printComic(action);
}