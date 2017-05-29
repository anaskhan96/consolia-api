#! /usr/bin/env node
const consolia = require('../index.js');

if (process.argv.length != 3) {
    return printUsageDetails();
} else {
    var action = process.argv[2];
    if (isNaN(action)) {
        if (action == 'latest')
            printLatest();
        else if (action == 'random')
            printRandom();
        else
            return printUsageDetails();
    } else
        printById(action);
}