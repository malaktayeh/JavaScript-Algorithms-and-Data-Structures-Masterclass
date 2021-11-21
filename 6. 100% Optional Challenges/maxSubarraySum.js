// Given an array of integers and a number, write a function
// called maxSubarraySum, which finds the maximum sum of a 
// subarray with the length of the number passed to the 
// function.
// Note that a subarray must consist of consecutive elements
// from the original array. In the first example below, 
// [100, 200, 300] is a subarray of the original array, but
// [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2) -> 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) -> 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) -> 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) -> 5
// maxSubarraySum([2,3], 3) -> null

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)


function maxSubarraySum(arr, max){
    let first = 0, check = 0, maxNum = 0;
    let maxArr = []

    // check if the given array has enough values
    // minimum of max numbers 
    if (arr.length < max) return null;

    while (first < arr.length) {
        if (check === max) {
            maxNum -= arr[first-max]
            maxNum += arr[first];
        }
        else {
            check++;
            maxNum += arr[first];
        }
        first++;
        maxArr.push(maxNum);
    }

    return Math.max(...maxArr);
}


// iteration 0
// arr.length-1 is 3
// first is 0, check is 0, maxNum is zero
// check doesn't equal max, go into else
// check now is 1
// maxNum is 100
// first is 1

// iteration 1
// first is 1, check is 1, maxNum is 100
// check doesn't equal max, go into else
// check now is 2
// maxNum is 300
// first is 2

// iteration 2
// first is 2, check is 2, maxNum is 300
// check equal max, go into if
// maxNum is 300
// subtract 100 from maxNum, now is 200
// add 300 from maxNum, now is 500
// first is 3

// iteration 3
// first is 3, check is 2, maxNum is 500
// check equal max, go into if
// maxNum is 500
// subtract 200 from maxNum, now is 300
// add 400 from maxNum, now is 700
// first is 4
