const text = 'Rodrigo você é um babaca pq programa em PHP';
const blacklist = ['bocó', 'babaca', 'php'];
const placeHolder = '$#@#$@*';

const split = (separator, text) => text.split(separator);
const map = (fn, list) => list.map(fn);
const join = (separator, list) => list.join(separator);
const hideword = word => blacklist.includes(word.toLowerCase())? placeHolder: word;

const censured = join(' ',map(hideword,split(' ',text)));

console.log(censured);