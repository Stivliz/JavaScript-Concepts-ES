//*LOS OBJETOS:
/* 

Los objetos en JavaScript, como en tantos otros lenguajes de programación, se pueden comparar
con objetos de la vida real. El concepto de Objetos en JavaScript se puede entender con objetos 
tangibles de la vida real

Un Objeto en JAVASCRIPT es una colección de datos relacionados, dentro de un objeto 
las variables llevan el nombre de propiedades y las funciones se llaman métodos.

En los objetos podemos utilizar constantes para definir objetos, es adecuado utilizar
const cuando estamos trabajando con objetos porque así evitamos que un nuevo objeto ocupe o 
cambie la referencia que en memoria tiene mi objeto.

Las variables en los objetos son atributos o propiedades.
En los objetos las funciones son métodos.
Los métodos se igualan a las funciones con doble punto (:),
así como se iguala el valor de las propiedades.

*/

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
    console.log(persona.Estudios[1])//-Aca Pudimos acceder a la propiedad del obejeto y a el arrelo que esta en la posicion 1 (colegio).  
    persona.saludar(); //-Aca accedimos a la funcion(METODO), que esta dentro del objeto, para esto primero pusimos 
                      // el nombre del objeto(persona), el punto para llamar la funcion(metodo), y el nombre de la funcion(metodo) 
                      // y al final los parentesis con el punto y coma (;). 
             
                      
//!OBJETO CON UNA ARROW FUNCTION DENTRO DE EL.

const objeto ={
    nombre: 'Ana',
    apellido: 'Gabriela',
    ocupacion: 'Mantenida',
    relacion: 'Divorciada',
    edad: '20',
    estudios: 'Economia',
    hijos: false,
    datos: [2019, 2020, 2021, 2022],
    saludar:((nombre, apellido  ) =>{  //Este objeto tiene una arrow function dentro de el. Para acceder a la arrow function haremos:
        console.log(`Hola soy ${nombre} ${apellido}`); //llamaremos primero al objeto global (objeto), luego el punto y el nombre de la funcion, 
                                                       //y al final los parentesis con el punto y coma (;).
    })                                                 //En este caso nuestra arrow function tiene dos parametros, nombre y apellido.
                                                       //por lo cual queria asi la invocacion de la arrow function, Ejemplo:
}                                                      //objeto.saludar('Ana', 'Gabriela');

objeto.saludar('Ana', 'Gabriela'); //Invocacion de la arrow function.
console.log(objeto.nombre, objeto.apellido, objeto.relacion, objeto.datos[3]);


//!FORMAS PARA ACCEDER A LOS METODOS Y PROPIEDADES DE LOS OBJETOS.

/*
1. Accediendo a variables de objetos aninados y arreglos:

Para acceder a los atributo y propiedades de un objeto(Estas pueden ser variable de arrays u objetos anidados), 
se puede hacer de la siguiente manera:
console.log(objeto. nombre);
--> primero se escribe el console log despues entre parentesis se escribe el nombre del objeto,
seguido del punto que servira como medio para llamar al atributo o propiedad que queremos.


2. Accediendo a funciones:

Para acceder a una funcion ya cambia la manera de llamarla, es diferente porque esta ya no es una propiedad,
sino un metodo. Por lo cual la manera de invocarla cambia y es de la siguiente manera que se puede llamar:
objeto.saludar();
--> Primero se escriba el objeto que sera la ubicacion donde se encontrara el metodo,
seguida del punto que es la ruta para llamarla, y luego el nombre de la funcion, en este caso saludar.

En conclusion dentro de un objeto a las variables de arrays u objetos anidados se les llama ATRIUTOS O PROPIEDADES.
Y dentro de un objeto a las funciones se les llama METODOS.
La manera de llamar a un atributo (Objetos aninados, arreglos, variables) es totalmente diferente 
que al llamar un metodo (Funciones).

*/


//!ALGUNAS PROPIEDADES DE LOS OBJETOS QUE NOS AYUDAN A TRABAJAR CON ELLOS:

const objetos = {
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

console.log(Object.values(objetos)); //Me da los valores de las llaves del objeto.
console.log(Object.keys(objetos)); // Me da las llaves de el objeto, es decir, los nombres de las propiedades y metodos.
console.log(Object.entries(objetos)); //Me da las llaves y los valores de el objeto.
console.log(Object.getOwnPropertyNames(objetos)); //Me da las llaves de el objeto, es decir, los nombres de las propiedades y metodos.
console.log(Object.getOwnPropertyDescriptor(objetos, 'nombre')); //Me da la llave del atributo nombre y su description.
console.log(Object.getOwnPropertyDescriptors(objetos)); //Me da las llaves de el objeto y la description de los atriutos y metodos.
console.log(objetos.hasOwnProperty('nombre')); //Esta propiedad busca y me permite saber si el objeto tiene la propiedad nombre por ejemplo.