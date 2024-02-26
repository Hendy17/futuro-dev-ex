const prompt = require('prompt-sync')();

const numeros = [];

for (let i = 0; i < 5; i++) {
  const numero = parseInt(prompt(`Digite o número ${i + 1}: `));
  numeros.push(numero);
}

const numerosOrdenados = numeros.slice(); 
numerosOrdenados.sort((a, b) => a - b);

console.log('Números ordenados:', numerosOrdenados);
