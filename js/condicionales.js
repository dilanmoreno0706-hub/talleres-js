// clasificador de edades
const edad = 13;
let categoria;

if (edad < 0) {
    categoria = "edad inválida";
} else if ( edad < 12) {
 categoria = "niño";  
}else if (edad < 18){
    categoria =" adolescente";
}else if (edad < 30){
categoria = "joven adulto";
}else if (edad < 60 ){
    categoria = "Adulto";
}else {
    categoria ="Adulto mayor";
}
console.log(`con ${edad} años eres: ${categoria}`);

// ejercicio 2 validador de contraseña 
const password = "sena202688548548kdfjlksdfksdkljk";

if ( password.length < 8) {
    console.log("La contraseña debe tener al menos 8 caracteres");
}else if (password.length > 20){
    console.log("La contraseña no debe superar 20 caracteres");
} else {
    console.log("contraseña válida ✔");
}
// retos/ #1 calificador SENA
const nota = 67

if (nota >= 90 && nota <= 100){
    console.log("sobresaliente");
}else if (nota >=80 && nota <=89){
    console.log("Notable");
}else if (nota >=70 && nota <=79){
    console.log( "Aprobado");
}else if ( nota >=0 && nota<=60){
    console.log("No aprobado");
}else{
    console.log("nota inválida");
}
// operador terminario
let resultado = ( nota>= 70 && nota <=100) ? "Aprobó" : "No aprobó";
console.log( resultado);

//reto/ #2simulador de cajeros automático
const saldo = 1000000;
const retiro = 600000;

if ( retiro > saldo){
    console.log("Fondos insuficientes");
}else if (retiro <= 0 ){
    console.log("Monto inválido");
}else if ( retiro % 10000 === 0){
    const nuevoSaldo = saldo - retiro;
    console.log("Retiro realizado con éxito.");
    console.log("nuevo saldo: $" + nuevoSaldo);

}else {
    console.log(" Solo se permiten retiros múltiplos de 10000");
}