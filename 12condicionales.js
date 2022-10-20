//*CONDICIONALES:
/*
Los lenguajes de programación utilizan instrucciones ESTRUCTURAS DE CONTROL en este caso hablaremos de las (condiciones) 
para controlar el flujo de ejecución del programa en función de ciertas condiciones.
Estos se utilizan para hacer que el flujo de ejecución avance y se ramifique en función de los cambios en el estado de
 un programa.

Es una sentencia que nos permite validar algo, esto lo que hace es ejecutar un fragmento de bloque. 
Sirven para hacer que los bloques se ejecuten solo si una condicion se cumple ya sea positiva o negativa
dependiendo del caso.

Otras estructuras de control tambien pueden ser los loops (ciclos) que nos permiten repetir un fragmento de código.
*/ 



//*CONDICIONAL IF... ELSE
/*
if-else: La sentencia if sola nos dice que si una condición es verdadera ejecutará un bloque 
de declaraciones o sentencias JavaScript y si la condición es falsa no lo hará.
Pero qué pasa si queremos hacer algo más si la condición es falsa. Aquí viene la otra declaración.
Podemos usar la instrucción else con la instrucción if para ejecutar un bloque de código cuando
la condición es falsa.
 
*/
let compra = 20_000;
let descuento= 40_000;

if (compra >= 40_000){                //La condicion if siempre sera verdadera, en caso de que no se cumpla pasara al else que esta sera la falsa.
    console.log("Tendra descuento");  //Si la condicion se cumple entrara en el if, si no se cumple entrara al else.
}else
    console.log("No tendra descuento");



//*CONDICIONAL ELSE IF
/*
Los ELSE IF se utilizan cuando tenemos mas de 2 opciones, son como rangos de if anidados que nos permiten agregar mas opcinones, 
para utilizar nuestro condicional. Un ejemplo de esto es el siguiente:
*/

let nota = 3.5;   //En este ejemplo se busca mirar si la nota del alumno es suficiente para que este apruebe o no.

if (nota >= 0.0 && nota < 1.0){
    console.log('nota insuficiente, no aprobo');
}else if(nota >= 1.0 && nota < 2.0){ //Aca utilizamos el operador logico && para que se cumpla estrictamente la condicion.
    console.log('nota regular, no aprobo');
}else if(nota >= 2.0 && nota < 3.0){
    console.log('nota aceptable, no aprobo');
}else if(nota >= 3.0 && nota < 4.0){
    console.log('nota sobresaliente, aprobo');
}else if(nota >= 4.0 && nota < 5.0) {
    console.log('nota excelente, aprobo con honores');
}else {
    console.log('nota no existente'); //se utilizara el else, por si acaso alguna de las opciones anteriores a este no se cumple. 
}




//* OPERADOR TERNARIO
/*
El operador ternario es una estructura de control que nos permite escribir una condición más corta.
es una simplificacion de la estructura if-else en una sola linea de codigo. 

Este OPERADOR TERNARIO esta estructurado en 3 partes:
1. Condicion que se evalua, esta va entre parentesis. --> (edad >= 18 )
2. Valor si la condicion es verdadera y se cumple --> ? 'Es mayor de edad' 
3. Valor si la condicion es falsa y no se cumple --> : 'Es menor de edad';
*/

let edad = 17; 

let mayorEdad = (edad >= 18 ) ? 'Es mayor de edad' : 'Es menor de edad'; 
console.log(mayorEdad);




//*ESTRUCTURA SWITCH CASE
/*
Una sentencia switch puede reemplazar múltiples condiciones if,
Provee una mejor manera de comparar un valor con múltiples variantes.

Nos servira cuando tengamos evaluar diferentes casos o valores para una misma variable.
*/
let dia = 2;

switch (dia){
    case 0:    //Todo lo que este despues de los dos puntos y antes del break es lo que se ejecutara en cada caso.
    console.log('El dia de hoy es Domingo');
    break;    //Break nos permite salir de cada caso del switch.

    case 1:
    console.log('El dia de hoy es Lunes');
    break;

    case 2:
    console.log('El dia de hoy es Martes');
    break;

    case 3:
    console.log('El dia de hoy es Miercoles');
    break;

    case 4:
    console.log('El da de hoy es Jueves');
    break;

    case 5:
    console.log('El dia de hoy es Viernes');
    break;

    case 6:
    console.log('El dia de hoy es Sabado');
    break;

    default:  //Si dado que ningun caso se de, entrara en el default, es decir, 
    console.log('El dia no existe'); //si no se cumple ninguna condicion entrara en el default por defecto.
    break;

}


//Estas seran las estructuras de control cuando necesitemos trabajar con condiciones.