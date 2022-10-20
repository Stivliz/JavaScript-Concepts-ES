/* FUNCIONES:

Una funcion es un bloque de codigo autocontenido independiente al scope o ambito gloal, que se puede definir
una vez y que se puede ejecutar en cualquier momento. Es decir es un fragmentico de codigo que se uede declarar
una vez y reutilizar cuantas veces puedan ser necesarias.
Para que un procedimiento califique como funcion, debe tomar alguna entrada y devolver una salida, 
donde hay alguna relacion obvia entre la entrada y la salida.

Ademas tambien es importante recalcar que una funcion puede o no recibir parametros y tambien puede devolver o no
dependiendo el caso valores (Argumentos).

Las funciones particularmente en JavaScript son un objetos, y son un tipo de datos muy especial, estas tambien se
consideran objetos.

Se dice que las funciones en javascript son ciudadanos de primera clase, es decir que las funciones son muy poderosas
en javascript porque las puedes asignar como valor, puedes retornar la ejecucion de una funcion adicional,
y se pueden retornar como valores.

En una funcion la sentencia return finaliza la ejecucion de la funcion y especifica un valor 
para ser devuelto a quien llama a la funcion. El return se utiliza cuando literalmente queremos  devolver el valor 
de la funcion y cuando queremos que la funcion deje de ejecutarse.

Hay dos maneras de crear nuestras funciones:
existen 3 tipos de funciones que son las mas conocidas: 
1.Funciones declaradas. 
2.Funciones expresadas 
3.Y hay otra que es mas expresiva y simplificada llama ARROW FUNCTIONS. 

En este caso estaran solo las Funciones Declaradas y las Funciones Epresadas, de las arrow Functions 
hablaremos mas adelante.

*/
________________________________________________________________________________________________________________________________

//*FUNCIONES DECLARADAS:
/*
Para declarar una función primero se debe poner la palabra reservada Function, después nombrar la función, 
una función siempre va a llevar paréntesis y estos paréntesis sirven para invocar después la función, después 
llevan sus llaves que definirá el cuerpo y dentro en el cuerpo hay una instrucción, una sentencia que muestra 
por consola lo que llevará la función.
Function estoEsUnaFuncion() {
	Console.log(“Uno”);
	Console.log(“Dos”);
	Console.log(“Tres”);
}
estoEsUnaFuncion(); -> Acá se está invocando la función.

Las funciones son un bloques de líneas de código autocontenido que se pueden definir una vez y ejecutar en cualquier 
momento.

Las funciones declaradas son alzables, esto quiere decir que si invocamos la función arriba de la función seguirá 
funcionando. Y seguirá funcionando porque JavaScript busca la inicialización, o declaración de variables con 
VAR no con LET o con CONST. Esto ocurre por el hoisting (Elevación).

*/

function estoEsUnaFuncion(){
    console.log("uno");
    console.log("dos");
    console.log("tres");
}   

/*
"La invocacion de funciones" es el nombre que recibe la forma en la cual llamamos a x funcion
que ya esta declararla para que se ejecute.
Para invocarla entonces neceitamos llamarla con el nombre de la funcion y los parentesis, ejemplo:
estoEsUnauncion();
*/
estoEsUnaFuncion(); // Se puede ejecutar en cualquier momento


________________________________________________________________________________________________________________________________

//!Una funcion puede aceptar parametros o valores.
/*
Para hacer que una funcion reciba valores se crea la funcion, y a esta funcion la pondremos a recbir
dos valores, puede ser nombre y edad, estos valores que parecieran variables son los parametros de una funcion,
es decir, son los valores que recibiran de los argumentos que internamente se van a utilizar para algo.
Para esto al momento de ejecutar la funcion, entre parentesis le agregaremos el valor a los argumentos y estos argumentos
se agregaran a los parametros dependiendo de la posicion, como se puede ver en el ejemplo, al parametro nombre se le agrego
el argumento (valor) de 'Luis' debido a que corresponde a la primera posicion y asi sucesivamente corresponderan con 
los demas parametros y argumentos que podamos agregar. 
El valor agregado de los argumentos a los parametros seran proporcionales a sus posiciones
*/

function valores(nombre, edad){ //Estos son los parametros y toman el valor de los argumentos. 
    consol.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}

valores('Luis', 21); //Estos son los argumntos (valores).

//¡Una funcion puede tener dferentes argumentos para el mismo parametro.

________________________________________________________________________________________________________________________________

//! Las funciones pueden retornar valores.
/*
para esto utilizamos una palabra reservada que devuelve el valor (RETUNRN).
(Una funcion puede devolver cualquier tipo de dato ya sea primitivo o compuesto)
Cuando el compilador encuntra la palabra reservada retunr,el codigo se ejecuta hasta ahi e ignora lo demas.
*/

function unafuncionQueDevuelveValor(){
    console.log("uno");
    console.log("dos");
    return "Los valores se retornaran hasta donde se encuentre la palabra reservada retunr";
}

/*Como en la funcion tenemos dos console.log(); se puede presentar el problema de que al ejecutarse no
retorne lo que esta en la palara reservada return, para arreglar o persuadir este problema lo que
podemos hacer sera declarar una variable externamente e inicializarla con el nombre de la funcion y despues la 
ejecutaremos con un console.log().

Lo ideal para arreglar o persuadir este problema es que en vez de tener un console.log() tengamos un RETURN, 
esto lo que hara sera retornarnos los valores que esten alojado en la funcion, como  de igual forma 
los consoles.log. 

Es muy importante saber que cuando tenemos una funcion que retorna algo, debemos crear y declarar si o si una variable externa
e inicializara con el nombre de la funcion que tendra dentro de su scope de bloque el valor retornado. 

Por ejemplo en esta funcion retornaremos la informacion que contiene dentro de su estructura, en este caso simplemente 
retornaremos esos valores creando una variable externa e inicializandola con el nombre de la funcion, que tendra dentro 
de su scope de bloque el valor que sera retornado. Despues llamaremos y ejecutaremos a esa variable dentro de un console.log().
*/

const almacenamiento = unafuncionQueDevuelveValor(); // La variable "Almacenamiento", contiene una funcion que retorna un valor.
console.log(almacenamiento); // Al ejecutar la variable retornara el valor almacenado en la funcion "unafuncionQueDevuelveValor"


/*
Ahora como ejemplo tendremos una funcion con parametros que realizaran y retornaran un calculo realizado dentro de su escope, para esto
crearemos y declararemos una variable externa inicializandola con el nombre de la funcion y los argumentos que seran los valores captados 
por los parametros que realizaran el calculo y despues retornar el resultado. Despues deberemos ejecutar la variable con un console.log(), 
para conocer el resultado de la operacion retornada, realizada dentro del scope de la funcion.
*/

function calculo (a,b){
    return a * b
}

const operacion = calculo (2,3); // La variable "Operacion", contiene la funcion calculo(2,3) que tiene dentro de sus parentesis los valores
                                 //que seran pasados como argumentos a los parametros.

console.log(operacion); //Al ejecutar la variable operacion, retornara la operacon almacenada en la funcion calculo(). El resultado sera = 6.


/* Ya aclarado anteriormente que cuando el navegador encuentra la palabra reservada retunr ignorara todo lo que este
despues de esta y solo se ejecutara hasta donde este esta palabra reservada, tambien es importante
decir que podremos retornar valores, podrian ser una cadena de texto, un numero, un objeto
un arreglo o una misma funcion, auqnue habra veces que nuestras funciones no tendran la necesidad
de retornar valores, depende del caso.
*/


________________________________________________________________________________________________________________________________

//!Asignacion por defecto a los parametros:

/*Tambien se le pueden asignar valores por defecto, a los parametros de una funcion:
Esto se logra en la declaracion del parametro igualando el valor.*/

function valores(nombre = 'desconocido', edad = 0){ //Estos son los parametros y se le esta asigando un valor. 
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}

/*Ddo el caso que los parametros tengan un valor por defecto pero a su vez nosotros queramos pasarle como valor a los parametros 
los argumentos, estos (argumentos) tendran mas relevancia que los valores de los parametros por defecto, con lo cual 
tomara a los valores de los argumentos por encima que los valores por defecto, si no le pasamos argumentos a los parametros,
los valores que aparece, seran los valores por defecto*/

valores('Luis', 21);

/* Ahora digamos que queremos utilizar el valor por defecto del primer parametro, pero no el valor por defecto del segundo, en vez de eso
quiero utilizar como valor del segundo parametro un argumento, pero ¿que hago ahi?, ya que al poner solo un valor como argumento lo que esto
hara sera tomar la posicion del primer parametro como argumento y le pasara ese valor al primer parametro, osea de esta manera:
*/
function valores1 (nombre = 'desconocido', edad = 0){ //Estos son los parametros y se le esta asigando un valor. 
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}

valores(21); /* De esta manera el valor del argumento sera dirigido al primer parametro y este valor como argumento queremos que vaya 
al segundo parametro, ya que queremos dejar el valor por defecto del primer parametro, para realizar esta accion lo que haremos sera 
lo siguiente: */

valores(undefined, 20); /*Lo que haremos sera pasarle directamente undefine, de esta manera la primera posicion al no tener valor y o estar
definida tendra como valor del parametro, el valor por defecto que este ya contenia, y el segundo parametro adoptara como valor el argumento
que nosotros le queriamos pasar.*/

________________________________________________________________________________________________________________________________

//*FUNCIONES EXPRESADAS:


/*Hay otra manera de declarar funciones y eso se puede hacer utilizando las funciones como expresiones, es decir 
a las funciones expresadas se le asignan como valor a una variable, si invocamos
esta funcion antes de su definicion nos aparecera error, ya que no se le puede aplicar
el hoisting a las funciones expresadas.

Para crear funciones expresadas se suele aplicar const ya que el valor no cambiara, es lo que mas se acostubra
para crear funciones expresadas, utilizar const y no let. la sintaxis sera  esta funcion de expresion sera la siguiente:
*/

const esUnEjemplo = function (){  //Primero se inicia con el tipo de varible (const), el nombre de la funcion (esUnEjemplo)
                                  // la asignacion osea el igual (=), seguida de la palabra reservaada (function)
                                  //los parentesis () y por ultimo los corchetes {}.
}
/*

si tratamos con funciones expresadas, éstas solo seran evaluadas cuando el flujo natural de ejecución las alcanza. 
El siguiente código mostrará error ya que en el momento de llamar a la función, el intérprete aún no ha llegado 
a ella para evaluarla, es decir si invocamos esta funcion antes de su definicion JS nos dara error:

*/
alert( add( 3, 5 ) ); // ErrorType: add is not defined
 
const add = function( x, y ){
  return x + y;
}
________________________________________________________________________________________________________________________________

//!COMUNICACION ENTRE LAS FUNCIONES: 

/* Al momento de trabajar en grandes proyectos se manejaran un gran numero de funciones, debido a que en lugar de tener
una gran funcion con bastas lineas de codigo lo mejor sera que esta se pueda dividir en pequeñas partes
y alojar en otras funciones para hacer mas optimo el codigo, de esta manera cada funcion realizara una operacion 
y se podran comunicar unas con otras para generar una accion. Un ejemplo de lo anterior, en donde hay 
comunicacion entre funciones para realizar una accion sera el siguiente:
*/

inicioApp()

function inicioApp(){
    console.log('La Aplicacion esta iniciando...');
}

function autenticacionApp(){
    console.log('Se esta autenticando el usuario...')
    verificacion('Nick', 'Smith')
}

function verificacion(name, lastname){
    console.log(`El usuario ${name} ${lastname} ha sido verificado.`)
}
/*
La primera funcion tiene como trabajo iniciar la App, y esta despues de ser iniciada tendra que ser
autenticada por el usuario, por lo tanto desde la primera funcion invocaremos a la segunda, y cuando
se autentique el usuario, se podra llamar a la tercera funcion invocandola desde la segunda funcion,
donde pasaremos como valor de parametros el nombre del usuario ya verificado y de esta manera se creara 
una relacion o comunicacion entre las funciones. 

De eso trata como se pueden comunicar las funciones, es decir puedes ver que una funcion manda a llamar
a otra funcion dentro de ella, y siempre hay que tener en cuenta que debe haber una funcion que inicie todo,
es decir una funcion que arranque todo el sistema.

*/

//! Funciones que pasan como parametros a otras funciones(Callbacks):

/* Este es un tema que veremos con profuncidad mas adelante, pero que en efecto se puede decir que se pueden
pasar funciones como argumentos a otras funciones, estas mejor conocidas como CallBacks, un ejemplo de lo anterior a continuacion: */

//Primer ejemplo:

const llamadaPolicial = function(numero){
    return `llame al numero ${numero}, para llamada a la policia`
}

const llamadaUrgente = function(primordial){
    alert(primordial)
}

const emergencia = function(opcion1, urgente){
    const telefono = opcion1(123)
    urgente(telefono);
}

emergencia(llamadaPolicial, llamadaUrgente)


//Segundo ejemplo:

const obtenerSaludo = function(nombre) {
   return `Hola ${nombre}, bienvenido a Desarrollo Útil.`;
};
  
const imprimirSaludo = function(mensaje) {
   console.log(mensaje);
};

const alertSaludo = function(mensaje) {
   alert(mensaje);
};

const saludar = function (obtener, imprimir) {
   const saludo = obtener('Pablo');
   imprimir(saludo);
};
    
saludar(obtenerSaludo, imprimirSaludo);
saludar(obtenerSaludo, alertSaludo);

________________________________________________________________________________________________________________________________

//!FUNCIONES DECLARADAS VS FUNCIONES EXPRESADAS (DIFERENCIAS)
/*Las funciones declaradas se pueden invocar antes de ser declaradas o despues, esto debido el hoisting que
tienen las funciones declaradas, esto pasa igual con las variables var.
La diferencia es que mientras JavaScript hace un hoisting de las funciones delcradas, se pueden realizar esta invocacion, 
a diferencia de las funciones expresadas que no lo pueden realizar.

La diferencia principal radica en que mientras la primera es una declaración que forma parte de un programa global,
 la segunda es una expresión que forma parte de un punto concreto..

*/
________________________________________________________________________________________________________________________________

//!CONCLUSION
/*La forma correcta de definir una función varía según el comportamiento que esperemos de la misma: 
con las funciones declaradas,tenemos la seguridad de que siempre estarán disponibles en tiempo de ejecución. 
Con las funciones expresadas, veremos que éstas no son evaluadas hasta que el intérprete no alcance su posición 
en el código, lo cual puede generar errores en arquitecturas muy anidadas.

Por otro lado, el hecho de que las funciones declarativas se evalúen antes que las expresiones, pueden producir 
comportamientos no deseados cuando forman parte de condicionales. Para estos casos, el uso de las expresiones 
garantiza que éstas formarán parte del flujo general del programa, lo cual puede evitarnos sorpresa en determinados 
entornos.

A nivel de buenas practicas al nosotros declaras nuestras funciones de manera expresada hace que evitemos errores 
de compilacion por tener mal acomodado nuestro codigo, es decir nos estamos forzando a nosotros mismos a declarar 
primero nuestro codigo antes de ejecutarlo porque al tener todas las funciones expresadas no las podremos utilizar 
hasta que previamente hayan sido inicializadas.
*/

