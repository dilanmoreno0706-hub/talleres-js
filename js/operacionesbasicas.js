// calcular el area y perimetro de un triangulo
const base = 8;
const altura = 5;
const area = base * altura;
const perimetro = 2 * (base + altura);
console.log (`Área: ${area} cm2`);
console.log (`Perímetro: ${perimetro} cm`);

// saber si un numero es par o impar usando el operador %
const numero = 7;
const esPar = numero % 2 === 0;
console.log(`¿${numero} es par?: ${esPar}`);

//calcular el promedio de tres notas
const nota1 = 80;
const nota2 = 90;
const nota3 = 70;
const promedio = (nota1 + nota2 + nota3) / 3;
console.log(`Promedio: ${promedio}`);

// area de un triangulo
const base2 = 5;
const altura2 = 7;
const area2 = ( base2 + altura2) / 2;
console.log( `Area2 de triangulo: ${area2} cm2`);

//area de un circulo
const radio2 = 6
const area3 = Math.PI* (radio2 **2);
console.log(`Area de corculo: ${area3} cm2`);

// volumen de un cubo
const lado = 3
const volumen = lado ** 3
console.log(`Volumen de cubo: ${volumen} cm3`);


// verificador de acceso
const edadInvitado = 18;
const tieneEntrada = true;
const esVip = true;


const puedeEntrar = edadInvitado >= 18 && tieneEntrada;
console.log(` puede entrar: ${puedeEntrar}`); 

const accesoVip = puedeEntrar && esVip;
console.log(`¿tiene acceso VIP?: ${accesoVip} usuario VIP`);


const esMenor = !(puedeEntrar);
if (puedeEntrar) {

    console.log("Bienvendio");
    console.log(`¿es menor de edad? ${esMenor}`);

}else{

    console.log("No puede entrar");
    console.log(`¿es mayor de edad?: ${esMenor}`);
}