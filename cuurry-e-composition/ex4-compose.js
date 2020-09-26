const { curry, compose } = require('ramda');

const text = 'Rodrigo você é um babaca pq programa em PHP';
const blacklist = ['bocó', 'babaca', 'php'];
const placeHolder = '$#@#$@*';

const split = curry((separator, text) => text.split(separator));
const getWords = split(' ');
const join = curry((separator, list) => list.join(separator));
const getSentences = join(' ');
const map = curry((fn, list) => list.map(fn));
const hideWords = map(word => blacklist.includes(word.toLowerCase())? placeHolder: word)

const censured = compose(getSentences, hideWords, getWords);

console.log(censured(text));