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
