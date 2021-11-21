// Write a function called productOfArray which takes in an array 
// of numbers and returns the product of them all

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    // break case 0: return zero if array doesn't contain anything
    if (arr.length === 0) return 0;

    // break case 1: return the last item left in the array
    else if (arr.length === 1) return arr[0];

    // return the last item in the array, and
    // call recursive function again without the last item item in the arra 
    else return arr[arr.lenght-1] + productOfArray(arr.pop())
}