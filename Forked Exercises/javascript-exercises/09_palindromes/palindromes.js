/*const palindromes = function (string) {
    const unWords = /[^A-Za-z0-9]/g; // This remove all except what is between those brackets
    let lowCaseRep = string.toLowerCase().replace(unWords, ''); // convert everything to lowercase and remove unwated words, punctuation, etc.
    let reverse = lowCaseRep.split('').reverse().join(''); // split the string into an array of words, reverse them and concatenate them into a new array
    return reverse === lowCaseRep; // check if the original array of words is the same as the reversed array 
};*/


//we may also use a for loop
const palindromes = function (string) {
    const unWords = /[^A-Za-z0-9]/g;
    string = string.toLowerCase().replace(unWords, '');
    let len = string.length;
    for (let i = 0; i < len/2; i++) { 
        if (string[i] !== string[len - 1 - i]) {    // As long as the characters from each part match, the FOR loop will go on
            return false;                          // When the characters don't match anymore, false is returned and we exit the FOR loop
        }
    }
    return true;
}


// Do not edit below this line
module.exports = palindromes;
