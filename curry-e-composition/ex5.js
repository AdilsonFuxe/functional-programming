const { __, curry, compose, split, join, map, toLower, includes } = require('ramda');

const text = 'Rodrigo você é um babaca pq programa em PHP';
const blacklist = ['bocó', 'babaca', 'php'];
const placeHolder = '$#@#$@*';

const getWords = split(' ');
const getSentences = join(' ');
const isCensured = compose(includes(__, blacklist), toLower);
const hideWords = map(word => isCensured(word) ? placeHolder: word)

const censured = compose(getSentences, hideWords, getWords);

console.log(censured(text));