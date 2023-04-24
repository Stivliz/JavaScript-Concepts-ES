/* //*STRINGS:
Los STRINGS ocadena de texto representan un texto que se puede asignar a una variable, cosas como el nombre de un cliente, 
el nombre de un producto o la categoria. Todo eso es un texto y se representa por medio de un string, existen dos formas de crerar lo que se 
conocen como una cadena de texto primitiva y existe otra que es poco menos comun. En pocas palabras los
STRINGS son representaciones de texto
*/

// 1. FORMA:

const producto = '20 pulgadas\"'; /* --> Hicimos un escape de comillas para que estas pudieran 
                                    aplicarse, esto es necesario en la primera forma, en las otras
                                    formas de crer strigns no, debido a los parentesis.*/ 

// 2. FORMA:

const producto2 = String('20 pulgadas"')

//3 FORMA:

const producto3 = new String('20 pulgadas"')

console.log(producto);
console.log(producto2);
console.log(producto3);

//* METODOS DE LOS STRINGS:

//*METODO LENGHT: Este metodo mide la longitud.

const x = 'buenas noches'
console.log(x.length); // AL medir la longitud, medira tanto las letras y el espacio del String.

_________________________________________________


//* METODO INDEXOF: Este metodo nos encontrara una palabra y nos dira la posicion en la que se encuentra.

const s = 'buenas noches'
console.log(x.indexOf('noches'));

_________________________________________________


//* METODO LASINDEXOF: Este metodo nos encontrara la ultima palabra si esta esta repetida y nos dira su posicion

const j = 'Hola, mi nombre es stiven y esto es increile'
console.log(j.lastIndexOf(es)) //--> Nos devolvera la posicion de la ultima palabra "es".

_________________________________________________


//*METODO INCLUDE: Este metodo nos buscara una palabra, de haberla encontrado nos dira true y si no false.

const y = 'buenas'
console.log(y.includes('hola'))

_________________________________________________

//* CONCATENACION DE STRINGS:
/*
Existen 3 formas de concatenar los Sstrings
*/

let ejemplo1 = 'hola'
let ejemplo2 = 'mundo'
let ejemplo3 = 'todo bien'

//Primera forma
console.log(ejemplo1 + " " + ejemplo2 + "" +ejemplo3);

//Tercera forma: no necesita que manualmente hagamos espacios, esta manera separa la concatenacion predeterminadamente.
console.log(`${ejemplo1} ${ejemplo2} ${ejemplo3}`)

_________________________________________________


//* METODO CONCAT: El metodo concat se encargara de concatenar dos o mas variables, ejemplo de esto, el siguiente:

let ejem1 = "Hola"
let ejem2 = "como"
let ejem3 = "estamos"
console.log(ejem1.concat(ejem2, ejem3)); //--> Aca estamos concatenando a una primera variable,otras dos variables,
                                                  // el resultado de esta concatenacion nos daria:
                                                  // "Hla como estamos"

_________________________________________________


//* METODOS QUE NOS PERMITEN ELIMINAR EL ESPACIO EN BLANCO AL INICIO Y AL FINAL:
//Con este metodo podemos eliminar espacios de el inicio:
let prueba = "  hola   "
console.log(prueba.trimStart());

//Con este metodo podemos eliminar espacios al final:

console.log(prueba.trimEnd());

//Con este metodo podemos eliminar los espacios a los dos lados:

console.log(prueba.trim());

_________________________________________________


//* METODO REPLACE, SLICE Y SUBSTRING:

//*METODO REPLACE: Este metodo sirve para reemplazar un Strign por otro;

let ej = 'hola como estas'
console.log(ej.replace('estas', 'te ha ido')) //La primera palabra entre commillas es la que cambiaremos y la segunda la nueva que pondremos.
                                              //Por lo que el ejemplo como tal nos dara al cambiar la palabra:
                                              // 'hola como te ha ido'

_________________________________________________
                                            

//*METODO SLICE: 
//Este metodo nos permitira extraer o cortar una cadena de texto. Para esto debemos poner la posicion en la cual queremos que
//inicie a cortar y la posicion en la cual queremos que termine de cortar, si no le colocamos una posicion de inicio, nos extraera la posicion
//de donde quisimos que iniciara a extraer y el resto del contenido, ya que no le pusimos una posicion final para darle a entender donde
//debia terminar.

let eje1 = "hola "
console.log(eje1.slice(1,3)) //EL primer parametro se ubicara en la posicion que le indicamos, tomaara ese caracter e iniciara desde esa posicion
                             // hasta una posicion menos de la indicada en el segundo parametro, ya que la posicion indicada en el segundo 
                             //parametro eliminara el caracter donde numericamente indicamos. Por lo tal tomara los caracteres que numericamente
                             //indicamos en el primer parametro y un numero menos del indicado en el segundo parametro, nuestro ejemplo quedaria:
                             // "hola" --> "ol".


_________________________________________________


//* METODO SUBSTRING: 
//Esta es una alternativa a SLICE, digamos que hara lo mismo pero con la diferencia de que si colocamos la posicion de mayor a menor
//este nos hubicara laposicion de menor a ayor, practicamente le encontrara un orden. Si no le damos a entender una posicion final, nos extraera como
//slice el resto del codigo.

let eje2 = 'que mas'
console.log(eje2.substring(3,1));


_________________________________________________


//* METODO CHARART: 
//Este metodo nos cortara una letra en la posicion que queramos. De esta manera se puede sacar la inicial de una persona
//en google.

let eje3 = 'jose'
console.log(eje3.charAt(0)); // --> En nuestro ejemplo al pasarle el numero 0, nos tomara el caracter de la posicion de ese numero osea J.


_________________________________________________


//*METODO REPEAT Y SPLIT:


//* METODO REPEAT: 
//Nos va a permitir repetir una cadena de texto multiples veces. Si a repeat le pasamos un numero flotante como por ejemplo 2.4, 
//este se redondeara a su entero mas cercano,en este caso sera 2.
let texto = 'Este es un texto '
console.log(`${texto}`.repeat(3))

_________________________________________________


//*METODO SPLIT: 
//Este metodo nos va a permitir dividir un String por cada una de las palabras como un arreglo. Basicamente nos la separara.

let texto2 = 'Hola como estas'
console.log(texto2.split(" ")) //--> En este caso el metodo split nos dividio nuestro String asi: ['hola', 'como', 'estas']

let texto3 = 'juan ricardo gomez'
console.log(texto3.split(","))


_________________________________________________


//*METODO TOLOWERCASE(MINUSCULA) Y TOUPPERCASE(MAYUSCULA) Y TOSTRING:

//Estos metodos nos podran convertir un Strign tanto en mayuscula como en minuscula.

//*METODO TOLOWERCASE: Este metodo convertir a un String de mayuscula a minuscula.

let opc1 = "HOLA"
console.log(opc1.toLowerCase());

_________________________________________________


//*METODO TOUPPERCASE: Este metodo nos podra convertir un String de minuscula a mayuscula.

let opc2 = "hola"
console.log(opc1.toUpperCase());

_________________________________________________


//*METODO TOSTRING: Este metodo sirve para convertir un numero a String

let opc3 = 30000
console.log(opc3.toString())

_________________________________________________
