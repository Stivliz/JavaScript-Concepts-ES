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

//!METODO LENGHT: Este metodo mide la longitud.

const x = 'buenas noches'
console.log(x.length); // AL medir la longitud, medira tanto las letras y el espacio del String.

//! METODO INDEXOF: Este metodo nos encontrara una palabra y nos dira la posicion en la que se encuentra.

const s = 'buenas noches'
console.log(x.indexOf('noches'));

//!METODO INCLUDE: Este metodo nos buscara una palabra, de haberla encontrado nos dira true y si no false.

const y = 'buenas'
console.log(y.includes('hola'))

//* CONCATENACION DE STRINGS:
/*
Existen 3 formas de concatenar los Sstrings
*/

let ejemplo1 = 'hola'
let ejemplo2 = 'mundo'
let ejemplo3 = 'todo bien'

//Primera forma
console.log(ejemplo1 + " " + ejemplo2 + "" +ejemplo3);

//Segunda forma
console.log(ejemplo1.concat(ejemplo2, ejemplo3));

//Tercera forma: no necesita que manualmente hagamos espacios, esta manera separa la concatenacion predeterminadamente.
console.log(`${ejemplo1} ${ejemplo2} ${ejemplo3}`)


//* METODOS QUE NOS PERMITEN ELIMINAR EL ESPACIO EN BLANCO AL INICIO Y AL FINAL:
//Con este metodo podemos eliminar espacios de el inicio:

let prueba = "  hola   "
console.log(prueba.trimStart());

//Con este metodo podemos eliminar espacios al final:

console.log(prueba.trimEnd());

//Con este metodo podemos eliminar los espacios a los dos lados:

console.log(prueba.trim());



//* METODO REPLACE, SLICE Y SUBSTRING:

//METODO REPLACE: Este metodo sirve para reemplazar un Strign por otro;

let ej = 'hola como estas'
console.log(ej.replace('estas', 'te ha ido')) //La primera palabra entre commillas es la que cambiaremos y la segunda la nueva que pondremos.

//METODO SLICE: Este metodo nos permitira extraer o cortar una cadena de texto. Para esto debemos poner la posicion en la cual queremos que
//inicie a cortar y la posicion en la cual queremos que termine de cortar, si no le colocamos una posicion de inicio, nos extraera la posicion
//de donde quisimos que iniciara a extraer y el resto del contenido, ya que no le pusimos una posicion final para darle a entender donde debia terminar.

let eje1 = "hola "
console.log(eje1.slice(1,4)) // Aca nos saldra ola.

//METODO SUBSTRING: Esta es una alternativa a SLICE, digamos que hara lo mismo pero con la diferencia de que si colocamos la posicion de mayor a menor
//este nos hubicara laposicion de menor a ayor, practicamente le encontrara un orden. Si no le damos a entender una posicion final, nos extraera como
//slice el resto del codigo.

let eje2 = 'que mas'
console.log(eje2.substring(3,1));

//METODO CHARART: Este metodo nos cortara una letra en la posicion que queramos. De esta manera se puede sacar la inicial de una persona
//en google.

let eje3 = 'jose'
console.log(eje3.charAt(0));



//*METODO REPEAT Y SPLIT:


//METODO REPEAT: Nos va a permitir repetir una cadena de texto multiples veces. Si a repeat le pasamos un numero flotante como por ejemplo 2.4, 
//este se redondeara a su entero mas cercano,en este caso sera 2.
let texto = 'Este es un texto '
console.log(`${texto}`.repeat(3))

//METODO SPLIT: Este metodo nos va a permitir dividir un String por cada una de las palabras como un arreglo. Basicamente nos la separara.

let texto2 = 'Hola como estas'
console.log(texto2.split(" ")) //--> En este caso el metodo split nos dividio nuestro String asi: ['hola', 'como', 'estas']

let texto3 = 'juan ricardo gomez'
console.log(texto3.split(","))


//*METODO TOLOWERCASE(MINUSCULA) Y TOUPPERCASE(MAYUSCULA) Y TOSTRING:

//Estos metodos nos podran convertir un Strign tanto en mayuscula como en minuscula.

//METODO TOLOWERCASE: Este metodo convertir a un String de mayuscula a minuscula.

let opc1 = "HOLA"
console.log(opc1.toLowerCase());

//METODO TOUPPERCASE: Este metodo nos podra convertir un String de minuscula a mayuscula.

let opc2 = "hola"
console.log(opc1.toUpperCase());

//METODO TOSTRING: Este metodo sirve para convertir un numero a String

let opc3 = 30000
console.log(opc3.toString())

