const { __, reduce, replace } = require('ramda');

const text = 'Rodrigo você é um babaca pq programa em PHP';
const blacklist = ['bocó', 'babaca', 'php'];
const placeHolder = '$#@#$@*';


const hideWord = (text, word) => replace(new RegExp(word, 'i'), placeHolder, text);

const censured = reduce(hideWord, __, blacklist);

console.log(censured(text));