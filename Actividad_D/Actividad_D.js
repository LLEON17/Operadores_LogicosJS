
//1. Acceso a un sistema
//Un sistema debe permitir el acceso a un usuario si cumple estas condiciones:
// El nombre de usuario es "admin".
// La contraseña es "1234".
//Si no cumple las dos condiciones, debe mostrar "Acceso denegado".

alert (" ___ Sistema de Lógin ___");
// Se declara variable constante es decir (No cambia) usuario y Contraseña
const nombreUsuario ="admin";
const contraseñaUsuario ="1234";

let nombre = prompt ("Por favor ingrese el nombre de usuario:");
let contraseña = prompt ("Por favor ingrese la contraseña:");

if (nombre === nombreUsuario && contraseña === contraseñaUsuario) {
    alert ("!Hola  " + nombreUsuario + "  Accediendo...!");
} else {
    alert("Acceso Denegado");
}

alert(" ___ Finalización del sistema ___");


/////////////////////////////////////////////////////////////////////////


//2. Calcular precio de entradas al cine
//Un cine aplica las siguientes reglas:
//• Si el cliente tiene menos de 12 años, el valor de la entrada es 5000.
//• Si tiene entre 12 y 18 años, el valor es 8000.
//• Si es mayor de 18, el valor es 10000.
//Si el cliente es estudiante (condición adicional), se le aplica un descuento del 20%
//al valor de la entrada.

alert("__ Sistema de entradas a cine ___")
let edad = parseInt(prompt ("Para poder ingresar al cine, ingrese su edad:"));
let estudiante = prompt ("¿ Es estudiante? (si / no)") .toLocaleLowerCase().trim();
let precio;

if (edad <= 12) {
    precio =5000;
} else if (edad > 12 && edad <= 18) {
    precio= 8000;
} else {
    precio=10000;
}

if (estudiante === "si") {
precio = precio * 0.8;
}

alert("El valor de la entrda al cine es de: $" + precio);
alert(" ____ Finalización del sistema de entradas al cine ____")


/////////////////////////////////////////////////////////////////////////////////////////////////
//3. Clasificación de números
//Crea un programa que pida un número entero y muestre:
//• "Número positivo" si el número es mayor que 0.
//• "Número negativo" si es menor que 0.
//• "Cero" si es igual a 0.
//Extensión: ¿Cómo cambiaría la solución si quieres que, además, se verifique si el
//número es par o impar?


alert (" ___ Sistema de clasificación de números___");

let numero = parseInt(prompt("Ingresa un número entero:"));

if (numero > 0){
    alert("Numero Positivo")
} else if (numero < 0){
    alert("Numero negativo")
} else {
    alert("Cero");
}

alert ("Extensión para verificar si es Par o Impar");


if (numero !== 0) { // el cero no se clasifica como par/impar en este ejemplo
if (numero % 2 === 0) {
    alert("El número es par");
} else {
    alert("El número es impar");
}
}


alert (" ___ Finalización del Sistema de clasificación de números___");

///////////////////////////////////////////////////////////////////////////////////////////

//4. Menú de opciones
//Un cajero automático presenta el siguiente menú:
//1. Consultar saldo
//2. Retirar dinero
//3. Depositar dinero
//4. Salir
//Crea un programa con switch que muestre la acción correspondiente según el número
//ingresado.
//Pregunta de análisis: ¿Qué pasaría si el usuario ingresa un número que no está entre 1
//y 4?

alert (" ___ Sistema de Cajero automático___");

let opcion =parseInt (prompt("___ Elija las siguinetes  opciones: 1 Consultar Saldo. 2 Retirar dinero. 3 Depositar Dinero. 4 Salir.___"))

switch(opcion){
case 1: 
alert("Bienvenido a Consultar Saldo.");
break;
case 2: 
alert("Has elegido retirar dinero.");
break;
case 3:
alert("Has elegido depositar dinero.");
case 4:
alert("Has elegido Salir, vuelve pronto...") 
break;
default: 
alert("Opcion Invalida: Por favor ingresa un numero entre el (1 y 4).")
}

alert (" ___ Finalización del Sistema de Cajero automático___");

///////////////////////////////////////////////////////////////////////////////////////////////
//5. Sistema de calificaciones con condiciones lógicas
//Un estudiante aprueba una materia si:
//• Su nota final es mayor o igual a 60 y
//• Su asistencia es mayor o igual al 80%.
//Si no cumple ambas condiciones, debe mostrar "Reprobado".

alert("___ Bienvenido al sistema de Calificaciones ___");

let nota =parseInt (prompt("Ingresa tu nota Final:"));
let asistencia = parseInt (prompt("Ingresa tu porcentaje de asistencia:"));


if (nota >= 60 && aistencia >= 80) {
    alert("Aprobado")
} else {
alert ("Reprobado")
}

alert("___ Fin del sistema de Calificaciones  Gracias por su atención!___");