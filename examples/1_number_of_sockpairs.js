/*
 Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .


*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    // console.log('========', ar);
    var colorMap = {};
    for (var i = 0; i < ar.length; i++){
        if (!colorMap[ar[i]]) {
            colorMap[ar[i]] = 1;
        } else {
            colorMap[ar[i]] += 1;
        }
    }
    var count = 0;
    for (var o in colorMap) {
        // console.log('====zzzz====', colorMap[o]);
        count += Math.floor(colorMap[o] / 2);
    }
    // console.log('========', colorMap);
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
