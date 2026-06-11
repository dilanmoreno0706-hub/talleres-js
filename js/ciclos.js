
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
