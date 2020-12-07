// Objective
// In this challenge, we learn about conditional statements. Check out the Tutorial tab for learning materials and an instructional video.

// Task
// Given an integer, , perform the following conditional actions:

// If N is odd, print Weird
// If N is even and in the inclusive range of 2 to 5, print Not Weird
// If N is even and in the inclusive range of 6 to 20, print Weird
// If N is even and greater than 20, print Not Weird
// Complete the stub code provided in your editor to print whether or not  is weird.

// Input Format

// A single line containing a positive integer, .

// Constraints

// Output Format

// Print Weird if the number is weird; otherwise, print Not Weird.

// Sample Input 0

// 3
// Sample Output 0

// Weird
// Sample Input 1

// 24
// Sample Output 1

// Not Weird
// Explanation

// Sample Case 0: 
// N is odd and odd numbers are weird, so we print Weird.

// Sample Case 1: 
// N > 20 and N is even, so it is not weird. Thus, we print Not Weird.

'use strict';

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

// If  is odd, print Weird
// If  is even and in the inclusive range of  to , print Not Weird
// If  is even and in the inclusive range of  to , print Weird
// If  is even and greater than , print Not Weird

function main() {
    const N = parseInt(readLine(), 10);

    if (N % 2 == 0 && N > 1 && N < 6 || N % 2 == 0 && N > 20) {
        console.log("Not Weird")
    } else if (N % 3 == 0 || N % 2 == 0 && N > 6 || N % 2 == 0 && N < 21) {
        console.log("Weird")
    } else {
        console.log("Weird")
    }
}
