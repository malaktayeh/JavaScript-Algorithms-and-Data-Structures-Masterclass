// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a 
// subsequence of the characters in the second string. In other words,
// the function should check whether the characters in the first 
// string appear somewhere in the second string, without their order
// changing.

// Examples:
// isSubsequence('hello', 'hello world '); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc','abracadabra'); // true
// isSubsequence('abc','acb'); // false

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N+M)
// Space Complexity - O(1)

function isSubsequence(first, second){
    let start = 0;

    // loop as many time
    for (let i = 0, l = second.length; i < l; i++) {
        // check if both chars match, increment start
        if (first[start] === second[i]) start++;
        // check if we reached the end of the first string
        // comparison ends here and we can short-circuit
        if (start === first.length) return true
    }
    
    return false;
}
