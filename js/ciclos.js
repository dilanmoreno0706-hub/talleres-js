
for(let i = 0; i < 5; i++){
    console.log(`iteración : ${i}`);
}
//tabla de multiplicar

const tabla = 4;
for (let p = 1; p <= 10 ; p++){
    console.log(`${tabla} * ${p} = ${tabla * p}`);
}

// contar de 10 a 1 (cuenta regresiva)
for( let a =10 ; a >= 1; a--){
    console.log(a);

}
console.log("¡Despegue!");
// ciclo while
//sumar número hasta superar 100
let suma = 0;
let numero =1;

while ( suma < 100){
    suma = suma + numero;
    numero++;
}
console.log(`la suma final es :${suma}`);
console.log(`se sumaron ${numero - 1} números`);
// ciclo do...while
let contador = 0;

do{
    console.log(`contador en : ${ contador}`);
    contador++

}while (contador < 6);
console.log("hola");
//ejercicios
//suma acumulada
let suma2 = 0;

for(let n = 1; n <= 100; n++){
    suma2 += n; 
}
console.log(`la suma del 1 al 100 es : ${suma2}`);
//numeros pares 
//entre el 1 y 20
console.log("Número pares entre 1 y 20 :");
for ( let c = 1; c <= 20; c++){
    if(c % 2 === 0){
        console.log(c);
    }
}
//dibujar una piramide
const altura = 7;
for(let m= 1; m <= altura; m++){
    let linea ="";
    for ( let j = 1; j <= m; j++){
        linea +="* ";
    }
    console.log(linea);
}
//retos /#7
console.log( " tabla de multiplicar del 8");
const tabla2 = 8;
for( let o = 1; o <= 12; o++){
    console.log(`${tabla2} * ${o} = ${tabla2 * o}`);
}

//reto #8 Factorial de un numero (6)
let numero2 = 6;
let factorial = 1;

for (let t = 1; t <= numero2; t++) {
    factorial = factorial * t;
}

console.log(`El factorial de ${numero2} es: ${factorial}`);
//reto #9 Adivinanza de número 
const secreto = 7;
let intentos = 1;

while (intentos <= 20){
    if(intentos === secreto) {
        console.log(`¡Encontrado en el intento ${intentos}!`);
        break;
    }
    intentos++;
}
 