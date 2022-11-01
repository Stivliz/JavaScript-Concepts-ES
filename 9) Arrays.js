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

//?METODO PUSH 

//Este Metodo agrega el elemento en la ultima posicion.
const colores1 = ['rojo', 'verde', 'azul']; 

colores1.push('negro'); //Aca invocamos el nombre del array, un punto que sirve como medio y por ultimo al metodo push,
                        //entre parentesis ira el elemento que queremos agregar en la ultima posicion.

console.log(colores1); /*   Ahora al agregar un nuevo elemento a la ultima posicion quedaría:
                           const colores = [“rojo”, “verde”, “azul”, “negro”]; */


________________________________________________________________________________________________________                          

//?METODO POP

//Este metodo elimina el elemento de la ultima posicion.
const colores2 = ['rojo', 'verde', 'azul', 'negro'];
colores2.pop();
console.log(colores2); /*   Ahora al eliminar el elemento negro de la ultima posicion quedaría, 
                           const colores = [“rojo”, “verde”, “azul”]; */

________________________________________________________________________________________________________

//?METODO UNSHIFT

//Este metodo agrega el elemento de la primera posicion.
const colores3 = ['rojo', 'verde', 'azul'];
colores3.unshift('negro');
console.log(colores3) /*    Ahora al regar un nuevo elemento a la primera posicion quedaria,
                          const colores = ['negro', 'rojo', 'verde', 'azul']; */


________________________________________________________________________________________________________

//?METODO SHIFT

//Este metodo elimina el elemento de la primera posicion.
const colores4 = ['negro', 'rojo', 'verde', 'azul'];
colores4.shift();
console.log(colores4) /* Ahora al eliminar el primer elemento de la primera posicion quedaria,
                        const colores = ['negro', 'rojo', 'verde', 'azul']; */

                
________________________________________________________________________________________________________
 
//?METODO SPLICE

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


//?METODO FOREACH

/*
El metodo forEach, es utilizado principalmente para recorrer un arreglo.
El método forEach() ejecuta la función indicada una vez por cada elemento del array.
Esta función tendrá tres parámetros:
1.	El valor del elemento -> el lemento que estamos recorriendo.
2.	El índice del elemento -> Index, osea la posicion del elemento.
3.	El array que está siendo recorrido -> Todos los elementos que estan en el Array.
*/
const arr = [2,4,6,8,10,];

arr.forEach((element, index, array) => { //La estructura de este array utilizando el metodo forEach, es utilizada usando las ARROW FUNCTION,
                                         //de esta manera utilizando las ARROW FUNCTION, la estructura sera mas corta y en su estructura iran
                                         //los parentesis y entre estos parentesis se ponen los parametros que se van a utilizar en la funcion.
                                         //que seran 3 parametros.
                                         //-El primer parametro, es el elemento que estamos recorriendo.
                                         //-El segundo parametro, es el indice del elemento que estamos recorriendo (La posicion del elemento recorrido).
                                         //-El tercer parametro, es el array que estamos recorriendo (TODOS LOS ELEMENTOS DEL ARRAY).
                                        
        console.log(element += 1, index, array); //Aqui ejecutaremos la funcion con los parametros de la funcion anonima.
                                                //E iran ordenamente en la consola asi como estan en la funcion,
                                                //primero el parametro element, segundo el indice y por ultimo el array.
});

/*
    Ahora hay que tener en cuenta, que el metodo forEach, no retorna nada, solo se utiliza para recorrer arreglos, como tal esa es sola su
    funcion, esta es la diferencia entre forEach y el metodo map, el metodo map aparte de recorrer, puede mutar un arreglo, osea este metodo
    nos puede ayudar a cambiar los elementos que pueda tener. COn forEach tendriamos que hacer manualmente esta manipulacion. por ejemplo:

    *Tenemos un arreglo con datos (nombre, apellido, edad), que recorreremos y asignaremos los los nombre y apellidos a otro arreglo, 
    *para esto lo que haremos sera utilizar el metodo forEach para recorrer el primer array original y manualmente tendremos que asignarle
    *estos datos (nombre, apellido), y para asignar estos datos en un nuevo array, tendremos que crearlo aparte el array y este no contendra 
    *nada, sera un array vacio, que esperara que le agregen a su conenido los elementos que nosotros hagamos manualmente:
*/
    const arr2 = [
        {nombre: 'jesus', apellido: 'torres', edad: 24},
        {nombre: 'ana', apellido: 'ortega', edad:21},
        {nombre: 'gabriela', apellido: 'montoya', edad:23}
    ]

    const newArr2 = [] //Arreglo vacio, en donde iran las modificaciones realizadas en el forEach.

    arr2.forEach((element) =>{
        newArr2.push(`${element.nombre} ${element.apellido}`) //De esta manera estamos asignando (nombre, apellido) manualmente al otro array,
    })                                                        //utilizando el metodo push,para agregar los datos al nuevo array.
    console.log(newArr2);
    
________________________________________________________________________

//?METODO SLICE

const y = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(y.splice(1, 3)); // este metodo lo que hace es que en el primer numero estara el inicio y este sera la posicion 
//del primer elemento y el segundo sera el final donde sera el limite de elementos que este tomara.
//Por ejemplo, en el ejemplo anterior, el primer numero seria 1 y el segundo sera 3, esto significa que tomara los elementos desde la posicion 1,
//hasta los elementos de la posicion 3. Osea : b,c,d.



________________________________________________________________________________________________________

//?METODO MAP:

/* 
EL metodo map es de igual forma como un forEach, nos ayudara a recorrer un arreglo con la diferencia de que este nos ayudara
a mordificarlo y retornara un arreglo nuevo, este metodo recibe un callback con tres parametros prdeterminados de igual forma 
como el forEach, es decir elemento, índice y array. Y su funcion será devolver un array resultante que sera diferente a los 
elementos del arreglo inicial, sin modificar al original. Este metodo forEach es inmutable.
*/

//En este ejemplo el metodo MAP nos servira para duplicar los elementos de arreglo inicial (numeros1). 

const numeros1 = [1,2,3,4,5]

const duplicado = numeros1.map((numerox) => {
    return numerox * 2                         //Cuando map empieza a recorrer el arreglo, el espera que nosotros retornemos algo,
                                               //es por eso que utilizamos el RETURN, de esta manera podremos manipular el arreglo inicial,
                                               //y retornar esa mnaipulacion en uno nuevo. Esas modifificaciones no afectaran el arreglo inicial.
});                                            

console.log(duplicado); //El resultado sera [2,4,6,8,10].

/*En el siguiente ejemplo, volveremos a manipular el arreglo inicial y retornaremos uno nuevo, con las propiedades (nombre, apellido) del objeto
que se alja dentro de el arreglo inicial.
*/

const arr3 = [
            {nombre: 'jesus', apellido: 'torres', edad: 24},
            {nombre: 'ana', apellido: 'ortega', edad:21},
            {nombre: 'gabriela', apellido: 'montoya', edad:23}
        ]

const newArr3 = arr3.map((elemento) => {
  return `${elemento.nombre} ${elemento.apellido}`
})

console.log(newArr3)



/*Con map tambien podremos modificar las propiedades de los objetos alojados dentro del arreglo, de esta manera con map, podremos manipularlos
y retornar en vez de nombre y apellido, el fullname, que tendra el nombre y el apellido en una sola propiedad:
*/

const arr4 = [
    {nombre: 'jesus', apellido: 'torres', edad: 24},
    {nombre: 'ana', apellido: 'ortega', edad:21},
    {nombre: 'gabriela', apellido: 'montoya', edad:23}
]

const newArr4 = arr4.map((elementos) => {
    return {
        fullname:`${elementos.nombre} ${elementos.apellido}`, //Aqui concatenamos el nombre y apellido en una sola propiedad.
        edad: elementos.edad,
        curse: 'true' // Aqui en esta parte agregamos una nueva propiedad a los objetos.
    }
})

console.log(newArr4)

/*Podemos usar spread operador: 
Tambien podemos utilizar el spread operator en el meodo map, para poder copiar las propiedades
de un objeto de manera optimizada, sin necesidad de declararlos manualmente. Por ejemplo en el objeto 
anterior tenemos un objeto con la propiedades de (nombre, apellido y edad), y lo que nosotros queremos es agregarle una propiedad
mas sin necesidad de manipular las ya presentes, para esto, podemos hacer uso del spread operador para llamar los datos ya 
creados (nombre, apellido, edad) y aparte agregar un dato mas al objeto. esto lo hariamos de la siguiente forma:
*/

const arr5 = [
    {nombre: 'jesus', apellido: 'torres', edad: 24},
    {nombre: 'ana', apellido: 'ortega', edad:21},
    {nombre: 'gabriela', apellido:'montoya'}
]


const newArr5 = arr5.map((elementos) => {
    return {
    ...elementos,   //Al utilizar el spread operador, estamos llamando a los datos de las propiedades ya existentes.
    curso: 'programacion' // Y aqui, estamos creado un nuevo dato a las propiedades que se alojaran en el nuevo array ya creado (newArr5).
    }
})

console.log(newArr5)  //El resultado sera el siguiente: 
                                                        /*
                                                            [
                                                                { nombre: 'jesus', apellido: 'torres', edad: 24, curso: 'programacion' },
                                                                { nombre: 'ana', apellido: 'ortega', edad: 21, curso: 'programacion' },
                                                                { nombre: 'gabriela', apellido: 'montoya', curso: 'programacion'}
                                                            ]
                                                        */

//* Ahora la parte mas importante para tenerlo encuenta una vez mas, es que cuando utilizamos el metodo MAP, no es que se alteren los datos del
//* array inicial, en este caso el arreglo del ejemplo anterior (Arr5), Arr5 seguira igual. Las modificaciones realizadas quedaran alojadas en
//* el nuevo array creado (newArr5), que tendra dentro de el, las propiedades con los datos modificados.





/*Tambien podremos encadenar metodos map:
Otro dato tambien importante con lo MAP, o con cualquier metodo relacionado con los arreglos, es que no necesariamente podemos utilizarlo una
sola vez, tambien se pueden utilizar varias veces, es decir, se puede utilizar un Map, despues de haber utilizado otro MAP, de esta forma 
podremos encadenar estos metodos:
*/

const arr6 = [
    {nombre: 'jesus', apellido: 'torres', edad: 24},
    {nombre: 'ana', apellido: 'ortega', edad:21},
    {nombre: 'gabriela', apellido: 'montoya', edad:23}
]

const duplicarEdad = arr6.map((elementos)=>{
  return {
    fullnames: `${elementos.nombre} ${elementos.apellido}`,
    edad: elementos.edad,
    curso: 'programacion'
  }
}).map((ele) => { //Encadenamiento del metodo map. 
  return {
    ...ele, 
    edad: ele.edad * 2} //De esta manera modificamos el dato edad y lo duplicaremos.
})

console.log(duplicarEdad) //El resultado de esta modificacion sera: 
                                                        /*
                                                            [
                                                                { fullnames: 'jesus torres', edad: 48, curso: 'programacion'},
                                                                { fullnames: 'ana ortega', edad: 42, curso: 'programacion'},
                                                                { fullnames: 'gabriela montoya', edad: 46, curso: 'programacion'}
                                                            ]
                                                        */

//*Este encadenamiento nos podra servir para manipular los datos de cada una de las propiedades si queremos y al final esto nos devolvera un
//* arreglo distinto que sera diferente al arreglo inicial. 

/* En resumen el metodo MAP es muy poderoso, ya que nos permite retornar y transformar lo que hay dentro de un array
osea sus elementos en uno nuevo array, sin tener que modificar el array original.*/


________________________________________________________________________________________________________

//?METODO FILTER:

/*
Cuando tenemos un arreglo nosotros tendremos distintos elementos y probablemente nostros vamos a querer seleccionar
alguno de esos elementos, basados en una condicion, por ejemplo podriamos decir, que queremos los modelos
de los carros salidos despues del año 2018 y que tengan un precio menor a 30.000, entonces para hacer eso
en codigo, lo que podriamos hacer es utilizar el metodo FILTER, que en si es muy similar al metodo MAP que
me permite recorrer los elementos, solo que en el metodo FILTER ademas podremos aplicar una condicion.

*nosotros para hacer eso sin el metodo FILTER tendriamos que hacerlo de la siguiente manera:


const carros = [

    {marca: 'hyundai', color: 'negro', año:2019, precio:22000},
    
    {marca: 'chevrolet', color: 'blanco', año:2020, precio:18000},
    
    {marca: 'mazda', color: 'rojo', año:2018, precio:50000},

    
    {marca: 'lexus', color: 'blanco', año:2021, precio:30000}
 
];

*Se utilizaria un bucle for, para recorrer el arreglo y creariamos una condicion que nos permita encontrar
*las propiedades que estamos buscando

for(let i = 0; i < carros.length; i++){
    if(carros[i].año > 2018 && carros[i].precio < 30000){
        console.log(carros[i])
    }
}

*De esta manera, el resultado de este codigo nos daria las propiedades del arreglo
*con la informacion esperada:


{ marca: 'hyundai', color: 'negro', 'año': 2019, precio: 22000}
{ marca: 'chevrolet', color: 'blanco', 'año': 2020, precio: 18000}


*La cuestion con usar el bucle for es que nosotros vamos a necesitar alojar este resultado en un
*nuevo array, y por lo tanto para esto, deberemos crear una varibale vacia que contendra el resultado 
*del codigo anterior, por lo cual el codigo se hara mas largo.

const resultado = []

for(let i = 0; i < carros.length; i++){
    if(carros[i].año > 2018 && carros[i].precio < 30000){
        resultados.push(carros[i])
    }
}

console.log(resultados) 

*De esta manera, al crear una variable con un nuevo arreglo vacio, podemos alojar la informacion
*requerida utilizando el metodo PUSH. Entonces al ejecutar esto, tendremos un array con los nuevo datos,
*pero este proceso tiene una logica mas larga y tediosa de escribir, esta en si es la forma IMPERATIVA.
[
    {marca: 'hyundai', color: 'negro', 'año': 2019, precio: 22000},
    {marca: 'chevrolet', color: 'blanco', 'año': 2020, precio: 18000}
]

*/


/*
LO que podriamos hacer en vez de lo anterior es utilizar el metodo FILTER, que es una forma mas declarativa
de realizar este proceso.

Entonces nosotros le pasaremos a FILTER una funcion y este empezara a recibir el dato que estara iterando en ese 
momento en donde nosotros podremos crear una condicion y si esa condicion se cumple, FILTER nos retornara esos datos 
en un nuevo arreglo, sin necesidad de crearlo manualmente como lo hicimos en el ejemplo anterior.

Entonces por ejemplo segun los datos de el arreglo con las propiedades con las que nosotros
estamos trabajando que es el siguiente:
*/


const carros = [

    {marca: 'hyundai', color: 'negro', año:2019, precio:22000},
    
    {marca: 'chevrolet', color: 'blanco', año:2020, precio:18000},
    
    {marca: 'mazda', color: 'rojo', año:2018, precio:50000},

    
    {marca: 'lexus', color: 'blanco', año:2021, precio:30000}
 
];

/*
Entonces, carros con el metodo filter recibira una funcion y como parametro de
esta function, recibira cada uno de datos de las propiedades del arreglo carros. A este parametro
nosotros podremos llamarlo con el nombre mas conveniente que nos parezca. Yo lo llamare (carro).

carros.filter(function (carro) {
    console.log(carro) --> Al ejecutar este parametro, nos mastrara como tal tdodo el
})                         areglo con las propiedades y datos que este contenga.

Podremos guardar el resultado del codigo realizado en el arreglo, en un arreglo nuevo, 
que contendra el resultado de los datos ejecutados de la siguiente manera (Llamare a este nuevo arreglo resultado). 

const resultado = carros.filter(function(carro){
    return carro --> Deberemos retornar el codigo para que se aloje en el nuevo arreglo creado (RESULTADO),
                     para despues llamar a (RESULTADO) con la informacion realizada.
})
console.log(resultado)

*/


/*
Ahora para filtrar los elementos que nosotros necesitamos crearremos el siguiente codigo
que buscara los carros que hayan salido despues del 2018 y tengan un precio menos a 30.000:
*/
const resultado = carros.filter ((carro) => {
    return carro.año > 2018 && carro.precio <30000     
});

console.log(resultado); 

//*De esta manera esto lo que nos mostrara, sera el resultado de los carros que estamos buscando:

/*
    [
        { marca: 'hyundai', color: 'negro', año: 2019, precio: 22000},
        { marca: 'chevrolet', color: 'blanco', año: 2020, precio: 18000}
    ]

*/


/*

*Al final tendremos el mismo reultado con la diferencia de que el codigo sera
*menor, aparte mas legible y tambien no ahorramos el paso de crear un array vacio
*que se encargue de alojar el nuevo arreglo. 

*Podriamos de igual forma minimizar el proceso de la siguiente forma:

*/

const resul = carro.filter(carro => carro.año > 2018 && carro.precio < 30000)


/*

*En definitiva FILTER lo que hara sera buscar los datos requeridos en las propiedades alojadas en el arreglo, y al encontrarlos
*este los alojara en el nuevo array creado para guardarlos. 

*/

________________________________________________________________________________________________________


//!METODO REDUCE:
/*
Para entender como funciona el metodo REDUCE, debemos crear un arreglo de numeros y deberemos obtener una variable que contenga
la suma de todos los numeros alojados en el array, para esto debemos usar el bucle FOR para hacerlo primero de manera
imperativa.

const sumArray = [2,3,4,5,6]

let total = []

for(let i = 0; i < sumArray.length; i++){
   total += sumArray[i]
}

console.log(total) --> De esta manera el resultado sera 20, que es la suma de todos los numeros
                       alojados dentro de el array.
*/

/*
Ahora vamos hacerlo de la forma declarativa, utilizando el metodo REDUCE, de los arrays.
Pero antes debemos tener clara su estructura, y es que el REDUCE igual que el MAP y el FILTER, tambien recibe una
funcion, pero con la diferencia de que el REDUCE recibe dos parametros.

1. EL primer parametro es basicamente el acumulador, se le llama acumulador por que justamente es otro parametro que ira guardando 
el total de los valores que nosotros queramos pasarle. Por ejemplo el total que este acumulador tendra sera 20,
por que son los numeros alojados dentro de el Array que le estamos pasando, de esta manera funciona para otros ejemplos.

2. El segundo parametro es el parametro que recorrera los elementos de el array con el que estemos trabajando,
en nuestro caso nos servira para recorrer el array de numeros llamado (sumArray).


Ahora otra cosa a tener en cuenta, el acumulador tendra que ser inizializado en 0, asi como lo hicimos de manera
manual cuando creamos la variable total en el ejemplo pasado ( let total = [] ), en el Metodo REDUCE, tambien tendremos
que inicializar ese valor en 0, y el lugar donde este estara presente sera al final de metodo REDUCE, esto quedara de 
la siguiente forma:

const sumArray = [2,3,4,5,6];

let total = sumArray.reduce((acumulador, numero) => {

    return acumulador + numero;

}, 0); --> En este lugar estara inicializado en 0 el acumulador. De esta manera el acumulador arrancara en 0, entonces de esta forma
            acumulador que vale 0, se sumara con la primera posicion del array (sumArray), que vale 2, despues ahora el acumulador 
            valdra 2 y este se sumara con la siguiente posicion que vale 3, ahora el acumulador vale 5, y se sumara con la siguiente 
            posicion, y de esta manera se seguiran sumando sucesivamente hasta sumarse todos los elementos alojados en el array, dando 
            como total el numero 20.
           



*/

const num = [0,3,10,40];

let suma = num.reduce((acumulador, numero) => {

    return acumulador + numero;

}, 0);

/*
*En este nuevo ejemplo, queremos saber el millaje total, de los 4 autos presentes en el array. 
*/

const carros2 = [

    {marca: 'hyundai', color: 'negro', año:2019, precio:22000, millaje: 120000},
    
    {marca: 'chevrolet', color: 'blanco', año:2020, precio:18000, millaje: 320000},
    
    {marca: 'mazda', color: 'rojo', año:2018, precio:50000, millaje: 222000},

    
    {marca: 'lexus', color: 'blanco', año:2021, precio:30000, millaje: 180000 }
 
];

let op = carros2.reduce((millajeInicial, millajeTotal) => {
    
    return millajeInicial + millajeTotal.millaje;

},0);

console.log(op)  

/*
*En este ejemplo queremos que en un array de numeros que contiene arrays de numeros con otros arrays de numeros dentro de el (anidados) estos se puedan 
*concatener y quedar al final todos en un mismo array:
*/
const numbers = [1,2,3, [4,5,6], 7, [8]]
const acumulador = numbers.reduce((acc, ele) => { // --> De esta manera al utilizar el metodo concat con el reduce, podremos usarlo con el acumulador
  return acc.concat(ele)                          //     que tiene como valor un array vacio, y este concatenera los elementos de arrays numericos y,
                                                  //     arrays numericos anidados al acumulador (array vacio) uno por uno, dando al final un array 
}, [])                                            //     con los elementos, quedaria asi: [1,2,3,4,5,6,7,8]
console.log(acumulador)


/*
*Aunque reduce es una gran herramienta que tienen los metodos de los arrays, es mejor evitarlo, debido a su complejidad al momento de ser legible,
*por ende es bueno utilizarlo cuando realmente se necesite.
*/

________________________________________________________________________________________________________

//! METODO SORT:

/*
Algo bastante comun en los arreglos es que si nosotros tenemos propiedades que pueden ser ordenadas, probablemente
vamos a querer utilizarlas para poder cambiar el orden de los elementos en un array. Por ejemplo, en el siguiente ejemplo
tenemos un arreglo de datos (nombre, apellido, edad), si nosotros quisieramos ordenarlo por edad, tendriamos que 
utilizar un bucle for y hacer condicionales etc..., pero lo bueno es que tenemos un metodo que se va a encargar de eso,
de una formabastante sencilla, el metodo es SORT. Entonces para implementarlo tenemos lo siguiente:

*/

//* Primero implementamos el arreglo de objetos con el que vamos a trabajar

const newDatos = [
    {nombre: 'juan', apellido: 'dominguez', edad: 21},
    {nombre: 'rafaela', apellido: 'pulgarin', edad: 23},
    {nombre: 'daniela', apellido: 'mendoza', edad: 19},
    {nombre: 'jose', apellido: 'castro', edad : 18},
    {nombre: 'martin', apellid: 'trujillo', edad: 30}
]


/*
Ahora para aplicar SORT, debemos crear una funcion que recibe otra funcion(callback), esta funcion lo que hace a diferencia de las
otras funciones con las que hemos trabajado en metodos pasados, lo que hace es recibir como parametro dos objetos, y es muy importante,
por que para poder ordenar elementos nosotros debemos pensar en que manera podriamos ordenarlos, para esto primero debemos saber
cual es el primer elemento  y luego saber cual vendria despues, es decir, debemos comparar dos objetos para poder saber cual es mayor
y poder cambiarlos de posicion dependiendo de la forma en la cual los queremos ordenar, ya sea de menor a mayor o viceversa.

Entonces basados en esa idea el metodo SORT, recibe dos objetos, el primer objeto de la lista y despues el segundo objeto y asi suesivamente
con los objetos que le siguen. Entonces su estructura sera de la siguiente forma:

newDatos.sort((first, second) => ), de esta manera iran organizados, ahora para nosotros ordenar el array de objetos de acuerdo a la 
edad de menor a mayor debemos llamar a los elementos como (first.edad y second.edad), de esta manera nosotros los podriamos utilizar, 
para realizar la comprobacion, y para realizar la comprobacion podriamos utilizar un condicional
que nos indicara cual es mayor o menor, para esto podriamos realizarlo de la siguiente forma:

newDatos.sort((first, second) => {
    if(first.edad > second.edad){ // Quedaria como: Si el primer estudiande de la propiedad (edad), es mayor que el segundo estudiante de la
                                     propiedad edad, significa que first.edad es mayor que second.edad. Entonces para decirle que es mayor, vamos a retornar 
        return 1                     un 1. Con esto le digo como si fuera true (verdadero)
    
    }else{                           Ahora que pasa si esta condicional no cumple, y en dado caso second.edad es mayor que first.edad, si esto pasa
        return -1                    le diremos que es menor (first.edad), y para decirle que es menor le diremos que nos retorne un -1.
    }                                                                               
                                     Si nosotros lo queremos realizar de manera contraria, pues simplmente cambiamos el signo de mayor que, por el signo de
                                     menor que, de esta forma, nos mostrara de mayor a menor. Hay que recordar que este proceso, debe ir alojado
                                     en una nueva constante, para despues mandarla a llamar.
})                                              
*/

//*Con esta simple logica, ahora si nosotros vemos el valor que reotrna todo este recorrido pues lo mandamos a llamar. Quedaria como:

const result = newDatos.sort((first, second) => {
    if(first.edad > second.edad){
        return 1
    }else{
        return -1
    }
}) 

console.log(result) //* --> Esto nos mostrara: 
                                            /*
                                                [
                                                    { nombre: 'jose', apellido: 'castro', edad: 18 },
                                                    { nombre: 'daniela', apellido: 'mendoza', edad: 19},
                                                    { nombre: 'juan', apellido: 'dominguez', edad: 21},
                                                    { nombre: 'rafaela', apellido: 'pulgarin', edad: 23},
                                                    { nombre: 'martin', apellid: 'trujillo', edad: 30}
                                                ] */
                        
//*La estructura anterior tambien la podemos optimizar un poco mas utilizando un operador ternario, nos quedaria:

const result2 = newDatos.sort((first, second) => first.edad > second.edad ? 1 : -1)

//*Ahora no necesariamente lo podemos realizar de esa forma utilizando ya sea una condicional u operador ternario,
//*a su vez tambien podriamos restar los valores, es algo que puede puede parecer algo extraño, pero se puede entener, 
//*cuando un valor al restarlo con otro me da un residuo significa que el primer valor era mayor, entonces lo que podemos
//*hacer basados en esa misma idea es decirle: 

const result3 = newDatos.sort((first, second) => first.edad - second.edad) //* Al final nos dara el mismo resultado.


/*
Ahora algo curioso que pasa con el metodo SORT, que podria ser raro, es que si nosotros queremos ordenar un array 
de numeros por ejemplo:

const number = [1,3, 5, 10, 100, 1000, 2, 3]

SI nosotros queremos ordenarlo de menor a mayor y utilizamos tan solo el metodo SORT, supongamos que le decimos
console.log(number.sort()) --> vamos a ver que el lo ordenara de una manera distinta a la esperada, el resultado
                                nos dara lo siguiente = [1,10,100,1000, 2, 3, 3, 5]

Esto ocurre porque sort no lo ordena de forma numerica, si no por caracteres, entonces si nosotros queremos
que SORT nos ordene el arreglo de forma numerica de menor a mayor lo que nosotros tenemos que hacer es que utiizar 
una funcion como las que realizamos anteriormente, de esta manera SORT ordenara de menor a mayor numericamente.

*/

const number = [1,3, 5, 10, 100, 1000, 2, 3]

const newNumber = number.sort((first, second) => first > second ? 1 : -1)
console.log(newNUmber) //--> De esta manera lo que obtendremos es un arreglo ordenado numericamente de menor a mayor:
                       //    nos quedaria: [1, 2, 3, 3, 5, 10, 100, 1000]


//* Entonces es muy importante conocer esto, por que es algo bastante comun cuando estamos operando con numeros
//* y queremos ordenarlos ya sea de menor a mayor o viceversa.


________________________________________________________________________

//! METODO FIND:

/*
Ahora vamos a aprender como funciona el metodo FIND, el metodo Find nos permitepoder buscar un elemento dentro de
un arreglo, y nos devolvera la primera coincidencia que encuente, por ejemplo supongamos que yo quiero todo el objeto 
en donde el nombre de un estudiante sea igual a (Jorge) por ejemplo, para poder hacer eso, nosotros podemos 
utilizar el metodo FIND, de una forma bastante sencilla,basicamente podriamos hacer:
*/

//*Primero creamos el array de objetos, con los diferentes nombres de estudiantes:

const students = [
    {nombre: 'jesus', apellido: 'torres', edad: 24},
    {nombre: 'ana', apellido: 'ortega', edad:21},
    {nombre: 'gabriela', apellido: 'montoya', edad:23},
    {nombre: 'jorge', apellido: 'lizarazo', edad: 30},
    {nombre: 'manuel', apellido: 'castro', edad: 15}
]

/*
Ahora para utilizar el metodo FIND, podriamos decir, que de el arreglo students, vamos a estar utilizando el metodo FIND,
y el va a recibir como en los otros mtodos un callback, esta funcion recibira como parametro al estudiante actual, osea el
estudiante que esta recorriendo y adentro de su bloque de codigo podriamos aplicar una condicion seria:

students.find((student) => {
                                      Le podriamos decir en la condicion que nos pase a student en su propiedad -->edad, que sea menor
    if(student.edad < 30){            a 30, y que nos retorne 1, si se cumple, con lo tal al ejecutarse nos devolvera la busqueda con
                                      el objeto que cumpla con esa condicion, hay que aclarar que nos devolvera la primera coincidencia
     return 1                         que pueda encontar, por lo cual el objeto que devolvera sera el mas cercano a la ppropiedad edad:30,
                                      que en este caso es el siguiente objeto con la propiedad --> edad:24. De esta forma al ser esta la 
    }                                 primera coincidencia mas cercana nos devolvera el objeto en donde se encuentra esa propiedad.edad
                                      el resultado sera: {nombre: 'jesus', apellido: 'torres', edad: 24}}
)}
                                      
   
Entonces con esto nosotros basicamente utilizando una simple condicion, podemos obtener como respuesta el objeto que estamos buscando,
esto funcionaria tambien al momento de querer buscar otra propiedad, ya sea el apellido o la edad.
*/

//*Hay que aclarar que FIND es diferente a FILTER, ya que el primero hace una busqueda en la cual devolvera solo la primera coincidencia que encuentre
//*y el segundo sirve para filtrar elementos y devolvera todas las coincidencias que encuentre dependiendo de la condicion que le pasemos. 

const estudiantes = students.find(student => student.edad < 30)

//*Al momento de que FIND busca algo y no lo encuentre, retornara uns UNDEFINED.
        
________________________________________________________________________________________________________

//! METODO FINDINDEX:
/*
FINDINDEX, es muy parecido al metodo FIND, la diferencia entre los dos es que FINDINDEX, nos regresara solamente el indice
de la primera coincidencia que este encuentre. Vamos a representarlo con el mismo ejercicio que utilizamos en el
METODO FIND.

*/
const clase = [
    {nombre: 'jesus', apellido: 'torres', edad: 24},
    {nombre: 'ana', apellido: 'ortega', edad:21},
    {nombre: 'gabriela', apellido: 'montoya', edad:23},
    {nombre: 'jorge', apellido: 'lizarazo', edad: 30},
    {nombre: 'manuel', apellido: 'castro', edad: 15}
]

/*
Entonces, su utilizacion es similar a FIND, este metodo recibe un callback, que a su vez recibe un parametro que recorrera el arreglo
en busca de la propiedad que le indiquemos, para representar su funcionalidad, deberemos llamar al arreglo clase y utilizarlo con el
metodo find, en donde como nombre de parametro tenemos student, y le pediremos que nos devuelva el indice de la propiedad edad que sea menor a
30, su exposicion seria:
*/

const newDat = clase.findIndex(student => student.edad < 30)
console.log(newDat)// El resultado de esta operacion es 0, ya que la coincidencia es la edad 24, que esta alojada en la posicion 0 del arreglo.

//Podemos ver que objeto retornara de acuerdo al indice ejecutandolo de la siguiente forma:

console.log(clase[newDat])//De esta manera llamamos al arreglo clase y a el elemento de la posicion que ocupa la variable newDat.

//*Dado el caso en que FINDINDEX, no encuentre la posicion que esta buscando, nos retornara un -1, que es similar a un UNDEFINED en el metodo FIND.
________________________________________________________________________________________________________

//! METODO SOME:

/*
En esta seccion vamos aprender como funciona l metodo SOME. A continuacion tenemos un arreglo de estudiantes en donde tenemos
propiedades como name, lastname, age y course:
*/

const estudiantess = [
    {name: 'ray', lastname: 'corrinton', age: 21, course: 'programming'},
    {name: 'max', lastname: 'paine', age: 29, course: 'programming'},
    {name: 'bryan', lastname: 'occoner', age: 24, course: 'cibersecurity'},
    {name: 'xander', lastname: 'caige', age: 19, course: 'machine learning'},
    {name: 'tom', lastname: 'shelby', age: 30, course: 'Data cience'},
]
/*
Supongamos que queremos hacer una comprobacion y tan solo obtener ya sea TRUE o FALSE,
apartir de que si se cumple la condicion, por ejemplo: Yo no quiero encontrar objetos o retornar
un nuevo arreglo, simplemente quiero saber si existen estudiantes que sean mayores que x edad, 
por ejemplo estudiantes que sean mayores a 24 y que me retorne TRUE o FALSE, si ea condicion es dada.

Entonces en lugar de nosotros estar recorriendo elemento por elemento, y comprobando uno a uno 
nosotros tenemos un metodo dedicado para eso, que nos va ayudar a realizarlo de una forma
bastante sencilla. 

Entonces lo que haremos sera llamar estudiantes y utilizar el metodo SOME. El metodo some recibe de igual forma
que los metodos anteriores una funcion como parametro y esta funcion como parametro basicamente recibe cada uno
de los estudiantes del objeo. Entonces lo que haremos basicamente sera poner una condicion en la cual le diremos
que si el estudiante en su propiedad age, por ejemplo es mayor a 24, pues que nos retorne true, esto 
quedaria epuesto de la siguiente forma:
*/

const totales = estudiantess.some((student) => {
    if(studen.age > 24){
        return true
    }
})

console.log(totales) /* --> Nosotros al ejecutar el array totales, podrriamos pensar que retornara un arreglo con 
                            todos los estudiantes que cumplen con la condicion de tener una edad mayor a 24, 
                            en realidad No. Lo que se ejecutaria en lugar de eso seria es un TRUE. 
                            
                            Y esto sucede por que el SOME solo retorna un valor BOOLEANO, apartir de que si hay
                            determinados objetos que cumplen con la condicion que le estamos pasando, con lo
                            cual si alguno de los objetos presentes cumplen con la condicion retornara TRUE, 
                            de lo contrario si ningun objeto cumple con la condicion retornara FALSE. 
              

Ahora basados en esa idea, tambien podemos pasarle una condicion en la cual nos busque si en las propiedades de los
objetos hay algun estudiante con el lastname de 'brock', si lo hay, nos retornara TRUE, de lo contrario retornara FALSE.

Ahora, no es necesario que yo ha una condicion de esta forma para poder retornar algo, ya que como en si
el metodo retornara TRUE o FALSE, no es necesaria un condicional, con lo cual, al realizar el codigo sin un condicional,
podremos optimizarlo. Nos quedaria asi:
*/

const totales2 = etudiantess.some(estudiante => estudiante.age > 24 ) 
console.log(totaltes2) //--> Nos retornara TRUE o FALSE, depediendo si se sumple y existen los valores. 

________________________________________________________________________________________________________

//! METODO EVERY:

/*
EN esta seccion vamos aprender del metodo EVERY, que basicamente es lo contrario del metodo SOME, es decir 
que con el metodo SOME, nosotros habiamos visto que si habia algun objeto que si cumplia con la condicion pues 
retornaba TRUE. El metodo EVERY lo que pide es que todos los objetos cumplan con una condicion y si todos cumplen pues 
al final va a retornar TRUE, si por ejemplo falta uno, retornara FALSE.

Para poder entenderlo utiliaremos el array anterior
*/

const estudiantess2 = [
    {name: 'Ray', lastname: 'Corrinton', age: 21, course: 'programming'},
    {name: 'Max', lastname: 'Paine', age: 29, course: 'programming'},
    {name: 'Bryan', lastname: 'Occoner', age: 24, course: 'cibersecurity'},
    {name: 'Xander', lastname: 'Caige', age: 20, course: 'machine learning'},
    {name: 'Tom', lastname: 'Shelby', age: 30, course: 'Data cience'},
]

/*
Entonces supongamos que llamamos al arreglo estudiantess y utilizaremos el metodo EVERY que recibe un callback, 
esta funcion recibe un parametro y basados en ese parametro de nombre 'student', nosotros podemos realizar una
condicion que nos indique si student en su propiedad age es igual a 20, entonces que nos retorne TRUE,
de lo contrario retorne FALSE. Esto expuesto quedaria:
*/

const totaless2 = estudiantess2.every(student => student.age === 20)
console.log(totaless2) /* --> EL nos retornara FALSE, por que de todas las propiedades
                             age, solo 1 cumple con la condicion, si todos tuvieran un age de 20
                             retornaria TRUE, por que todos cumplirian con la condicion. 
                             Basta con que solo 1 no cumpla la condicion para que me retorne FALSE.

Entonces, esto basicamente lo que me permite es comprobar si todos cumplen con una determinada condicion.

Ahora, este metodo nos podria servir para podr comprobar por ejemplo, datos o propiedades apartir
de un objeto, nosotros le podriamos pedir, no solamente para aplicar el metodo para numeros si no ademas
podemos pedirle que nos retorne TRUE o FALSE dependiendo si las propiedades incluyen una letra de inicio, por ejemplo
la J. Cada nombre inicia con una letra, entonces podemos decir si todas las propiedades nombre inician con J.

Para esto podemos utilizar la propiedad de los obejtos .INCLUDES(), que nos verifica si en el objeto existe 
x cosa. Para representar lo anterior podriamos hacer lo siguiente:
*/

const totales3 = estudiantess2.every(student => student.name.includes('J')) 
consolelog(totales3) // --> Si todas las propiedad.nombre, inician con J retornara TRUE de lo contrario retornara FALSE.


________________________________________________________________________________________________________

//! METODO INCLUDES:

/*
Según la MDN el método includes() de JavaScript fue lanzado en la versión ES6 del lenguaje y solo podía ser usado con cadenas de texto, 
posteriormente el método se extiende para su uso en arreglos para la especificación ES7, en otras palabras:

includes() en ES6: se aplica a strings.
includes() en ES7: se aplica a arrays.

Pero, ¿para que sirve exactamente este método? 🤔
En ambos casos y en síntesis, includes realiza una búsqueda en el string o en el array y retorna un valor boleano según sea el caso; 
true si encuentra el valor y false sino lo encuentra.

Por ejemplo tenemos un arreglo de caracteres de nombres const arrx = ['juan', 'david', 'juana', 'maria']
si utilizamos includes, para buscar a uno de los nombres por ejemplo 'david' dentro del arrego (arrx), nos devolveria un true, pero si buscamos 
dentro del mismo arreglo a 'ricardo' nos devolveria false:
*/

const arrx = ['juan', 'david', 'juana', 'maria']
const arrxx = arrx.includes('juan')
console.log(arrxx) //--> El resultado de esta operacion sera TRUE, ya que el elemento existe.

const arrxx2 = arrx.includes('ricardo')
console.log(arrxx2) //--> EL resultado de esta operacion sera FALSO, ya que el elemento no existe dentro del array.

/*
Conclusiones:
-includes() realiza búsquedas en strings y arrays.
-Las búsquedas por defecto se realizan desde la posición 0 de la cadena o del arreglo.
-Es posible modificar este comportamiento añadiendo un 2do parámetro opcional entero para realizar la búsqueda.
-Siempre retorna true o false dependiendo del éxito o no de la búsqueda.
-No es posible usarlo en objetos
*/
_________________________________________________________________________________________________________

//! METODO INDEXOF:

/*
El metodo INDEXOF tiene como proposito retornarnos el indice en el que se encuentra el valor que nosotros le pasamos,
dado el caso en que el valor que le pasemos no exista, nos retornara un -1.

Un ejemplo es el siguiente en el cual tenemos un arreglo de palabras const pal = ['hola', 'como', 'como']
y queremos saber si el valor que le pasamos existe o no, para esto lo realizaremos de la siguiente forma:
*/

const pal = ['hola', 'como', 'estas']

const pal2 =  pal.indexOf('hola')
console.log(pal2) //--> En este ejemplo al existir la palabra en el arreglo, nos retorna el 0, ya que es el indice donde esta posicionada 'hola',
                  // en el arreglo.

const pal3 = pal.indexOf('hi')
console.log(pal3) //-->En este ejemplo el resultado nos retornara un -1, ya que el valor que le pasamos no se encuentra en el array.
________________________________________________________________________________________________________

//! METODO JOIN: 

/*
El metodo JOIN, es un metodo que nos ayuda a unificar todo un array, de esta manera podemos unir con un separador un array de diferentes 
elementos, ya sea un guion, un punto y coma, una coma en fin. Todos los arrays ya traen una forma predeterminada para separar su elementos
que es la coma(,), pero con join podemos cambiar a la coma por el signo que queramos.

const elements = ['fire', 'air', 'water'], tenemos a un array de elementos, y predeterminadamente, tiene a la coma como su separador, 
nosotros ahora queremos cambiar esa forma predetemrinada, por un guion, que sera la manera en la cual los elementos del array elements,
se separaran. 

La estructura como tal del metodo join es simple, dentro de sus corchetes y comas, ira el signo en el cual nosotros podremos separar al elemento,
y a su vez tambien podremos darle un espacio, ya sea hacia la izquiera derecha etc. por ejemplo:


elements.join('-') --> Nos devolvera: 'fire-air-water'
elements.join('- ') --> Nos devolvera: 'fire- air- water'
elements.join(' - ') --> Nos devolvera: 'fire - air - water'
elements.join(' -') --> Nos devolvera: 'fire -air -water'

Y asi sucesivamente con los signos que utilicemos para separar los elementos de un array, al ejecutarlos al final nos devolvera un STRING.
*/

const elements = ['fire', 'air', 'water']

console.log(elements.join('-')) //--> El estring que nos devolvera sera: 'fire-air-water'.



________________________________________________________________________________________________________

//! METODO SPLIT:

/*
El metodo SPLIT, transforma una cadena STRING en un array, este metodo puede separar una frase ya sea en un array de letras,
separadas independientemente, o separadas por palabras. EL metodo SPLIT, ademas contiene un parametro extra que nos ayudara
a limitar hasta donde queremos aplicarle el metodo SPLIT, por ejemplo:

const palabras = 'Hola como estas', tenemos una variable string, que queremos pasarla a array, con el metodo SPLIT lo podemos hacer pero
hay que tener encuenta, el como lo haremos, por ejemplo:

palabras.split() --> si nosotros no le pasamos nada en parentesis, el emtodo SPLIT nos retornara un arreglo de STRING, 
                    nos devolvera: ['Hola como estas']
            
palabras.split('') --> Si nosotros entre el parentesis le pasamos dos comillas sin espacio en medio, este nos devolvera un array, con
                        las letras que conforman el STRING que estamos pasando a ARRAY, nos devolvera:
                        [ 'h', 'o', 'l', 'a', ' ', 'c', 'o', 'm', 'o', ' ', 'e', 's', 't', 'a', 's' ], hay que tener en cuenta que los espacios
                        que separan las plabras de el STRING, al convertirlas en array, esos espacios tambien se compartaran como otro elemento
                        mas que conforma el array.
                        
palabras.split(' ') --> Si nosotros le damos un espacio a las comillas dentro de los parentesis, SPLIT separara las palabras como elementos 
                        independientes en el array, nos devolvera: [ 'hola', 'como', 'estas' ]

palabras.split('a') --> SI en dado caso nosotros entre comillas le pasamos una letra o vocal que esta en el STRING, como por ejemelo la vocal
                        'a', esta misma se cortara, y desaparecera, por ejemplo al colocar la vocal a nos quedaria asi: 
                        [ 'hol', ' como est', 's' ]

palabras.split(' ', 2) --> Nosotro como anteiormete deciamos, podemos pasarle otro parametro a SPLIT, que sera el limite hasta donde queremos
                            aplicar SPLIT, por ejemplo, al indicar el 2, estamos diciendo que SPLIT se aplicara hasta el segundo elemento del 
                            array, despues se rompera, nos devolvera: [ 'hola', 'como'].

*/
________________________________________________________________________________________________________

//! METODO SLICE:

/*
El metodo SLICE, es un metodo que nos devolvera una copia, de la parte de un arreglo, por ejemplo en nuestro caso tenemos un array de numeros
 const numbers = [1,2,3,4,5], SLICE copiara una parte de este arreglo NUMBERS, y lo guardara en otro arreglo, no hara modificaciones
del arreglo inicial, lo unica+o que hara sera copiar de acuerdo al parametro que nosotros le indiquemos, y el parametro que nosotros le pasamos
en la sintaxis basica de SLICE, es indicarle el indice de inicio, que si o si le tendremos que indicar por que es obligatorio, y el 
indice final que en este caso es opcional, puede ir o no dependiendo de nuestra necesidad.

Entonces lo que haremos sera crear un numero arreglo que se encargara de alojar la copia creada de acuerdo al arreglo NUMBERS, 
const newNumbers =  numbers.slice(), ahora si nosotros queremos copiar desde el indice 2, del arreglo numbers, hasta el indice 4 del mismo,
                                     lo que haremos sera, indicarle en los parentesis.

const newNumbers = numbers.slice(2, 4) --> Esto lo que nos ejecutara sera: [3, 4]. Como podemos ver nos devuelve el elemento 3 y 4, 
                                            ahora la pregunta es por que no nos devuelve el 5, ya que le indicamos que nos devolviera 
                                            dessde el indice 3 hasta el 4. Nos devuelve el 3 por que es el indice inicial  que es la posicion (2),
                                            pero no nos devuelve el 5 que es la posicion (4) por que SLICE lo que hace es extraer la copia desde 
                                            el indice inicial hasta el indice final sin incluir el valor de el mismo. Osea copiara desde 
                                            el indice 2, pero no incluira el valor de el indice 4.

const newNumebers = numbers.slice(2, 5) --> Ahora para incluir el valor del indice 4, pues simplemente le decimos que nos copie desde el 
                                            indice 2, hasta el indice 5, de esta manera nos dara: [3,4,5].
                                            
const newNumbers = numbers.slice(2) --> Debido a que el indice 5 no existe, pues simplemente con solo ponerle el indice 2, que es el indice
                                        inicial, bastara para copiar los elementos hasta el final del array. 
                                        Esto de igual forma nos devolvera: [3,4,5]

*/
________________________________________________________________________________________________________

//! METODO CONCAT:
/*
El metodo CONCAT, tiene como funcion cocatenar dos elementos, puede concatenar dos STRINGS pero al concatenar dos arreglos 
este generara uno nuevo con la concateacion de los dos arreglos que nosotros le pasemos, esta concatenacion no mutara 
el arreglo inicial, por ejemplo podremos concatener dos arreglos para tener solo uno, y esta concatenacion ira alojada 
en una nueva variable, por ejemplo:

const palabras = ['primero', 'segundo', 'tercero']
const palabras2 = ['cuarto', 'quinto']
const newPalabras = palabras.concat(palabras2) --> Esta concatenacion lo que nos ejecutara sera un arreglo nuevo, con los dos arreglos
                                                   concatenados, esto nos devolvera: ['primero', 'segundo', 'tercero', 'cuarto', 'quinto']



//*Con el metodo concat, podemos alojar en un array la concatenacion de dos arrays, numeros etc. 
*/
________________________________________________________________________________________________________

//! METODO FLAT:

________________________________________________________________________________________________________

//! METODO FLATMAP:


________________________________________________________________________________________________________

//! METODO REPLACE:
/*
EL metodo REPLACE, tiene como funcion reemplazar parte de la cadena, por el valor que nosotros le digamos
pro
*/
________________________________________________________________________________________________________

//! METODO FILL:

/*
Es un Metodo dentro de los arrays, que nos permite llenar un array, con cualquier cosa que nosotros queremos pasarle,
por ejemplo puede ser un numero. EL metodo FILL, cuenta con tres parametros, el valor con el que queremos llenar el array,
el indice inicial, y el indice final, hay que aclarar que como igual pasa con el metodo SLICE, el valor del indice final no se incluye.

Entonces tenemos un array de numeros const num = [1,2,3,4,5,6], y queremos llenar con el numero 9 desde el indice 2 hasta el indice 5,
al utilizar el METODO FILL, nos quedaria asi:

const num = [1,2,3,4,5,6]
const newNum = num.fill(9, 2, 5) --> EL resultado que nos devolvera sera: [1,2,9,9,9,6].
*/


________________________________________________________________________________________________________

