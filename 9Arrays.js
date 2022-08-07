//*ARREGLOS(Arrays): 
/*
A los arreglos igual que en los objetos se les puede delclarar o definir con la variable CONST,
Un arreglo no es más que una colección de elementos, estos elementos pueden ser de diferente tipo,
ya sean booleanos, cadenas, números e incluso también pueden almacenar objetos. 

Los arreglos siempre van a empezar en la posición 0, el primer elemento se pondrá en la posición 0. 
Si tenemos 4 elementos en un arreglo este tendra 3 posiciones, porque la longitud de los arreglos inicia 
desde la posicion 0.

Para acceder a los elementos de un arreglo primero debemos declarar la referencia o posicion en la que este se encuentra,
como por ejemplo:

const b = [1,2,3,4,5]; si queremos acceder al elemento 3, debemos declarar la referencia o posición en la que este se encuentre,
                       en este caso para acceder a este elemento, debemos escribir la posicion que ocupa en este caso ocupara:
                       la posicion 2.
                       Para este caso seria asi:

console.log(b[2]);--> Esto quiere decir que el elemento sera el 3.
                      Entonces para mandar a llamar un elemento de un arreglo, debemos escribir en el console.log 
                      el nombre de la variable que contiene el arreglo (b) y luego la posicion (2) que ocupa en el arreglo,
                      y este elemento ira dentro de corchetes [].
                      En el caso del ejemplo es asi: console.log(b[2]);

Aquellos elementos que vayan de forma de string llevaran siempre comillas simples, y los numeros iran normalmente.

En definitiva los arreglos son elementos que se pueden almacenar en una posición, y estas posiciones pueden ser de diferentes tipos ya sean string,
booleanos, numeros etc. Y para aceder a cada uno de ellos lo haremos mediante la posicion en la que se encuentren
que iniciara desde la posicion 0 hasta infinito. 
*/

________________________________________________________________________________________________________
//ARREGLOS EJEMPLO 1.


const b = [1, 'hola', 'A', false, ['r', 'c']];
console.log(b[4][1]); /* Aca accedimos en la consola a la posicion 4 y este elemento que se encuentra 
                         en la posicion 4, contiene a su vez un array aninado con dos elementos con lo cual tambien 
                         accedimos a la posicion 1 de ese array anidado, el elemento invocado seria: C.
                         ya que es ese el elemento anidado que esta en la posicion 1 del elemento externo 
                         de la posicion 4. */


//ARREGLOS EJEMPLO 2.


const x = ['a', true, false, ['hola', 4, 3, ['stiven', 'yo']]];
console.log(x [3][3][1]); /* Aca accedimos en el array a la posicion 3 y este elemento que se encuentra 
                             en la posicion 3, contiene un array aninado con 4 elementos, accedemos a la posicion 3
                             que a su vez contiene otro array anidado, y a este nuevo elemento accedemos a la posicion 1, 
                             el elemento invocado seria: 'yo' */


________________________________________________________________________________________________________

//*METODOS DE LOS ARRAYS

//!METODO PUSH 

//Este Metodo agrega el elemento en la ultima posicion.
const colores1 = ['rojo', 'verde', 'azul']; 

colores1.push('negro'); //Aca invocamos el nombre del array, un punto que sirve como medio y por ultimo al metodo push,
                        //entre parentesis ira el elemento que queremos agregar en la ultima posicion.

console.log(colores1); /*   Ahora al agregar un nuevo elemento a la ultima posicion quedaría:
                           const colores = [“rojo”, “verde”, “azul”, “negro”]; */


________________________________________________________________________________________________________                          

//!METODO POP

//Este metodo elimina el elemento de la ultima posicion.
const colores2 = ['rojo', 'verde', 'azul', 'negro'];
colores2.pop();
console.log(colores2); /*   Ahora al eliminar el elemento negro de la ultima posicion quedaría, 
                           const colores = [“rojo”, “verde”, “azul”]; */

________________________________________________________________________________________________________

//!METODO UNSHIFT

//Este metodo agrega el elemento de la primera posicion.
const colores3 = ['rojo', 'verde', 'azul'];
colores3.unshift('negro');
console.log(colores3) /*    Ahora al regar un nuevo elemento a la primera posicion quedaria,
                          const colores = ['negro', 'rojo', 'verde', 'azul']; */


________________________________________________________________________________________________________

//!METODO SHIFT

//Este metodo elimina el elemento de la primera posicion.
const colores4 = ['negro', 'rojo', 'verde', 'azul'];
colores4.shift();
console.log(colores4) /* Ahora al eliminar el primer elemento de la primera posicion quedaria,
                        const colores = ['negro', 'rojo', 'verde', 'azul']; */

                
________________________________________________________________________________________________________
 
//!METODO SPLICE

/*Este metodo nos sirve para agregar un elemento en cualquier posicion, ya sea por ejemplo en la mitad.
Tambien es un metodo que nos sirve para eliminar elementos de cualquier posicion, ya sea por ejemplo eliminar
un elemento para agregar otro.

Esta dividido en tres partes: 
-El primero es start: Es el índice o posición donde vamos a colocar la inserción del número o dato. 
-El segundo es el deleteCount:  Este nos dice cuantos elementos queremos eliminar a partir de la posición insertada.
-El tercero es el Number[]: Es un array de los elementos que queramos insertar en esa posición ya establecida,
puede ser un dato de tipo, Number, String, Boolean, Objeto u otro Array anidado inclusivamente etc. 
*/

const numeros = [1,2,3,4,5,6,7];
numeros.splice(4, 2, 'Hola'); //Aqui es donde se divide el elemento, primero esta la posicion 4, 
                             //luego esta el deleteCount en este caso es 2 (esto quiere decir que elimina la posicion 4 y la 5), 
                             //esto quiere decir que al eliminar la posicion 4 y 5 se eliminaran los elementos 5 y 6.
                             //y luego el elemento que queremos agregar, que es el elemento hola y quedara donde estaba la posicion 4,
                             //que fue la posicion inicial que se elimino.
                             //como en este caso se eliminaron 2 elementos entonces el array al final sera: [1,2,3,4,'Hola',7].
console.log(numeros);
console.log(numeros.length);



const ex = ['a','A','t', 'g']    
ex.splice(0,2, 'angie', 'alejandra');
console.log(ex);


________________________________________________________________________________________________________


//!METODO FOREACH

/*El método forEach() ejecuta la función indicada una vez por cada elemento del array.
Esta función tendrá tres parámetros:
1.	El valor del elemento -> el lemento que estamos recorriendo.
2.	El índice del elemento -> Index, osea la posicion del elemento.
3.	El array que está siendo recorrido -> Todos los elementos que estan en el Array.
*/
const arr = [2,4,6,8,10,];

arr.forEach((element, index, array) => { //La estructura de este array utilizando el metodo forEach, 
                                        //consta de la funcion esta no se pone literalmente sino que se pone en una funcion anonima (ARROW FUNCTION)
                                        //osea parentesis y entre este parentesis se ponen los parametros que se van a utilizar en la funcion.
                                        //que seran 3 parametros.
                                        //-El primer parametro es el elemento que estamos recorriendo.
                                        //-El segundo parametro es el indice del elemento que estamos recorriendo (La posicion del elemento recorrido).
                                        //-El tercer parametro es el array que estamos recorriendo (TODOS LOS ELEMENTOS DEL ARRAY).
                                        
        console.log(element += 1, index, array); //Aqui ejecutaremos la funcion con los parametros de la funcion anonima.
                                                //E iran ordenamente en la consola asi como estan en la funcion,
                                                //primero el parametro element, segundo el indice y por ultimo el array.
});


________________________________________________________________________________________________________

//!METODO SLICE

const y = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(y.splice(1, 3)); // este metodo lo que hace es que en el primer numero estara el inicio y este sera la posicion 
//del primer elemento y el segundo sera el final donde sera el limite de elementos que este tomara.
//Por ejemplo, en el ejemplo anterior, el primer numero seria 1 y el segundo sera 3, esto significa que tomara los elementos desde la posicion 1,
//hasta los elementos de la posicion 3. Osea : b,c,d.



________________________________________________________________________________________________________

//!METODO MAP:

/* 
MAP recibe un callback exactamente similar que el de forEach, 
es decir elemento, índice y array. Y lo que hará será devolver un array resultante que sera diferente a los 
elementos del arreglo inicial, sin modificar al original.
*/

//En este ejemplo el metodo MAP nos servira para duplicar los elementos de arreglo inicial (numeros1). 

const numeros1 = [1,2,3,4,5]

const duplicado = numeros1.map((numerox) => {return numerox * 2});
console.log(duplicado); //El resultado sera [2,4,6,8,10].


/*En el siguiente ejemplo tomaremos del array (ALMUERZOS) los elementos (Objetos anidados) de platos PRINCIPALES, 
y crearemos un nuevo array donde los platos PRINCIPALES quendaran anidados en un nuevo array, sin modificar 
o sobreescribir el array original.*/

const almuerzos = [

    {principal:'arepa', postre:'helado'},
    {principal:'tacos', postre: 'torta de queso'},
    {principal:'pizza', postre: 'galletas'},
    {principal:'sushi', postre: 'quesillo'}

]

const almuerzo = almuerzos.map(comida => comida.principal);
console.log(almuerzo); //El resultado sera nos dara el array de platos principal:['arepa', 'tacos', 'pizza', 'sushi'].
console.log(almuerzos);//Aca jecutamos y veremos que el array orginal no se modifico.

/* En resumen el metodo MAP es muy poderoso, ya que nos permite retornar y transformar lo que hay dentro de un array
osea sus elementos en uno nuevo array, sin tener que modificar el array original.*/


________________________________________________________________________________________________________

//!METODO FILTER:

const carros = [

    {marca: 'hyundai', color: 'negro', año:2019, precio:22000},
    
    {marca: 'chevrolet', color: 'blanco', año:2020, precio:18000},
    
    {marca: 'mazda', color: 'rojo', año:2018, precio:50000},

    
    {marca: 'lexus', color: 'blanco', año:2021, precio:30000}
 
];

const nuevoDato = carros.filter ((carro) => carro.año > 2018 && carro.precio <30000 
    
);

console.log(nuevoDato);



  


________________________________________________________________________________________________________


//!METODO REDUCE:


const num = [0,3,10,40];

let suma = num.reduce((acumulador, numero) => {

    return acumulador + numero;

}, 0);

let op = carros.reduce((millajeInicial, millajeTotal) => {return millajeInicial + millajeTotal.precio;

},0);

console.log("El precio total, de todos los carros es: " + op);

let palabras = ['jose', 'castro', 'manuel']
let str = ' ';
for(let i = 0; i < palabras.length; i++){
    str = palabras[i] + str;
}
console.log(str);




________________________________________________________________________________________________________

//!METODO FILL




________________________________________________________________________________________________________

//!METODO EVERY