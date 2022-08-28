//*LOS OBJETOS:


//! 1. ¿QUE SON LOS OBJETOS?
/* 
Los objetos en JavaScript, como en tantos otros lenguajes de programación, se pueden comparar
con objetos de la vida real. El concepto de Objetos en JavaScript se puede entender con objetos 
tangibles de la vida real

En los objetos podemos utilizar constantes para definir objetos, es adecuado utilizar
const cuando estamos trabajando con objetos porque así evitamos que un nuevo objeto ocupe o 
cambie la referencia que en memoria tiene mi objeto.

Un Objeto en JAVASCRIPT es una colección de datos relacionados, dentro del objeto es donde declararemos sus
propiedadades tambien conocidos como tributos o laves(keys), y las funciones que en los objetos son conocidas
como métodos.

El formato para declarar propiedades y metodos en un objeto es sencillo, simplemente le damos nombre 
a esa propiedad que es un variable que esta dentro de un objeto, en vez de utilizar el operador de igual para inicializar el valor de
la propiedad, utilizamos el operado de dos puntos(:), de esta manera le asignamos valores a las propiedades. Cada vez que a cada propiedad
le asignemos un valor, debemos separalas por comas, para diferenciar cada una de ellas. De esta forma tambien 
podemos asignarle valores a los metodos, con la diferencia de que estos contaran con su estructura correspondiente. 

La estructura de un objeto es la siguiente:

const objeto = {
    propiedad1: valor1,
    propiedad2: valor2,
    propiedad3: valor3,
    metodo1: function(){
        //codigo
    },
  };

En los objetos podemos declarar propiedades con disintios tipos de datos, los tipos de datos que puede contener 
los atributos de un objeto pueden ser strings, numbers, booleanos, null, arrays, objetos anidados, funciones etc. En los obejtos
podremos almacenar todos los tipos de datos que existan en JavaScript.

Al momento de agregar mas propiedades o llaves debemos separar estas poniendo una coma (,)
para hacer la separacion entre una llave y otra.

Tambien hay que resaltar que tenemos tanto Objetos literales, que son los usualmente conocidos y tambien Objetos Constructores.
*/

//! 1.1. OBJETOS LITERALES:
const persona = {
    Nombre: 'Juan',
    Apellido: 'Ramirez',
    Edad: '18',
    Estudios: ['universidad', 'colegio'],
    Hijos: false,
    contacto:{ //Podemos crear objetos dentro de un objeto, de igual manera funciones o arreglos.
        nombre: 'Fernando',
        celular: '3201234543',
        casado: false,
        eda: 20
    },
    saludar: function(){ //Aca creamos una funcion dentro de un objeto.
        console.log('hola como estas');
    }
    }
    console.log(persona.Hijos); // -Para acceder a un objeto simplemente llamamos al objeto persona seguido de el punto y el nombre de la propiedad, ejemplo: .Edad
    console.log(persona.Estudios[1])//-Aca Pudimos acceder a la propiedad del objeto y a el arreglo que esta en la posicion 1 (colegio).  
    persona.saludar(); //-Aca accedimos a la funcion(METODO), que esta dentro del objeto, para esto primero pusimos 
                      // el nombre del objeto(persona), el punto para llamar la funcion(metodo), y el nombre de la funcion(metodo) 
                      // y al final los parentesis con el punto y coma (;). 
             
                      
_______________________________________________________________________________________________________________________

//! 2. FORMAS PARA ACCEDER A LOS METODOS Y PROPIEDADES DE LOS OBJETOS.


//! 2.1 Accediendo a variables de objetos aninados y arreglos:
/*
Los Objetos tienen algo llamado la sintaxis de punto, estas sirven para acceder a los atributos o propiedades de un 
objeto(Estas pueden ser cualquier tipo de dato), se puede hacer de la siguiente manera:

1. FORMA 1:
Primero se escribe el console log y entre parentesis se escribe el nombre del objeto seguido del punto que servira como medio 
para llamar al atributo o propiedad que queremos. Se hace de esta manera:
console.log(dato.nombre);
--> De esta manera podemos acceder al objeto llamado dato y acceder a su propiedad llamada nombre. 

2. FORMA 2:
Tambien existe otra forma que en vez de acceder con el punto podemos acceder mediante corchetes colocando entre comillas
la propiedad a la que queremos acceder, se hace de esta manera:
console.log(dato['nombre']);
--> De esta manera podemos acceder al objeto llamado dato y acceder a su propiedad llamada nombre. */

const objetos = {
    name1: 'josue',
    apellido: 'guzman',
    años: 20,
    dato: {
      nombre2: 'juan',
      apellido2: 'tovar',
      años: 20,
      dato2:{
        nomre3:'pablo',
        apellido3:'duran',
        arreglo: [1,2,3,[3,4['joseph']]],
        años: 22,
        
        dato3: {
          nombre4:'danna',
          apellido4: 'giraldo',
          años: 21,
          dato4: {
            informacion: false
          }
        }
      },
      fabricacion:{
        pais: 'china'
      }
    }
  }
  
/*Para acceder a las propiedades de este objeto utilizamremos la forma del punto o del corchete y como ejemplo accederemos 
al tercer objeto anidado llamado dato3 y a su propiedad llamada nombre4. */

//1. FORMA 1:
console.log(objetos.dato.dato2.dato3.nombre4);
 
//2. FORMA 2:
console.log(objetos['dato']['dato2']['dato3']['nombre4']);



//! 2.2 Accediendo a funciones:

/* Para acceder a una funcion ya cambia la forma de llamarla en comparacion a una propiedad, es diferente porque esta 
ya no es una propiedad, sino un metodo. Para acceder a un metodo debemos haremos lo siguiente: */


const obj = {
    nombre: 'juan',
    apellido: 'ramirez',
    edad: 20,
    saludar: function(){
        console.log('hola como estas');
    }
}

/*Primero se escribe el objeto que sera la ubicacion donde se encontrara el metodo,
seguida del punto que es la ruta para llamarla, y luego el nombre de la funcion, en este caso saludar.*/

obj.saludar(); //--> De esta forma accedemos al metodo que esta dentro de un objeto.

/*En conclusion dentro de un objeto a las variables de arrays u objetos anidados se les llama ATRIUTOS O PROPIEDADES.
Y dentro de un objeto a las funciones se les llama METODOS.
La manera de llamar a un atributo (Objetos aninados, arreglos, variables) es totalmente diferente 
que al llamar un metodo (Funciones).

*/

_______________________________________________________________________________________________________________________

//! 3. FORMAS PARA AGREGAR PROPIEDADES A UN OBJETO:
/*Para Agregar propiedades a un obejeto utilizamos la misma forma de acceder a el, pero con la diferencia
de que al llamar al objeto, pondremos el nombre de la propiedad que queremos agregar y su valor, inicializandolo con el operador de 
igual (=), esto lo haremos de la siguiente manera:
*/
const dato2 ={
    name:'josue',
    edad: 34,
}

dato2.nacimiento = 'enero'; /*De esta manera agregaremos como propiedad el mes de nacimiento y el su valor ('enero'), ahora 
el objeto quedara asi */

const datoo2 ={
    name:'josue',
    edad: 34,
    nacimiento: 'enero'
}

_______________________________________________________________________________________________________________________

//! 4. FORMAS PARA REASIGNAR VALORES A UNA PROPIEDAD:
/*Para reasignar el valor de una propiedad utilizaremos la misma forma de acceder a el, pero con la diferencia
de que al llamar al objeto, pondremos el nombre de la propiedad que queremos reasignar y su valor, inicializandolo con el operador de
igual (=), esto lo haremos de la siguiente manera: */

const datoo3 ={
    name:'josue',
    edad: 34,
    nacimiento: 'enero'
}

datoo3.nacimiento = 'febrero'; /*De esta manera reasignaremos el valor de la propiedad nacimiento y el su valor ('febrero').


_______________________________________________________________________________________________________________________


//! 5. FORMAS PARA ELIMINAR PROPIEDADES DE UN OBJETO:
/*
Para eliminar propiedades, loque tendremos que hacer es hacer uso de la palabra reservada delete, con esta palabra
podremos eliminar la propiedad que queramos, primero lo que tendremos que hacer sera escribir delete seguida
por el nombre del objeto y con el punto accedemos al nombre de la propiedad y asi quedara elliminada:

delete dato3.nacimiento;
*/

const dato3 = {
    name: 'josue',
    apellido: 'guzman',
    años: 20,
    nacimiento: 'diciembre'
}

delete dato3.nacimiento; //De esta manera podremos eliminar la propiedad nacimiento de nuestro objeto.

_______________________________________________________________________________________________________________________

//! 6. DESTRUCTURING DE OBJETOS:
/*
Este es un tema que veremos mas adelante mas sin embargo el destructuring es una forma para acceder a los nombres 
de las ropiedades o llaves objetos y signar sus propiedades a una variable.
Esta es una forma de minimizar la asignacion de variables que antes habia. */ 


/*por ejemplo la forma anterior de asignar las propiedades de un objeto sin destructuring era la siguiente:
*/

const producto = {
    nombre:'pc',
    precio: 300,
    disponible: true
}

const nombre = porducto.nombre;
const precio = producto.precio;
const disponible = producto.disponible;
console.log(nombre);
console.log(precio);
console.log(disponible);

/*Ahora con el destructuring, simplificamos el proceso y lo hacemos mas corto y eficaz.
Con destructuring seria de la siguiente manera:
*/
const producto1 = {
    nombre1:'pc',
    precio1: 300,
    disponible1: true
}

const {nombre1, precio1, disponible1} = producto1;
console.log(nombre1, precio1, disponible1);

/*Destructuring lo que hace es extraer la propiedad con el valor y almacenar esa llave y valor 
en una variable, por ejemplo la propiedad o llave (nombre1), tiene un valor de tipo string llamado ('pc'),
esta propiedad y valor al aplicarle el destructuring, quedara almacenada afuera del obejeto para despues
poderla llamar como una variable, y al ejecutarla nos mostrara su valor.

Si queremos extraer una llave que no existe pues obviamente no saldra nada,simplemente UNDEFINED, como palabra
reservada para indicar que el valor no existe o no esta definido, hay que tener claro que el
DESTRUCTURING ademas de extraer el valor, crea la variable.*/

_______________________________________________________________________________________________________________________

//! 


//!ALGUNAS PROPIEDADES DE LOS OBJETOS QUE NOS AYUDAN A TRABAJAR CON ELLOS:

const objetoss = {
    nombre: 'Ana',
    apellido: 'Gabriela',
    ocupacion: 'Mantenida',
    relacion: 'Divorciada',
    edad: '20',
    estudios: 'Economia',
    hijos: false,
    datos: [2019, 2020, 2021, 2022],
    saludar: function(){
        console.log(`Hola soy ${this.nombre} ${this.apellido}`); //La propiedad this hace refrencia a las propiedades que estan en el
                                                                // objeto global en este caso (objeto) y this llama a nombre y apellido
    }                                                           //* tal parece que "no estoy seguro" (El metodo this no funciona con las arrow functions si no con las funciones declaradas)
}

console.log(Object.values(objetoss)); //Me da los valores de las llaves del objeto.
console.log(Object.keys(objetoss)); // Me da las llaves de el objeto, es decir, los nombres de las propiedades y metodos.
console.log(Object.entries(objetoss)); //Me da las llaves y los valores de el objeto.
console.log(Object.getOwnPropertyNames(objetoss)); //Me da las llaves de el objeto, es decir, los nombres de las propiedades y metodos.
console.log(Object.getOwnPropertyDescriptor(objetoss, 'nombre')); //Me da la llave del atributo nombre y su description.
console.log(Object.getOwnPropertyDescriptors(objetoss)); //Me da las llaves de el objeto y la description de los atriutos y metodos.
console.log(objetoss.hasOwnProperty('nombre')); //Esta propiedad busca y me permite saber si el objeto tiene la propiedad nombre por ejemplo.

//! USE STRICT:
/*
Si recordamos en una variable declarada con CONST una vez que es definida no puede reasignarse su valor, sin embargo los
objetos si se pueden reasignar sus llaves, eso pasa por que aunque una variable estel este declarada con CONST, al estar en un
objeto sus propiedades si se pueden reescribir o eliminar.

Entonces esto se puede prevenir utilizando un metodo prevenir que se pueda modificar y que se comporte como una constante, es decir
que no pueda ser modificado. Para esto habilitaremos lo que se conoce como MODO ESTRICTO, esto basicamente lo que hace es evaluar el codigo de forma
escrita, es decir no permitas malas practicas en el documento. Hbailitar el modo estricto nos obligara a cumplir ciertas reglas al momento
de escribir el codigo de JAVASCRIPT. 

Para activar el modo estricto solo ponemos al inicio "use strict"; y de esta manera se activara 



*/