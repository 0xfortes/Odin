// 1. Reverse a String With Built-In Functions
/* const reverseString = function(str) {
    // let splitString = str.split("");
    // let reverseString = splitString.reverse();
    // let joinString = reverseString.join("");
    // return joinString;

// or wee can combine them in one line

     return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
*/

// 2. Reverse a String With a Decrementing For Loop
const reverseString = function(str) {

    let newString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;







