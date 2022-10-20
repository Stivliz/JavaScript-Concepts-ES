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


//?METODO REDUCE:
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
*En este ejemplo queremos que en un array de numeros que contiene arrays con otros numeros dentro de el (anidados) estos se puedan 
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

//?METODO FILL




________________________________________________________________________________________________________

//?METODO EVERY

_________________________________________________________________________________________________________

//? METODO REPLACE

________________________________________________________________________________________________________

//?METODO FINDINDEX

