//* METODOS NUMERICOS:


//*TYPEOF:
//Typeof nos mostrara el tipo de dato de x valor del cual queramos saber su valor. Ejemplo:

let xx = "hola"
console.log(typeof xx) //--> Esto nos mostrara que la variable "xx" es de tipo String.

____________________________________

//* METODO toSTRING(): 
//Devuelve un número como una cadena. Todos los métodos numéricos se pueden utilizar en cualquier tipo de números 
//(literales, variables o expresiones):


let x = 5;
console.log(x.toString()); //--> devuelve "5", en forma de string, este metodo nos convierte un numero en String..


____________________________________


//* EL OBJETO MATH:
/*Cuando trabajamos con Javascript, es posible realizar gran cantidad de operaciones matemáticas de forma nativa, sin necesidad de
 librerías externas. Para ello, haremos uso del objeto Math, un objeto interno de Javascript que tiene incorporadas ciertas constantes 
 y métodos (funciones) para trabajar matemáticamente.*/

//* METODO MATH POW

//Podemos usar el método `pow` en `Math` para devolver un número elevado a un exponente. Tomará dos números.

Math.pow(2,2) = 4;
Math.pow(3,2) = 9;
Math.pow(3,3) = 27;


//* METODO MATH ROUND, FLOOR, CEIL:

//`Math` también tiene métodos que redondearán los números para nosotros. `.round` redondeará un número al número entero más cercano. 
//`.floor` siempre redondeará un número al número entero más cercano hacia abajo. `.ceil` siempre se redondeará al número entero más
// cercano hacia arriba.

Math.round(6.5) = 7;
Math.round(6.45) = 6;
Math.floor(6.999) = 6;
Math.ceil(6.0001) = 7;
//* METODO LENGTH:

//El tipo de datos "string" tiene un método incorporado llamado `.length`. Cualquier cadena que llamemos a esto devolverá la cantidad de 
//caracteres en esa cadena.

var nombreGato = 'felix';
console.log(nombreGato.length); // 5

____________________________________

//* METODO TOFIXED:
//El metodo toFixed, recibira por paramtro un numero, que le pasaremos  este sera la cantidad de decimales que tomara despues de el punto,
//por lo tal si nosotros tenemos el siguiente numero 2.876, y el el metodo toFixed le pasamos como parametro el numero 2, entonces este metodo
//tomara los 2 numeros despues de la coma, osea quedaria 2.88. El ultimo numero decimal cambia de 7 a 8, por que este como esta cerca al 
//numero hacia arriba entonces se convierte. 

//Ahora al rezalizar la conversion el metodo toFixed, el resultado que este genere se convierte a tipo String, por lo cual 
//ese valor se convierte a estring. EL siguiente ejemplo quedaria:

let numero = 2.7889
console.log(numero.toFixed(2)) //--> Esto nos dara: 2.79.

____________________________________

//*METODO TOPRECISICION:
//Este metodo es casi parecido al metodo toFied, con la unica diferencia de que al momento de nosotros pasarle el numero como parametro,
//este no lo contara como el toficed, despues de el punto decimal, si no que iniciara contando desde el numero entero.
// Osea que si tenemos este numero 2.375 y nostros como parametro le pasamos el 3, entonces el metodo toPrecision tomara los siguientes  
// numeros: 2.38, cabe tambien decir, que este rodendeara de igual forma como el toFixed. Tambien cabe decir, que este metodo convertira
//los datos a tipo String como el toFixed.

let gg = 2.4789
console.log(gg.toPrecision(3)) //--> Nos mostrara 2.48-

____________________________________

//* METODO NUMBER:
//El metodo NUMBER, hara la conversion de un tipo de dato strign a tipo numerico, por ejemplo si nosotros tenemos este valor "22.2"
//y le aplicamos el metodo NUMBER("22.2"), esto nos convertira ese Strign en numero, con lo cual quedaria: 22.2

____________________________________


//* METODO PARCEINT:
//EL Metodo parseInt, es parecido al metodo Number, con la diferencia de que este tomara un string y lo convertira a numero entero,
//por lo tanto si el valor es un string que puede ser un numero decimal, solo tomara su valor enter, ejemplo, tenemos el siguiente
//valor "22.2", si le aplicamos le metodo parseInt entonces nos devolvera 22, y no 22.2, ya que este simmpre tomara la parte entera,

//Los ParseInt tambien los podemos utilizar para convertir datos hexadecimales, en numero entero, con lo cual este metodo, nos ayudara
//a realizar esta conversion, por ejemplo tenemos el siguiente numero hexadecimal:


let hexa = ' 0x53a5b7'
console.log(parseInt(hexa)) //--> Esto nos deolvera el siguiente numero en entero 5481911.

//Cabedecir, que losdatos hexadecimales, no tendra numeros flotantes. Siempre seran enteros, por ende por esto se utilizara el parseInt.

____________________________________

//* METOO PARCEFLOAT:
// El metodo parseFloat, es como el de tipo Number, ya que este convertira un string a tipo numerico, y tomara tanto su valor entera como decimal.
//por lo tal si tenemos un valor string "22.2", nos devolvera ese mismo valor numero en decimal 22.2.