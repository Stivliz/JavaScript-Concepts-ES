//*ARROW FUNCTIONS
/*
Las arrow function son una nueva implementación que vino a mejorar sobre toda la manera en 
que escribimos, es una forma más expresiva, más sintética e incluso más fácil de comprender, 
se entiende el tipo de expresiones que queremos lograr con las arrow functions, 
es una nueva manera de definir funciones anónimas, es decir, funciones que no tienen nombre,y sean expresadas,
con una estrucuta más limpia y más sencilla de comprender.
*/
_______________________________________________________________________________________________________________


//!SINTAXIS DE UNA ARROW FUNCTION:
/*
La sintaxis de una arrow function es similar a una funcion expresada  como en este caso: */

const saludoo = function(){
    console.log('hola')
}

/*Pero en el caso de la Arroy Function simplemente se basa en quitar la palabra function, despues de la asignacion 
quedaria solo el parentesis, y por asi decirlo colocamos la funcion del lado derecho del parentesis,
no como palabra reservada(Function), si no con la sintaxis de igual y mayor que (=>), que hace referencia a la funcion.

El parentesis se mantendra, por que ahi es donde le pasaremos los parametros a la funcion, con lo cual el unico cambio 
se presenta al momento de hubicar la funcion con el simbolo (=>), despues del parentesis.
*/

const saludo = () => { // El simbolo => hace referencia a FUNCTION.
    console.log('hola')
}; //--> Esta es la forma de escribir una arrow function.
saludo(); //--> Esta es la forma de llamar a la arrow function.



_______________________________________________________________________________________________________________


//?Arrow function de una sola linea:

/*Cuando la Arrow Function tiene una sola línea de instrucción, como en nuestro caso, podemos omitir las llaves 
y dejarla así: */

const saluda = () => console.log('hola');

/* Tambien en este caso las arrow funtion al ver que solo es una linea dan por implicito el return, por lo tanto
podremos eliminar el console.log del ejemplo anterior, y despues lo podremos llamar, ya que esta uso del return, 
por lo tanto se debe llamar la funcion para que se imprima el contenido, quedaria asi: */

const saludaa = () => 'hola';

console.log(saludaa()); // -> De esta manera podremos ejecutar (Hola), el uso del return implicito.

_______________________________________________________________________________________________________________


//?Cuando la ARROW FUNCTION recibe parametros:
/*
Para recibir parámetros una función flecha, ponemos entre los paréntesis el paso de los parámetros, imaginémonos 
que saludaremos a una persona entones pedimos el nombre y pues saludamos a lo que el usuario nos pase: 
*/

const saludos = (nombre,apellido, edad) => {
    console.log(`hola me llamo ${nombre} ${apellido} y tengo ${edad} años`);
}
saludos('juan', 'perez', 23);

_______________________________________________________________________________________________________________

//?Cuando la ARROW FUNCTION no recibe parametros:
/*Cuando una función flecha no recibe parámetros entonces forzosamente tendremos que poner paréntesis y dejar 
vacio el espacio del parentesis, si esta cuenta con una sola linea de codigo, podremos omitir sus corchetes,
pero si tiene mas de una linea de codigo, debemos respetar la estructura que la integra, por ejemplo: 
*/

const saludar = () => console.log('hola');

/* En esta arrow function, no cuenta con parametros por lo que se deja sus parentesis vacios, ademas al solo tener 
una linea de codgio podremos omitir sus corchetes.

Pero si por el contrario, la Arrow function no tuviera parametros pero si mas de una linea de codigo entonces 
su estructura seria la siguiente:
*/
const ejemplo = () => {
    console.log('uno');
    console.log('dos');
    console.log('tres');
    }
    ejemplo();
    
______________________________________________________________________________________________________

//?Cuando la ARROW FUNCTION recibe solo 1 parametro:

//Cuando la arrow function recibe solo 1 parametro, podemos omitir los paréntesis y las llaves y dejarlo así:

const dato = nombre => console.log(`hola ${nombre}`);
dato('juan');

______________________________________________________________________________________________________
//?Las ARROW FUNCTION nos permiten hacer retunr implicito:
/*
Esto sobre todo en la programación funcional en donde tendemos mucho a mandar parámetros transformarlos 
en una instrucción de código y luego devolverlos otra vez, aquí las arrow functions juegan un papel muy 
importante porque nos permiten hacer ese return implícito, tener todo en una línea de código, así como podemos 
nos permite omitir la palabra function, también nos permite omitir la palabra return.*/

//1. Con retunr, normalmente quedaria asi:
const sumar = function (a, b){
    return a + b;
}
console.log(sumar(2,4));

//2. Con las arrow function al tener return implicito quedaria asi:
const sumar1 = (a, b) => a + b;
console.log(sumar1(2,3));

/*
Aquí como está recibiendo 2 parámetros ya no nos permite omitir los paréntesis, esto solo funciona si solo 
recibimos un solo parámetro. Podemos ver como se vuelve más expresiva las arrow functions con las omisiones 
del function y return. También hay que recordar que si la función solo tiene una sola línea de código, 
no hacen falta las llaves, pero si esta función expresada tiene más de una línea de código si hay que respetar 
el cuerpo de la función y poner las llaves.*/

______________________________________________________________________________________________________

//?Cuando las ARROW FUNCTION tienen varias lineas de codigo:
/*
En este ejemplo, la arrow function al tener mas de 1 linea de codigo, debemos respetar la estructura que la integra
donde esta tendra sus parentesis y corchetes. Esto quedaria de esta manera:
*/
const funcionvariaslineas = () => {
    console.log('uno');
    console.log('dos');
    console.log('tres');
    }
    funcionvariaslineas(); 

/*Aquí ya tengo más de una línea de código, por ende no puedo hacer un return implícito, entones forzosamente 
tienen que llevar sus respectivas llaves.*/
______________________________________________________________________________________________________    

//? ARROW FUNCTION en arreglos:
/*
Las arrow functions también pueden ser muy interesantes para iterar los elementos de los arreglos y objetos. 
Por ejemplo Imaginémonos que tenemos un arreglo que se llame:*/

 const números = [1,2,3,4,5,6];

/*
y digamos que yo tengo que iterar sobre cada uno de los números de ese arreglo e imprimirlos en pantalla, 
entonces nosotros sabemos que tenemos el método (forEach) de los arreglos que recibe una función, en donde puede 
recibir el elemento que está recorriendo del arreglo y la posición, osea su indice.

Con lo cual esta seria su estructura:*/

const numeross = [1,2,3,4,5,6];

numeross.forEach(function(el,index){
    console.log(`${el}, es igual a la posición ${index}`);
});

/*Es una forma muy engorrosa y tediosa de hacerlo, mas sin embargo con las arrow functions podemos 
hacerlo de la siguiente manera, simplificando la estructura del arrar con el metodo forEach:
*/

const numero = [1,2,3,4,5,6];

numero.forEach((el,index) => console.log(`${el}, es igual a la posición ${index}`)); 

/* De esta manera todo el codigo queda en una sola linea y las ARROW FUNCTION nos ayudan a simplificar
el codgio y volverlo mas expresivo y facil de comprender.
*/

______________________________________________________________________________________________________

//? ARROW FUNCTION con this:

/* En los objetos hay una palabra resevada llamada THIS, y esa hace referencia al objeto o al contexto 
en el que esta se encuentre.

THIS en funciones normales como las delcaras y expresadas, respeta el contexto en el que estas se encuentren, pero 
en las ARROW FUNCTION captura el contexto global ya que las ARROW FUCTIONS tienen la capcadidad 
de saltarse el contexto en el que estas estan, por ejemplo estas pueden estar dentro de un objeto y al declarar
THIS esta heredara o reconocera el contexto en el que se encuentra su objeto padre (Si es que estas estan dentro de
un Objeto) en el que ha sido declarado, en pocas palabras el contexto GLOBAL, mientras que una funcion declarada 
o expresada respeta el contexto en la que esta se pueda encontrar (Podria ser dentro de un Objeto), 
las ARROW FUNCTION no, estas se lo saltan y optan por tener un contexto Global. */