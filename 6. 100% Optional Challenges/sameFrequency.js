// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)

// Sample Input:

// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22, 222) // false


function sameFrequency(a, b){
    let firstString = String(a);
    let secondString = String(b);

    let newObj = {};

    // check if both numbers have the same amount of numbers
    // if not, return false
    if (String(a).length !== String(b).length) return false
    
    // built hash map with count of numbers
    // step 1: loop over string of numbers
    for (let i = 0, l = firstString.length; i < l; i++) {
        // if object has a key of the corresponding number, add to it
        if (newObj[firstString[i]]) newObj[firstString[i]] += 1;
        // if not, create the key value pair
        // key is number, and set its value to one
        else newObj[firstString[i]] = 1
    }

    // loop over second number
    for (let j = 0, l = secondString.length; j < l; j++) {
        // if the key exist AND returns a truthy value, subtract one from the count
        if (newObj[secondString[j]]) newObj[secondString[j]] -= 1;
        // return false for anything else (key doesn't exist, or value in key is zero)
        else return false
    }

    return true;
  }
  