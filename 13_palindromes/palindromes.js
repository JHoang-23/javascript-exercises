const alphanumerical = "0123456789abcdefghijklmnopqrstuvwxyz"
const palindromes = function (string) {

    //given a string that can contain spaces
    //sanitise it first to remove spaces, punctuation etc.
    let cleanString = string.
    toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("")

    return cleanString.split('').reverse().join('') == cleanString
};

// Do not edit below this line
module.exports = palindromes;
