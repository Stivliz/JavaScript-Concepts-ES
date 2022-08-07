//* MANEJO DE ERRORES (TRY CATCH)
/*
JavaScript tiene un mecanismo para el manejo y la detección de errores, este se llama TRY…CATCH…FINALLY, 
esta es una estructura que nos permitirá  evaluar ciertos fragmentos de código y cuando haya algún mensaje de error, 
se va a capturar en la parte del catch, esta es una manera de ir gestionando los manejos de errores. 

El primer bloque donde estaremos evaluando nuestro código será en el TRY, aquí se agrega el código a evaluar. 
Si en el código del TRY hay algún error o se ejecuta algún error, quien va a capturar ese error será 
la parte del CATCH, entonces este captura cualquier error surgido en el TRY. 

Finalmente a lo último estará el bloque FINALLY, este se ejecutará siempre haya error o no, al final 
de un bloque TRY…CATCH. 

*/

//*TRY... CATCH
/*
El manejo de errores (TRY…CATCH) en si lo que hace es anticipar y capturar errores, para poder operar sobre ellos, 
por ejemplo mostrar una notificación, sin detener el flujo del código. Esto se utiliza para ser más ordenado con 
el código.

En el momento en el que el TRY CATCH captura el error, todo lo que haya después del error en el bloque TRY no será
ejecutado, ya no seguirá leyendo las demás líneas de código, es muy similar a un RETURN.

Para mandar a llamar el error lo que haremos sera llamarlo en el console.log, por lo que con esto sabremos 
cual es el error.

La estructura es la siguiente:

Try{

   --> Código a evaluar

}catch(error){  // Aquí se ejecutara el codigo que haya tenido el error en el TRY.
    
   --> Código a ejecutar cuando se captura el error

}finally{     // Aquí se ejecuta el bloque FINALLY. Este se ejecutara haya error o no.

    --> Código a ejecutar siempre, no es necesario colocar el bloque finally.

}


*/

try{

    console.log("Esto es una prueba de error"); //Aqui se ejecuta el TRY. Si dentro de estos corchetes hay algun error,
    hola;                                       //entonces se pasa y se ejecuta el catch como prueba de que hubo error.
       
    hola; //--> Esto dara error porque no esta definido ni declarado, con lo cual dara un error en el CATCH, todo lo 
          //que esta despues del error en el TRY no se ejecutara. Pasa igual que el RETURN.

    console.log("Hola") //--> Esto no se ejecutara porque ya se dio el error antriormente.

}catch(error){                        // Aqui se ejecutara en el Catch el codigo que haya tenido el error en el TRY.

    console.log("Error: " + error); //Aqui llamamos el objeto error en el console.log.

}finally{                // Aqui se ejecuta el bloque FINALLY. Este se ejecutara haya error o no.
    console.log("Esto es una prueba de finally");
}


//Aqui tenemos un Manejor de error personalizado, que nos muestra el error que se encuentre en el TRY.

try{

let num = 23;    
if(isNaN(num)){
throw new error(`No se introdujo un numero`);
}
console.log(num * num);

}catch(error){
console.log(`Se ha producido un error: ${error}`);
}


///TRY CATCH FINALLY

try{ 
let num1 = 25;
if(isNaN(num1)){
throw new error(`No se introdujo numero 1`);
}
console.log(num1 * num1);
}catch(error){
console.log(`se ha producido un error: ${error}`);
}


//!Con esta estructura de control de errores podemos preparar de una mejor forma, mas ordenada y mejor evaluada, prevenir errores logicos.