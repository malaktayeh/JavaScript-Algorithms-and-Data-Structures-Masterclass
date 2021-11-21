// Write a recursive function called isPalindrome which returns
// true if the string passed to it is a palindrome (reads the 
// same forward and backward). OTherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    // break: the string is 1 or 0 char long
    if (str.length < 1) return true;
    // compare first and last
    // if true, continue
    else if (str[0] === str[str.length-1]) return isPalindrome(str.slice(1,-1))
    // first and last do not match, end and return false;
    else return false;
}