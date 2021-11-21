/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 const isAnagram = function(s, t) {
    // declare variables
    let obj1 = {}, obj2 = {};
    
    // return false if the two strings are not of the same length
    if (s.length !== t.length) return false;
    
    // loop over first array and save occurences
    for (let character in s) {
        if (s[character]) obj1[character]++;
        else {
            obj1[character] = 1;
        }
    }
    
    // loop over second array and save occurences
    for (let character in t) {
        if (t[character]) obj2[character]++;
        else {
            obj2[character] = 1;
        }
    }
    // compare obj1 and obj2
    for (let i = 0, l = Object.keys(obj1).length; i < l; i++) {
        if (obj1[i] !== obj2[i]) return false;
    }
    
    
    // return true if loop above didn't shortcircut by not finding a match
    return true;
    
};