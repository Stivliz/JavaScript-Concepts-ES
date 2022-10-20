//*PARAMETRO REST Y OPERADOR SPREAD
/*
Hablaremos de dos características muy importantes sobre todo en el ámbito de lo framework y librerías reactivas 
como Angular, Vuej y React, los parámetros rest y el operador spread (Operador de propagación), son cosas que 
utilizamos en el día a día.
*/

_______________________________________________________________________________________________________________

//*PARAMETRO REST
/*
1.
Con los parametros REST podemos recibir una cantidad indefinida de argumentos en una funcion. y esto es importante
porque cuando uno establece los paremetros tiene que enumerar 1 a 1 y establecer una cantidad de argumentos 
proporcionales a estos (parametros). y si luego se quiere agregar mas parametros se tienen que volver a 
declararlos en la funcion por lo cual es muy engorroso y no es recomendable. Con los parametros REST podemos
agilizar el proceso ya que con este podemos declarar una cantidad de argumentos indefinidos.

Los parametros REST son compatibles con los parametros normales, pero deben declararse siempre al final de la funcion. 
ejemplo: function (a,b, ...c) --> a,b son parametros normales y c es un parametro rest que esta declarado
al final de la funcion.

Para definir esos parámetros rest, pues simplemente hay que definirlos anteponiéndoles 
tres puntos suspensivos, antes del nombre donde están guardados esos posibles valores infinitos.

La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos 
como un array.

*/

//Entonces crearemos una función que nos permita sumar, utilizando el método forEach.

function sumar (a,b, ...c){ //Paremetro a y b tendra un valor como argumento y C sera la suma de los valores a y b,
                            //pero como es un valor desconocido entonces se le pondra los 3 puntos suspensivos.
    let resultado = a + b; 

c.forEach((n) => {   // Aca utilizamos el metodo forEach porque todo lo que sea C lo vamos a tratar como un arreglo.
                     //Y esta funcion se va a ejecutar por cada uno de los elementos que venga dentro de C (n) y
    resultado += n   //aca utilizamos el operador += para sumar los valores de cada uno de los elementos del arreglo en
});                  // el resultado (a + b + c).
    return resultado;
}

console.log(sumar(2,3)); // Aca estan los valores de a y b,el resultado de la suma de a y b, y el resultado de la suma de los dos valores.
console.log(sumar(2,3,4)); // Aca utilizamos el operador rest, donde a la suma de a y b
                           // se le agregara la suma del operador REST osea del valor c,
                           // que es 4, y el resultado sera la suma de a y b mas 4, osea 9.
                           
                           
/*En este ejemplo apartir del tercer valor hacia adelante es que funciona el operador REST, y cada numero 
que venga despues de los dos primeros se va a sumar al resultado de la suma de a y b.



//*SPRADE OPERATOR
/*
Ahora veremos el operador de propagación o el spread operator también nos permitirá cuando una expresión la 
tengamos que expandir en situaciones donde tengamos múltiples argumentos  o tengamos que guardar múltiples argumento 
o elementos lo podamos hacer. Un ejemplo podría ser cuando uno tenga un arreglo con cierto número de elementos 
pero en cierto momento recibes nuevos parámetros entonces en lugar de estar haciendo concatenaciones o push 
a nuestro arreglo, simplemente lo que podemos hacer es agregarle con el spread operator, aquí es donde nos damos 
cuenta que el spread y el rest, se parecen porque también utilizan los tres puntos suspensivos, la diferencia es 
que los rest son parámetros que recibe una función y el operador de propagación se puede estar ejecutando en 
cualquier sentencia de nuestro código.
*/


const arr1 = [1,2,3,4,5];
      arr2 = [6,7,8,9,0];
      
const arr3 = [...arr1, ...arr2]; //De esta manera agrupamos los elementos de los dos arreglos en uno solo.
console.log(arr3);               //quedaria: [1,2,3,4,5,6,7,8,9,0]





const arr = [1,2,3,4,5];
const [...rest] = arr;
console.log(rest);              //  quedaria: [1,2,3,4,5]