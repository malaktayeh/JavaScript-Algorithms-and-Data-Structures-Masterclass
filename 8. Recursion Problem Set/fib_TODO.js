// Write a recursive function called fib which accepts a number
// and returns the nth number in the Fibonacci sequence. Recall
// that the Fibonacci sequence is the sequence of whole numbers
// 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where
// every number thereafter is equal to the sum of the previous
// two numbers.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num) {
    // break
    if (num === 0) return 0;
    // return
    return num += fib(num-1)
}

// traditional for loop solution

function fib(num){
    let result = 0;

    for (let i = 0, l = num; i <= l; i++) {
        result =+
    }
}