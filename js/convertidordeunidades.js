// conversión de temperaturas: celsius a fahrenheit
const celsius = 25;
const fahrenheit = ( celsius* 9/5) + 32;
console.log(`${celsius} °C equivalen a ${fahrenheit} °F`);

// Conversión de kilometros a millas 
const kilometros = 100;
const millas = kilometros * 0.621371;
console.log(`${kilometros} km equiovalen a ${millas.toFixed (2)} millas`);

// conversion de pesos colombianos a dolares ( tasa de ejemplo: 4000)
const pesos = 500000;
const tasa = 4000;
const dolares = pesos / tasa;
console.log(`$${pesos} COP equivalen a US$${dolares.toFixed (2)}`);
// conversion de IMC 
const peso = 62;
const estatura = 1.77;
const imc = (peso/(estatura * estatura));
console.log(`su IMC equivale a ${imc.toFixed(2)}`);

