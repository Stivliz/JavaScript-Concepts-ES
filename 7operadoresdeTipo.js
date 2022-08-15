//*OPERADORES DE TIPO:



//* OPERADOR TYPEOF
/*
El operador TYPEOF devuelve una cadena que indica el tipo del operando sin evaluarlo. Operando es la cadena, 
variable, palabra clave u objeto para el que se devolvera su tipo de dato. 

En pocas palabras  el operador typeof, que devuelve una cadena de texto que describe el tipo del operador que 
estamos comprobando.
*/


//* EJEMPLO 1

let ex1 = 'hola';
    ex2 = 5;
    ex3 = true;
    ex4 = {};
    ex5 = [];
    ex6 = function(){};
    
console.log(typeof ex1); //--> devuelve un dato de tipo string.
console.log(typeof ex2); //--> devuelve un dato de tipo number.
console.log(typeof ex3); //--> devuelve un dato de tipo boolean.
console.log(typeof ex4); //--> devuelve un dato de tipo object.
console.log(typeof ex5); //--> devuelve un dato de tipo object (array).
console.log(typeof ex6); //--> devuelve un dato de tipo function.



//* EJEMPLO 2:

function ejemplo(x) {
    if (typeof x === "number") {
      alert("x es un numero");
    } else if (typeof x === "string") {
      alert("x es un string");
    }
  }

  console.log(ejemplo("hola")); // --> devuelve un dato de tipo string.    
  
  
//* EJEMPLO 3:

  function ejemplo(x) {
    if (typeof x === "number") {
      alert("x es un numero");
    } else if (typeof x === "string") {
      alert("x es un string");
    }
  }

  console.log(ejemplo(3)); // --> devuelve un dato de tipo number(int).