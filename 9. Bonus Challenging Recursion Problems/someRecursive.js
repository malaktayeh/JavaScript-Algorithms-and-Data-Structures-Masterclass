// Write a recursive function called someRecursive which accepts
// an array and a callback.  The function returns true if a single
// value in the array returns true when passed to the callback,
// otherwise it returns false.

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callbackFunc){
    // add whatever parameters you deem necessary - good luck!
    let result = true;

    // break
    if (arr.length === 0) return true;
    //
    else if (callbackFunc(arr[0]) === false) return false;
    //
    else someRecursive(arr.slice(0,-1), callbackFunc)

  }