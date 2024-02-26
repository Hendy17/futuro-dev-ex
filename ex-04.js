const prompt = require('prompt-sync')();


const numeros = [];
for (let i = 0; i < 5; i++) {
  const numero = parseInt(prompt(`Digite um número ${i + 1}: `));
  numeros.push(numero);
}
console.log('Array de números inteiros:', numeros);


const soma = numeros.reduce((total, numero) => total + numero, 0);
console.log('A soma de todos os elementos do array é:', soma);
