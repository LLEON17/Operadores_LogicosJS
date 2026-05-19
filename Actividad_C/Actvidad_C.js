alert("____ Inicio del sistema de temperatura en una ciudad____");

let temperatura = prompt("Ingrese la temperatura actual: ");

if (temperatura >= 30) {
    alert("Hace calor");
} else {
    alert("Clima agradable");
}

alert("____Final del sistema de temperatura en una ciudad_____");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

alert("____ Inicio del sistema de calculo de velocidad ____");

let velocidad = prompt("Ingrese la velocidad del vehiculo: ");

if (velocidad < 30) {
    alert("Muy lento");
} 
else if (velocidad >= 30 && velocidad <= 60) {
    alert("Velocidad moderada");
}
else if (velocidad > 60 && velocidad <= 100) {
    alert("Rapido");
}
else {
    alert("Muy rapido");
}

alert("____ Fin del sistema de calculo de velocidad ____");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


alert("____ Inicio del sistema de clasificar mes del año :) ____");

let mes = prompt("Ingrese el numero del mes que desea consultar rango de numero del (1 - 12): ");
mes = Number(mes);

switch (mes) {
    case 1:
        alert("Enero") ;
        break;

    case 2:
        alert("Febrero")
        break;

    case 3:
        alert("Marzo") ;
        break;

    case 4:
        alert("Abril") ;
        break;

    case 5:
        alert("Mayo"); 
        break;

    case 6:
        alert("Junio");
        break;

    case 7:
        alert("Julio") ;
        break;

    case 8:
        alert("Agosto");
        break;

    case 9:
        alert("Septiembre");
        break;

    case 10:
        alert("Octubre");
        break;

    case 11: 
        alert("Noviembre");
        break;

    case 12:
        alert("Diciembre");
        break;

        default:
        alert("Mes no Existe en el calendario :(");
        break;
    
}

alert("____ Fin del sistema de clasificar mes del año _____");