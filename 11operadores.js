//*OPERADORES ARITMETICOS:
/* 
1. Los operadores aritméticos son operadores básicos que usamos para hacer sumas, restas, division o multiplicacion 
e inlcusive el sobrante de una division (Mod %):

2. Tambien esta la prosedencia de valores:
Como por ejemplo el orden de las operaciones (PEMDAS). Primero se desarrollan los parentesis, despues los exponentes,
multiplicaciones y divisiones y por ultimo adiciones y sustracciones.

3. Estan los operadores de incremento y decremento:
Algunas veces necesitarás repetidamente sumar o restar uno de/a una variable numérica.
Esto puede hacerse convenientemente usando los operadores de incremento (++) y decremento (--). 

x= 2;
x++; -> Esto es igual que x = x + 1; 
por tal razon quedaria como: 3.
x--; -> Esto es igual que x = x - 1;
Por tal razon quedaria como: 1.

4. Estan los operadores de asignacion:
Los operadores de asignación son operadores que asignan un valor a una variable (=).
Pero hay algunos tipos más complejos, que proporcionan atajos útiles para mantener tu código más ordenado 
y más eficiente. Los más comunes se enumeran a continuación:

-> += suma y asignacion -> Es lo mismo que (x = x + y;)
-> -= resta y asignacion ->  Es lo mismo que (x = x - y;)
-> *= multiplicacion y asignacion -> Es lo mismo que (x = x * y;)
-> /= division y asigacion -> Es lo mismo que (x = x / y;)

5. Estan los operadores de comparacion:
A veces querremos ejecutar pruebas de verdadero/falso, y luego actuaremos de acuerdo con el resultado de esa prueba. 
Para ello, utilizamos operadores de comparación. 
-> (> Mayor que) 
-> (< Menor que)
-> (== Igual que)
-> (>= Mayor o igual)
-> (<= Menor o igual)
-> (!= Diferente de)
-> (=== Igual estricto)
-> (!== (Diferente estricto)

6. Y por ultimo estan los Operaores logicos:
Tendremos tres tipos de operadores lógicos,( la negación(!), el O(OR-||), y el Y(AND-&&))
-> !  ->La negacion: Invierte el valor, todo lo que es verdadero lo vuelve falso,
 y too lo que es falso lo vuelve verdadero. 
-> || -> El O: El operador Or se utilia cuando se tienen 2 condicones y si una se cumple de las
dos entones el OR aceptara la condicion y nos valida a verdadero. Si ninguna de las dos condiciones se cumplen nos validara a falso.
-> && -> El Y: El operador AND se utiliza cuando las dos condiciones se cumplan, para que estas 
validen a verdadero se tienen que cumplir las dos si o si. 
*/


// = --> Asignacion
// == --> Comparacion de valores.
// === --> Comparacion de tipo de dato y valores.

//*OPERADORES ARITMETICOS

let AA = 3;
let BB = 4;
let CC = AA * BB; /* 12*/

console.log(AA, BB, CC); /* 3,4,12 */

CC += BB;

console.log(CC , BB); /*16, 4 */

CC += AA;

console.log(CC, AA); /* 19, 3 */

BB *= AA;

console.log(BB, AA); /*12, 3 */

BB -= AA;

console.log(BB, AA); /* 9, 3*/


BB++;

console.log(BB); /* 10, ++ sirve para agregar 1 numero, osea si hay y se agrega ++ esto sera 4*/

BB--;

console.log(BB); /* 9, -- sirve para quitar un numero osea resta, si hay 12 y se le agrega -- el numero 12 sera 11*/ 

_______________________________________________________________________________________________
//*OPERADORES DE INCREMENTO Y DECREMENTO (OPERADOR UNARIO)
x= 2;
x++; //-> Esto es igual que x = x + 1;  
//por tal razon quedaria como: 3.
x--; // -> Esto es igual que x = x - 1;
//Por tal razon quedaria como: 1.

//Este operador solo sirve si vamos aumentando de uno en uno o disminuyendo de uno en uno.
_______________________________________________________________________________________________
//*OPERADORES DE ASIGNACION


x = y

x += y /* Esto significa x = x + y(suma)*/  

x -= y /*Esto signific x = x - y (resta) */ 

x *= y /* Esto significa x = x * y (multiplicacion) */

x **= y /* Esto significa x = x ** y (exponencial) */


_______________________________________________________________________________________________
//* EJERCICIOS OPERADORES DE COMPARACION */

let A = 3;
let B = 5;

console.log(A == B); /* false */

A = 4;
B = 2;

console.log(A != B); /* true */

A = 3;
B = 4;

console.log(A === B); /* false */

A = 3;
B = 6;

console.log(A !== B); /* true */

A = 5;
B = 3;

console.log(A > B); /* true */

A = 6;
B = 4;

console.log(A < B); /* false */

A = 5;
B = 5;

console.log(A >= B); /* true */

A = 5;
B = 7;

console.log(A <= B); /* true */


_______________________________________________________________________________________________
//*OPERADORES LOGICOS

/*
->  && (y): Si los dos son verdaderos devuelve verdadero.
-> || (o): Basta con que uno sea verdadero para que devuelva verdadero.
-> ! (no): Negación
*/

if( 23>10 && 4<10);

if( 23>2 || 3>6);

if (2>2 != 3>2 );
_____________________________________________________________________________________________
//*EJERCICIOS OPERADORES BIT A BIT 

//(<<)// 
let W = 2;
let R = 4;

 console.log(W << R); /* resultado: 32;
                       Cuando se corre a la izquierda se le suma el valor de b, osea 4 pero en ceros, si 2 vale (2=10) 
                       y si se le suma 4 ceros quedaria 100000, ahora hay que contar de izquierda a derecha, el resultado se cuenta cuando leguemos a 1, 
                       osea que el resultado de dicha operacion sera 32. 1(32)0(16)0(8)0(4)0(2)0(1).  */

let xx = 3;
let yy = 6;                       
         
console.log(xx << yy);  /* resultado: 192;
                        -3= 11
                        -<< se suman los 6 ceros (128)1(64)1(32)0(16)0(8)0(4)0(2)0(1)0 
                        128 + 64 = 192*/
let ww = 4;
let zz = 8;

console.log(ww << zz); /* resultado: 1024; 
                     -4 = 100;
                     - (1024)1(512)0(256)0(128)0(64)0(32)0(16)0(8)0(4)0(2)0(1)0
                    */

let ss = 5;
let ll = 10;

console.log(ss << ll); /* resultado: 5120; 
                     -5 = 101;
                     - (4096)1(2048)0(1024)1(512)0(256)0(128)0(64)0(32)0(16)0(8)0(4)0(2)0(1)0;
                    */
_______________________________________________________________________________________________
//* (>>) 

let aa = 32;
let bb = 4;

console.log(aa >> bb);/* resultado: 2; 
                    Ahora lo que haremos a diferencia del anterior sera restar, (<< suma), (>> resta).
                    Entonces a 32 = 100000 tendremos que restarle 4.
                    (2)1(1)0(resta)0(resta)0(resta)0(resta)0, por lo cual el resultado es 2.
                    (Cabe recordar que solo se toma el valor de 1.)
                    */

let se = 64;
let xy = 2;

console.log(se >> xy); /* resultado: 16; 
                    x = 1000000
                    se restaran 5 por lo cual es 
                    (16)1(8)0(4)0(2)0(1)0(resta)0(resta)0 
                    Por lo cual el resultado es 16.

                    */
let w = 512;
let h = 7;

console.log(w >> h); /* resultado: 4;
                     512 =  (512)1(256)0(128)0(64)0(32)0(16)0(8)0(4)0(2)0(1)0 
                     Ahora tendremos que eliminar 7 por lo cual quedaria as:
                     (4)1(2)0(1)0(resta)0(resta)0(resta)0(resta)0(resta)0(resta)0(resta)0

                    */
_______________________________________________________________________________________________
//*( OR )

let ds = 7;
let ya = 4;

console.log(ds | ya); /*El resultado es: 4; 
                    Con el or lo que haremos sera sumar 7 en binario(111) y 4 en binario(100), hay que 
                    tener en cuenta que en el (OR) solo es 0 si es 0 y 0, de lo contrario sera 1.
                    */

let x = 8;
let y = 5;

console.log(x | y); /* El rwsultado es: 13;
                    Lo que haremos sera sumar 8 en binario(1000)y 5 en binario(101), hay que tener en cuenta
                    que los espacios en la suma se rellenan con cero, por lo cual es:
                    1000
                    0101
                    1101-> 13 
                    */
let s = 9;
let r = 7;

console.log(s | r); /* El resultado es: 15;
                    Lo que haremos ahora sera sumar 9 en binario(1001) y 7 en binario(111).
                    Hay que recordar que los espacios se rellenan con ceros, por lo cual es:
                    1001
                    0111
                    1111-> 15

                    */
_______________________________________________________________________________________________
//* (AND) 

let pri = 8; 
let seg = 9;

console.log(pri & seg); /* El resultado es:8 ;
                    Lo que haremos sera sumar 8 binario(1000) y 9 binario(1001), hay que tener en cuenta
                    que en (AND) solo sera 1 si es 1+1 de resto sera 0.
                    1000
                    1001
                    1000-> 8 
                    */
let zio = 6;
let vio = 4;

console.log(zio & vio); /* El resultado es: 4;
                    Lo que haremos sera sumar 6 binarios(110) y 4 binario(100).
                    110
                    100
                    100-> 4
                    */

let real = 28;
let madrid = 29;

console.log(real & madrid); /* El resultado es: 28;
                    Tendremos que sumar 28 binario(11100) y 29 binario (11101)
                    11100
                    11101
                    11100-> 28
                    */
_______________________________________________________________________________________________
