const text = 'Rodrigo você é um babaca pq programa em PHP';
const blacklist = ['bocó', 'babaca', 'php'];
const placeHolder = '$#@#$@*';

const censured = text
    .split(' ')
    .map(word => blacklist.includes(word.toLowerCase())? placeHolder: word)
    .join(' ');
    
console.log(censured);