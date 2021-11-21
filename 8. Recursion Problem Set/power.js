/*

Write a function called power which accepts a base and an exponent.
The function should mimic the functionality of Math.pow()
- do not worry about negative bases and exponents

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

*/


// SOLUTION 1 - 2018
function power(base, exponent){
    // return 1 if exponent equals 0
    if (exponent === 0) return 1;
    
    // check if exponent is 1, return result
    else if (exponent === 1) return base;
    
    // recursive function call
    return power(base*2, exponent-1)
}

// SOLUTION 2 - 2021
function power(base, exponent){
    // break case 1
    if (exponent === 0) return 1
    
    // break case 2
    if (exponent === 1) return base;
    exponent--;

    return base * power(base, exponent)
}