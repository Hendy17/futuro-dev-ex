const prompt = require('prompt-sync')();


const fruta1 = prompt('Banana: ');
const fruta2 = prompt('Manga: ');
const fruta3 = prompt('Maracuja: ');

const frutas = [fruta1, fruta2, fruta3];

console.log('A segunda fruta é:', frutas[1]);

const fruta4 = prompt('Digite mais uma fruta: ');

frutas.push(fruta4);

frutas.shift();

console.log('Array de frutas atualizado:', frutas);
