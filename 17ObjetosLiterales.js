//*OBJETOS LITERALES:
/*
Es una nueva forma de escribir atributos y métodos, incluso de asignarlos.

Anteriormente digamos que teníamos una variable que tenia un valor definido y aparte se crea un objeto y queremos añadir
los valores de la variable externa en el objeto, para eso lo haciamos de esta manera:

*/

//*OBJETOS NORMALES
/*
Anteriormente asi se hacia el llamado de las variables externas en el objeto, sin usar el objeto literal.
*/

let nombree = 'juan';  //Variables externas
    edad = 23;

const dato = {

    nombre: nombree, //Propiedades del objeto inicializadas con el nombre de las variables externas con el objetivo.
    edad:edad,       //de recibir sus respectivos valores.
    color: 'blanco',
    ladrar: function(){   //método(Funcion) en un objeto.
        console.log('perro ');
    }
}

console.log(animal); //Invocacion del objeto animal
animal.ladrar();     //Invocacion del método del objeto. (Un metodo siempre se llama con atajo del punto.)

____________________________________________________________________________________________________________


//*OBJETOS LITERALES:
/*
Lo anterior es una estructura desarrollada con las características de los típicos objetos, en donde yo podría 
crear una variable que se llame “animal” que sea un objeto y podremos reutilizar las dos variables de “nombre” y 
“edad” era un proceso algo más largo, entonces, en lo que se dieron cuenta la gente que estaba en el estándar de 
Ecmascript es que muchas veces guardábamos variables y esas variables le asignábamos una nueva propiedad con 
el nombre de esa variable a los objetos, entonces eso lo podremos simplificar de la siguiente manera:

Si la variable que tú vas a asignarle como valor a una propiedad del objeto, tiene el mismo nombre de la propiedad 
que tu estas pretendiendo asignar, pues simplemente se guarda así:
*/

let nombre = 'juan';
    edad = 23;

const animal = {

    nombre, //Esto lo que hace es agilizar el proceso de escritura de nuestro objeto.
    edad,
    color: 'blanco',
    ladrar(){               //Los métodos también podremos simplificarlos evitando poner function y dejando solo 
                            //el nombre del método con lo dos parentesis y los corchetes y la parte interior.
        console.log('perro ');
    }
}

console.log(animal); //Invocacion del objeto animal
animal.ladrar();   //Invocac

/*
Aquí lo que va a hacer javascript dinámicamente es entender que el nombre de la propiedad que le quieres 
asignar al objeto es igual al nombre de la variable que se creo anteriormente y que
su valor sera el valor que almacene esa variable de mismo nombre. Esto loque hace es agilizar 
el proceso de escritura de nuestro objeto
*/ 



//!Agregar nuevas propiedades al objeto literal:
/*
Ahora por ejemplo si quisiéramos agregarle una propiedad la cual no esta agregada en una variable como 
el ejemplo anterior pues simplemente se sigue utilizando la misma técnica normalmente manejada:

No pasa absolutamente nada inusual, simplemente se agrega esa nueva propiedad.

*/
let name = 'juan';
    edad = 23;

const perro = {

    nombree,
    edad,
    color: 'blanco' //Aqui se agrega una nueva propiedad al objeto, no pasara nad ainusual.
}



//!Simplificacion de metodos en los objetos literales:

//Ahora con los métodos, también tenemos una manera de simplificarlos, anteriormente tendríamos una estructura así:

let nombre1 = 'juan';
    edad = 23;

const animal1 = {

    nombre1,
    edad,
    color: 'blanco',
    ladrar: function(){  //Metodo asignado a una propiedad del objeto sin simplificar.
        console.log('perro ');
    }
}


/*
Ahora con la nueva manera para simplificar podemos agilizar el método, javascript entiende que ahora el 
objeto “animal2” va a tener un método llamado “ladrar”, esta manera tendremos una estructura as:
*/

let nombre2 = 'juan';
    edad = 23;

const animal2 = {

    nombre,
    edad,
    color: 'blanco',
    ladrar(){    //Metodo asignado a una propiedad del objeto de forma simplificada.
        console.log('perro ');
    }
}
/*
Esta es la nueva forma de declarar los métodos en objetos literales.

Estas son nuevas maneras de escritura tanto de atributos como de métodos (funciones), que tienen los 
objetos literales a partir del estándar ecmascript 6. Esas son algunas de las características para los objetos 
literales, es decir objetos que literalmente definimos en una variable y los utilizamos. 

*/