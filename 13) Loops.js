 //*LOOPS = CICLOS O BUCLES 
/*
Las estructuras de control (LOOPS) nos van a permitir controlar el flujo de nuestra programación y estos son los llamados
ciclos o bucles o estructuras repetitivas. Por ejemplo dependiendo de que se evalué una condición, quizás tengamos
la necesidad de que ciertas líneas de código se estén ejecutando hasta que se cumpla la condición, aunque aquí tendremos 
en cuenta el incremento o decremento de alguna variable que hace cambiar ese valor y que va a hacer que se repitan esas 
líneas de código hasta que la variable en cuestión que estemos evaluando llegue al valor deseado y siguiente a esto
entonces se salga de ese ciclo.

En ocasiones nos interesa que ciertas partes de nuestro código se ejecuten varias veces dependiendo de una condición,
es ahí donde entran los bucles para ayudarnos. Existen tres elementos que controlan el flujo de ejecución de un bucle,
las siguientes características son:


--> Un contador: que se inicia con un determinado valor — este será el valor del punto inicial del bucle.

--> Una condicion de salida: que será el criterio bajo el cual, el bucle se romperá — normalmente un contador que 
alcanza un determinado valor. 

--> Un iterador: que generalmente incrementa el valor del contador en una cantidad pequeña a cada paso del bucle,
hasta que alcanza la condición de salida. 

Algunas estructuras repetititvas son: While, Do...While, for, for-in(Objetos), for-of(Array);
*/
______________________________________________________________________________________________________________

//* WHILE (MIENTRAS):
/*
El bucle while empieza por evaluar la condición. Si la condición es verdadera (devuelve true), 
entonces las sentencias son ejecutadas. Si la condición es falsa (devuelve false), entonces las sentencias no son 
ejecutadas, luego el bucle finaliza. Mientras se cumplan una condición se ejecutará el código que nosotros pongamos 
entre llaves {}.

Su estructura es:
while (condición) { //Dentro de llaves ira, el código que se quiera ejecutar.
  ejecucion del ciclo while;
  iterador;
}
*/

let contador = 3; //Declaramos una variable contador.
while (contador <= 13){ //Evaluamos la condicion del while.
    console.log(contador); //Ejecutamos el ciclo while.
    contador++; //Incrementamos el contador.
}



//Este ciclo while ira dentro de una funcion.
function bucleWhile(num){ //Recibe un numero como parametro.
    let i = 0;   //contador del while
    while( i < num){ // condicion del while
    console.log(i); //consola o sentencia para ver en pantalla la ejecucion del bucle.
    i++;     //iterador del while
    }         
}
bucleWhile(12); //Aca se ejecuta la funcion con el argumento 12 que sera el valor del parametro que recibira la funcion.


______________________________________________________________________________________________________________

//* DO WHILE (HACER MIENTRAS):
/*
El bucle  do...while  está cercanamente relacionado al bucle while. En el bucle  do...while , 
la condición se evalúa al final.

Aquí la sintaxis para el bucle do...while:


do { //Dentro de llaves ira, el código que se quiera ejecutar.

   Sentencias(console.log()); // Aquí las sentencias son ejecutadas por lo menos una vez antes de que la condición o expresión booleana sea 
                              evaluada y es re-ejecutada cada vez que la condición devuelve true.
    iterador ++; // Aquí ira el iterador que se ejecuta.
} while (*condición*); // Aquí la condición se evalúa.

*/



let x = 0;

do{
    x += 1; //Incrementamos la variable x.
    console.log(x); //Ejecutamos el ciclo do...while.
    x++;  // Iterador de incremento.
} while(x < 5); //Evaluamos la condicion del do...while.



______________________________________________________________________________________________________________

//* FOR:
/*
El FOR es una estructura que consta de tres partes para controlar el flujo de un código que esta controlado por un 
ciclo en una sola línea de código. Nos permite resumir en una sola línea lo que haríamos con un bucle WHILE.
La sintaxis o estructura es la siguiente:

1.INICIALIACION: Sucede antes de la primera ejecución del bucle. Esta expresión es comúnmente utilizada para crear 
contadores. Las variables creadas tienen un alcance (scope) limitado al cuerpo del bucle. 
Una vez que el bucle ha terminado su ejecución las variables son destruidas.

2.CONDICION: Expresión que es evaluada antes de la ejecución de cada iteración. Si se omite, esta expresión es
evaluada como verdadera. Si devuelve true, la sentencia del cuerpo del bucle se ejecuta. Si devuelve false, 
el bucle se detiene.

3.Expresión final(ITERACION): Expresión que se ejecuta luego de cada iteración. Usualmente es utilizada para incrementar un 
contador. Pero también puede ser utilizada para decrementar el contador.

4.SENTENCIA O DECLARACION: Es decir las líneas de código que será ejecutado repetidamente por el bucle For.

Estructura del condicional FOR:

for (Inicializacion; Condicional; Iteracion){
    Sentencia;
}

*/

for(let x = 0; x < 10; x++){ //Inicializacion, Condicion, Incremento o decremento (Expresion Final).
    console.log('EL numero es: ' + x); // Sentencias o ejecucion del condicional FOR.

}

let numeros = [1,2,3,4,5,6,7,8,9,];

for( let i = 0; i < numeros.length; i++){ // El metodo length nos mide la longitud del arreglo.
    console.log('Los numeros son '+ numeros[i]);
}

for(let x = 0; x < 10; x+=2){ //En este ejemplo el incremento es de 2, por lo cual se imprimiran los numeros pares.
    console.log(x);          // de 2 en 2 hasta 10.
}



______________________________________________________________________________________________________________

//* FOR IN:
/*
El bucle for in es un bucle(Loops) que nos permite recorrer o iterar las propiedades de un objeto.
es un FOR especial para un objeto.

Entonces la sintaxis del bucle for in es:

1. Primero nos dice que debemos crear una variable (const), que va a representar la propiedad que queremos imprimir 
(prop) y que esta dentro (in) de un objeto (objeto). se representaria asi:

 for (const(VARIABLE) prop(PROPIEDAD) in(DENTRO DE) objeto(EL OBJETO CON EL QUE ESTAMOS TRABAJANDO)){
 }

2.seria asi:

for(const prop in datos){ //El metodo in nos permite recorrer la propiedad del objeto, en este caso el objeto es (datos).
    console.log();// sentencia

En definitiva este CICLO o LOOP nos permite recorrer las propiedades de un objeto, osea darnos las llaves que a su vez
son los nombres de las propiedades del objeto.


3.Para acceder no solo al nombre de sus propiedades, sino ademas al valor de ellas podemos hacer:

const datos ={
    nombre: "juan",
    Apellido: "Rodriguez",
    Edad: 23,
    Casado: false
}

for(const prop in datos){ 
console.log(`Key: ${prop}, Value: ${datos[prop]}`);--> nombre del objeto[nombre de la variable de la propiedad] 
                                                    nos permite acceder a los valores de las propiedades.
                                                    en este caos seria:
                                                    ${datos[prop]}.

                                                --> No podemos utilizarlo de esta manera:
                                                    ${datos.prop}, por que el valor seria indefinido, entonces
                                                    recurrimos a la primera forma. 

                                                --> La notacion del punto no nos servira para imprimir en un FOR IN
                                                    el valor de la propiedad de un obejeto por lo cual recurrimos 
                                                    a la nota del corchete.
*/


const datos ={
    nombre: "juan",
    Apellido: "Rodriguez",
    Edad: 23,
    Casado: false
}

for(const prop in datos){ //El metodo in nos permite recorrer la propiedad del objeto, en este caso el objeto es (datos).
    console.log(`Key: ${prop}, Value: ${datos[prop]}`); // datos[prop] nos permite acceder a los valores de las propiedades.
}



______________________________________________________________________________________________________________

//* FOR OF:
/*
Nos va a permitir recorrer todos los elementos de cualquier objeto que sea iterable en javascript, osea que se pueda 
partir en pequeños elementos. Este metodo va mas que todo relacionado a los arreglos, pero de igual forma se puede
utilizar para recorrer los elementos de un objeto. 

La estructura del bucle FOR OF es igual que el bucle FOR IN, pero en este caso cambiamos IN por FOR:
for (const(VARIABLE) elemento(PROPIEDAD o elementos) of(DE) objeto(EL OBJETO CON EL QUE ESTAMOS TRABAJANDO)){
}

La representacion de un ejemplo seria asi:

const numeros =[1,2,3,4,5,6,7,8,9,];

for(const elemento of numeros){ //El metodo of nos permite recorrer los elementos de un objeto, 
    console.log(elemento);      en este caso el objeto es (numeros).
}


*/

const numeros2 = [1,2,3,4,5,6,7];

for (const elementos of numeros2 ){

    console.log(elementos);

}






    