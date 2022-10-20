//*BREAK Y CONTINUE
/*
Estas palabras nos ayudaran a controlar el flujo de nuestras estructuras de control sobre todo cuando estamos 
en un loop, y a lo mejor por algún razón necesitamos llegar a cierto numero y cuando ya lleguemos a ese numero 
de repeticiones salirnos, romper la estructura o a veces saltarnos ciertas vueltas a un bucle en base a un patrón. 
Por ejemplo de una lista imprimir solo los números pares o los impares entonces para eso nos pueden ayudar 
BREAK o CONTINUE.

1.	Podemos utilizar la palabra BREAK para romper el bucle,  cuando aplicamos el break no se ejecuta ninguna 
línea de código después de este en el bloque donde esta se posiciona. En términos fáciles, rompe el ciclo.

2.	Podemos utilizar la palabra CONTINUE para recorrer posiciones, aunque a diferencia del break, este no rompe 
el bucle, lo que hace es que ignora el numero limite que está en esa iteración del ciclo, lo salta, 
y sigue recorriendo el resto de los números.  En términos fáciles, se salta e ignora iteración.


-->Las palabras BREAK o CONTINUE no están destinadas a utilizarse en métodos de los arreglos, están destinadas solo
para utilizar en estructuras de control como ( for, while, do while, if, switch, etc) Por este motivo no se 
pueden utilizar métodos de los arreglos como el FOREACH.



*/
____________________________________________________________________________________________________________________

//*BREAK
const y = [1,2,3,4,5,6,7,8];

for(let i=0; i<y.length; i++){
if(i === 5){     // Al cumplirse la condicon de i === 5, el break inmediatamente rompera el ciclo, por ende solo se 
    break;       // imprimiran los primeros 5 numeros. 
}
console.log(x[i]);
}

 
//*CONTINUE

const x = [1,2,3,4,5,6,7,8];

for(let i=0; i<x.length; i++){
if(i === 5){      // Al cumplirse la condicon de i === 5 es igual a la posicion 5, este debera omitir esa posicion e 
                  //imprimir el resto de numeros, el continue inmediatamente saltara a la siguiente iteración,
    continue;     // haciendo que no se imprima el numero de la posicion 5 del arreglo, con lo cual se imprimiran todos
}                 // los numeros menos el numero 6, ya que este esta en la posicion 5. 
                  // En el continue se manejan las posiciones del arreglo.

console.log(x[i]);
}



i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i == 3)
      continue;
    console.log(i);
}
