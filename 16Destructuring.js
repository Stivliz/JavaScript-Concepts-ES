//*DESTRUCTURACION(Destructuring)
/*
El destructuring es una técnica que se aplica sobre Arrays y Objetos para acceder y asignar
cada una de las propiedades de este tipo de datos a una variable. Se extraen los valores
de los objetos y arreglos y se asignan a variables.


En vez de tener que definir cada variable y luego asignársela a cada posición 
de un Array o a cada propiedad de un objeto lo vamos a hacer con el destructuring, 
es una técnica muy sencilla de utilizar.
*/

//*DESTRUCTURING CON ARRAYS.
/*
Aqui accederemos a los elementos de un array llamandolos independientemente por posicion,
sin utilizar el destructuring, por lo cual sera mas engorroso y menos eficiente.
*/ 

//!Sin destructuring:
const listaNumeros = [1,2,3];

let pos1 = listaNumeros[0];
    pos2 = listaNumeros[1];
    pos3 = listaNumeros[2];

console.log(pos1, pos2, pos3);  //De esta manera accederemos a los elementos de un array de
                                //forma independiente.
 
                                
//!Con destructuring:
/*Para hacer lo anterior de una manera mas sencilla, utilizamos el destructuring, 
esta forma de nombrar variables para llamar a los elementos del array agiliza el proceso,
quedaria asi:
*/

const listaNumeros1 = [1,2,3];
const [p1,p2,p3] = listaNumeros1; //Aca llamamos a los elementos del array, y los asignamos a las variables. 
console.log(p1,p2,p3); //De esta manera accederemos a los elementos de un array de forma independiente.



/* Ahora digamos que si en nuestro ejercicio de Arrays, a nosotros nos interesa saltarnos 
de posición y simplemente usar las posiciones que sean de nuestro interés, para esto lo
que haremos será dejar la coma huérfana que pertenece a x posición, esto le dirá a 
JavaScript que esa posición no nos interesa y que necesitamos las demás, así omitiremos 
esa posición y utilizaremos las demás:
*/

const listaNumeros2 = [1,2,3];
const [,poss2,poss3] = listaNumeros2;  //En esta parte no es de interes la posicion 1
console.log(poss2,poss3);              //asi qu la omitimos dejando la coma huerfana de esa
                                       //posicion.



/*
Tenemos además de lo anterior un caso especial, que es agrupar los elementos que yo no
he seleccionado con mi destructuring, es decir, decirle a javascript que me aplique 
los demás números que están en la cola (al final del array) sin yo llamarlos 
intencionalmente uno por uno, para esto utilizaremos el OPERDOR SPREAD (...), esto pondrá 
los números sobrantes en un array dentro del destructuring, esto se define como último
elemento de mi destructuring, pondría una coma para separar la posición y después 
tres puntos suspensivos por así decirlo y el nombre del verbo.
*/


const Y = [1,2,3,4,5,6,7,7,8];
const [,pos2,pos3, ...restoNumeros] = Y; //Acá pondremos el operador spread (...), en la 
console.log(pos2,pos3, restoNumeros);    //ultima posicion.

/*
-->Como resultado de lo anterior tendremos:
El primer numero de la posicion 1, no nos interesa asi qu
omitimos, con lo cual dejamos la coma vacia, invocaremos la posicion 2 y 3
llamndo la variable del elemento de esa posicion, y el resto de los elementos
que quedan en la cola los llamaremos con el operador SPREAD(..restoNumeros).
y al final nos aparecera en consola: 2,3[4,5,6,7,7,8]
*/




_________________________________________________________________________________________________________

//*DESTRUCTURIGN CON OBJETOS.
/*
Ahora para aplicar el destructuring , haríamos algo bastante similar como lo hacíamos con los arreglos, 
la diferencia esta en que con los Arrays utilizábamos los corchetes y ahora con los objetos utilizamos las llaves para acceder a ellos.
A continuacion veremos un ejemplo en donde accedemos a las propiedades del objeto.

*/


//! Sin Destructuring:

const object = {
    nombre: 'juan',
    apellido: 'Diaz',
    edad: 23,
    casado: false
}
const nombre1 = persona.nombre;     //Aca estamos asignandole a las variables las propiedades
const apellido2 = pesona.apellido;  //del objeto para despues invocarlas de forma independiente.
const edad3 = persona.edad;
s
console.log(nombre1, apellido2, edad3); //Aca invocamos las variables de forma independiente.


//!Con Destructuring:

/*
Ahora para aplicar el destructuring , haríamos algo bastante similar como lo hacíamos con los arreglos, la diferencia 
está en que con los Arrays utilizábamos los corchetes y ahora con los objetos utilizamos las llaves.
Para hacer lo anterior de una manera mas sencilla, utilizamos el destructuring, este quedaria asi:
*/

const object1 = {
    nombrePersona: 'juan',
    apellidoPersona: 'Diaz',
    edadPersona: 23
}
const {nombrePersona, apellidoPersona, edadPersona} = object1; 
console.log(nombrePersona, apellidoPersona, edadPersona);
/*
Aquí también hay otra peculiaridad que es importante de resaltar y es que en el Arrays accedíamos gracias 
a la posición por ejemplo si teníamos 3 números debíamos nombrar la posición como pos1, pos2, pos3 para acceder 
a los 3 números, en los objetos pasa algo distinto, tenemos que acceder por el nombre que tiene la propiedad en 
el objeto. Por ejemplo en nuestro caso: nombrePersona, apellidoPersona, edadPersona.

En conclusion, hay que tener en cuenta que en este caso para llamar a las propiedades del objeto,
las variables del destructuring deben tener el mismo nombre que las propiedades del objeto,
para poder ser invocadas de forma independiente. Y asi mismo ser llamadas igual en la ejecucion. 
*/


//!Renombrar el nombre de la propiedad desde la variale del destructuring:
/*
Si queremos renombrar el nombre de la variable de la propiedad desde el destructuring, pues primero tomamos como 
ejemplo un nombre (nombree), seguido de dos puntos, y por ultimo le asignamos el nuevo nombre que queramos a esa 
propiedad del objeto, un ejemplo seria el siguiente:
*/

const dato = {
    nombree: 'juan',
    apellido: 'Diaz',
    edad: 23
}
//Sin renombrar 
const {nombree, apellido, edad} = dato;
console.log(nombree, apellido, edad);


//Ahora renombraremos el nombre de la variable de la propiedad:
const {nombree: nombreePer, apellido: apellidoPer, edad: edadPer} = dato; //Aca le damos el nuevo nombre a la variable de la propiedad.
console.log(nombreePer, apellidoPer, edadPer);

/*
Ahora a la variable nombree de la prpiedad del objeto le asignamos el nuevo nombre (nombreePer),
igual pasara con los demas nombres de las variables de las propiedad del objeto. 
*/


_________________________________________________________________________________________________________

//*DESTRUCTURING SOBRE OBJETOS Y SUBOBJETOS.

const datoPersona = {

    nombrePer: 'juan',
    apellidoPer: 'Rodriguez',
    edad:23,
    direccion:{
        calle: 'calle34',
        codigo: 09092013
    }
};

const {nombrePer, direccionPer} = datoPersona;
console.log(nombre, direccion); //En la consola aparecerá que nombre es un String y dirección es un Objeto.


//*DESTRUCTURIN SOBRE EL SUBOBJETO.
/*
Para finalizar el destructuring sobre objetos vamos a ver un caso particular, imaginémonos que en el objeto 
persona tenemos otro objeto en el interior (subobjeto) llamado por ejemplo dirección que tiene dos propiedades 
llamadas calle y Código. */

const person = {
    nombre: 'juan',
    apellido: 'Diaz',
    edad: 23,
    dirección: {      //  <-- Subobjeto: Adentro e este subobjeto estan las propiedades calle y codigo.
      calle: calle-35,
      código: 09092013
    }
};


/*Ahora queremos acceder a la propiedad (nombre), que esta en el objeto (person), y tambien queremos acceder
al subobjeto (dirección), para esto hacemos el destructuring de nombre y dirección:
*/

const {nombre, dirección} = persona; /*-->Aca le decimos que queremos acceder a la variable de la propiedad nombre 
console.log(nombre, dirección);       y a la variable de la propiedad direccion que internamente tiene un subobjeto,
                                      lamada calle y codigo. 

*/
 

//Y digamos que ahora queremos hacer destructuring sobre el subobjeto dirección, pues tenemos dos opciones para esto:

//!Opcion 1:

const info = {

    name: 'juan',
    apellido: 'Rodriguez',
    edad:23,
    direccion:{
        carrera: 'carrera34',
        cedula: 09092013
    }
};

const {name, direccion} = info; //Aca hacemos el destructuring y le decimos que queremos acceder a la variable de la 
                                //propiedad name y a la variable de la propiedad direccion que internamente tiene un 
                                //subobjeto.

const {carrera, cedula} = direccion; //Aca hacemos el destructuring para directamente llamar lo que haya en el interior
                                     //  del subobjeto.

console.log(name, calle, codigo); //Aca imprimimos en consola el nombre, la calle y el codigo.


/*Entonces en la primera opcion, para llamar al subobjeto dirección, primero hacemos el destructuring llamandolo 
como tal externamente y despues hacemos el destructuring interno para llamar a las propiedades del subobjeto.

De esta manera accedemos al subobjeto y a las propiedades del subobjeto.
*/


//!Opcion 2:

/*
En la segunda opcion podemos hacer el destructuring en una sola línea, esto tiene un limite debido a que de alguna 
manera se vuelve ilegible. Lo haríamos en la misma línea con el mismo formato del rename (renombrar), cuando 
hacíamos un renombre de una variable lo que hacemos es poner la variable: y el nuevo nombre.


En primer lugar lo que haremos sera poner el nombre de la variable de la propiedad que es un subjeto en este caso
(direccion), y despues lo igualamos con dos puntos y abrimos llaves y de esa manera podemos destructurar a las
variables de las propiedades internas del subobjeto, en este caso seria calle y cogido.
De esta manera utilizamos el destructuring de un subobjeto en una sola linea y despues lo imprimimos
con el nombre de las variables de las propiedades del subobjeto. 
*/


const persona = {

    nombrex: 'juan',
    apellido: 'Rodriguez',
    edad:23,
    direccion:{
        calle: 'calle34',
        codigo: 09092013
    }
};

const {nombrex, direccion:{calle, codigo}} = persona; //Destructuring en una sola linea.
console.log(nombre, calle, codigo);



//! OtRO EJEMPLO MAS COMPLEJO:
/* En este ejmplo, utilizaremos el destructurign para acceder a varios sub-objetos o objetos aninados que estan dentro uno detras de otros,
por ejemplo, tenemos al objeto llamado "CONCEPTOS" que a su vez tiene un objeto anidado o sub-objeto llamado "dato", este sub-objeto tiene a su vez
otro Sub-Objeto aninado llamado "Dato2", este a su vez tiene otro Sub-Objeto llamado "Dato3", y este Su-Objeto tiene tambien a su vez otro
Sub-Objeto llamado "Dato4", para acceder a "Dato4" y a su llave llamada informacion tendremos que hacer lo siguiente:

Primero creamos la estructura del destructuring, y lo inicializamos con el nombre del objeto llamado "Conceptos" la estructura quedaria asi:

const {} = conceptos;

Ahora lo que haremos para acceder a la propiedad informacion del ultimo Sub-Objeto o Objeto aninado sera primero escribir entre la estructura
del destruturing el primer Sub-Objeto llamado (DATO) despues igualarlo con dos puntos (:), seguido de eso abrir las llaves en donde escribiremos
el nombre del segundo Sub-Objeto llamado (DATO2) igualarlo una vez mas con dos puntos, despues volvemos a abrir las llaves para una vez mas 
escribir el nombre del tercer Sub-Objeto llamado DATO3, a su vez volveremos a igualarlo con dos puntos, una vez mas abriremos las llaves para 
poner el nombre del ultimo Sub-Objeto llamado (DATO4), lo igualamos con los dos puntos abriremos las llaves y por ultimo pondremos el nombre 
de la llave informacion.

De esta manera podremos utilizar el destructuring y acceder a la propiedad del ultimo Sub-Objeto, y simplemente con llamar a la llave informacion
podremos acceder de igual forma a su valor.

const{dato:{dato2: {dato3: {dato4: {informacion}}}}} = objetos;
console.log(informacion);

Dado el caso si queremos mostrar no solo el valor de las llaves de un Sub-Objeto, si no a su vez tambien el Sub-Objeto completo lo que haremos 
sera que simplemente llamaremos al Sub-Objeto primero de forma independiente para despues separarlo con una coma y poder seguir accediedo
a los Sub-Objetos de la forma que ya habiamos explicado, por ende, esto se realizara de la siguiente forma. Como ejemplo accederemos no
solo a la llave del ultimo Sub-Objeto llamado DATO4 sino tambien al Sub-Onjeto en cuestion. Y de igual forma los demas Sub-Objetos anteriores
a este, esto quedaria de la siguiente manera:

const{dato:{dato2, dato2: {dato3, dato3: {dato4, dato4: {informacion}}}}} = objetos;
console.log(dato2, dato3, dato4, informacion);

Con esta forma, podemos acceder al el Sub-Objeto completo de dato2, dato3 y dato4 y asu vez a la llave que esta contenida
en el Sub-Objeto llamado DATO4.


*/

const conceptos = {
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
  
  const{dato:{dato2: {dato3: {dato4: informacion}}}} = objetos;
  console.log( años);

____________________________________________________________________________________________________________


//*FORMATO SPREAD OBJETOS
/*
También hay que resaltar que en los Arrays teníamos una forma de saltarnos elementos, aquí en los objetos no 
tiene sentido saltarse elementos porque no van por orden, por lo de comas huerfanas como signo de que esa
posicion o valor no sera tomado, no se puedra aplicar, porque aqui en los objetos  no se pueden saltar 
las propiedades.

Ahora bien, el formato SPREAD(...) que me permite coger el resto de valores o propiedades de un objeto y meterlo 
en un nuevo, si se mantiene, por ejemplo si me interesa tener solo el nombre, pero el apellido 
y la edad no y me interesa meterlo en un subobjeto entonces lo que haremos será usar el operador SPREAD:

*/


const getObject = {
    nombre2: 'juan',
    apellido2: 'Diaz',
    edad2: 23,
    casado2: false
}
const {nombre2, ...restogetObject} = getObject; //Aca mandamos a llamar intencionalmente a la variable de la propiedad
console.log(nombre2, restogetObject);           //nombre y usamos el operador SPREAD para coger el resto de las propiedades  
                                                //del objeto diferentes a la variable de la propiedad nombre.

/*Lo que hara lo anterior es que saldra en consola juan, y el resto del objeto estara dentro de un obejeto
por lo cual en el subobjeto se anidará las propiedades de apellido2, edad2 y casado2. Y quedaria asi al ejecutarlo 
en la temrinal:

--> juan {apellido2: "Diaz", edad2: 23, casado2: false}

*/