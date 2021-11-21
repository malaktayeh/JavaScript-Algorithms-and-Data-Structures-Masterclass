// Write a recursive function called reverse which accepts
// a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
    // return the last char in the string only
    if (str.length === 1) return str[0];

    // break if the string is empty
    if (str.length === 0) return;
    
    // return the last char in the string,
    // then call reverse, passing the string without its last char
    return str[str.length-1] + reverse(str.slice(0,str.length-1))
}