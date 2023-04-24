//* THIS

/*
Vamos hablar de algo muy importante en javascript que es entender el concepto de la palabra reservada THIS, si venimos de algun otro lenguaje de 
programacion que trabaje con el paradigma de la programacion orientada a objetos, sabemos que el THIS es una palabra que hace referencia a el
objeto en cuestion, en el que estamos trabajando y asi podemos invocar  propiedades o metodos que tengan dicho objeto.

Aca en javascript tambien nos sirve para eso, sin embargo en javascript es un poco diferente porque hablamos de los contextos en el que este
se puede encontrar. Ya hemos visto algunas caracteristicas importantes como los temas de los scopes y contextos a la hora de declarar variables
globales contra variables de bloques, tambien hemos hablado del ambito dentro de una funcion, y tambien vimos las arrow functions, que estas 
justamente vienen a trabajar de manera muy especial con este keyword THIS.

Ahora ahora todo lo que hemos visto de javascript es totalmente valido para el javascript de los navegadores como para el javascript en un
ambiente de desarrollo backend que es el caso de NODEJS, entonces lo primeroque debemos saber es que THIS, en el navegador hace referencia 
al objeto global, y el objeto global se llama WINDOW.

si nosotros ejecutamos desde la consola en el navegador --> console.log(this), no va a devolver WINDOW, que es el objeto window.
si nosotros ejecutamos desde la consola en el backend --> console.log(this), nos va a devolver en la temrinal GLOBAL, que es el objeto global.

Sabiendo que en lo navegadores this hace referencia al window, que es el contexto global, nosotros podriamos decir en el consola
que console.log(this === window) --> Nos va a validar a TRUE. 

Si nosotros quisieramos crear una variable al window, sin la necesidad de crear variables con var,const o let, pues simpemente podriamos hacer
lo siguiente:

this.nombre = "Contexto global", esto quedara alojado en el window del navegador.
console.log(this.nombre) --> Si nosotros 



Si el THIS esta contenido en un metodo dentro de un objeto se va a referir a ese objeto que lo contiene.

const objeto = {
    propiedad1: "valor",
    propiedad2: "valor2",
    metodo1(){
        console.log(this.propiedad1) --> This hara referencia al valor de la propiedad1, ya que esta es la propiedad que esta dentro del objeto
    }                                    que contiene a THIS.
}


En cambio si el THIS, es parte de una funcion que no contiene dentor de un objeto, va a referir al objeto WINDOW, si estamos en un buscador
o al objeto global si estamos en NODEJS

--> THIS en el BROWSER se refiere al                    --> THIS en el BACKEND se refiere al
OBJETO WINDOW.                                              OBJETO GLOBAL.                                    

function saludar(){                                         function saludar(){
    console.log(this)                                           console.log(this)
}                                                           }


Veamos algunos ejemplos, modelemos una notificacion va a tener un texto, un color y ademas va a poder mostrarse.

const notificacion = {
    text: 'Ha comenzado el partido'
    color: 'azul'
    mostrarse(){
        console.log(this) --> Cuando se muestre vamos hacer un console.log de this, si nosotros llamamos a este metodo, nos deberia demostrar
    }                         el objeto coompleto.
}

notificacion.mostrarse() --> Esto nos imprime: {text: 'ha iniciado el partido', dolor: 'azul', mostrarse: ƒ}

Ahora agregremos un metodo mas que nos permita cambiar le texto de la notificacion, entonces crearemos un metodo con nombre cambiarTexto,

const notificacion = {
    text: 'Ha comenzado el partido',
    color: 'azul',
    mostrarse(){
        console.log(this)
    }
    cambiarTexto(text){
        this.text = text --> Este this, esta dentro de un metodo que pertenece al objeto notificacion, entonces cuando le decimos this.text nos 
    }                       estamos refiriendo a la variable propiedad text, de nuestro objeto notificacion, en cambio cuando tenemos el text
                            sin el this adelante, se refiere al text que nos va a llegar por parametro cuando llamemos a la funcion cambiarTexto
}

Ahora probemos hacer por fuera de nuestro objeto notificacion, un this.text que dentro del objeto significaba mandar a llamar a la propiedad text,
si nosotros mandamos a llamar por consola console.log(this.text), esto nos mostrara undefined,esto es por que ahora el THIS, se refiera al 
WINDOW y no al objeto notificacion.

Entonces repasemos, cuando codificamos en javascript siempre vamos a estar dento del objeto WINDOW, o si estamos en NODE, dentro del objeto 
GLOBAL, por ende si tiramos un this, en una funcion que esta fuera de un objeto, o  simplemente lo ejecutamos en el console.log(this),
estamos refiriendonos al objeto GLOBAL O WINDOW, pero una vez que creamos un objeto, y dentro de este escribimos THIS, ahora este THIS,
va a ser referencia a nuestro nuevo objeto y no a WINDOW o GLOBAL.

Veamos ahora un caso donde el THIS, dentro de un objeto, no hara referencia al objeto donde este esta alojado, sino al WINDOW:

const numeros = {
    arreglo: [1,2,3,4,5],                     Tenemos un objeto que tiene un array de numeros, un numero para sumar y ademas un metodo, que le 
    numeroSumar: 1,                           suma a cada numero del array el numero para sumar osea 1.
    sumarNum(){
        this.arreglo.forEach((n) =>{
            console.log(n + this.numeroSumar)
        })
    }
}
numeros.sumarNm() --> Al ejecutar nos mostrara NaN, que significa Not a Number(no es un numero), pero como es que puede ser si estamos usando
                      el THIS, dentro de un objeto, en realidad no es tan asi, por que si miramos bien, al usar el forEach declaramos una nueva
                      funcion, esta ueva funcion no va a ser parte de nuestro objeto, sino que va a pertenecer al Scope Global, osea al WINDOW, 
                      por ende no reconocera el THIS ya que apunta a WINDOW y no a nuestro objeto NUMEROS, por suerte hay una forma de arreglar 
                      esto y es especificandole el scope a la funcion y para eso tenemos que agregarle por fuera a la funcion, pero dentro de 
                      los parentesis del forEach, el objeto al que queremos que apunte nuestro THIS que esta dentro de la funcion.

const numeros = {
    arreglo: [1,2,3,4,5],                     
    numeroSumar: 1,                           
    sumarNum(){
        this.arreglo.forEach((n) =>{
            console.log(n + this.numeroSumar)
        }, this)  --> Como ya no estamos dentro de la funcion, pero seguimos dentro del objeto, podemos simplemente escribir THIS y ahora si
                      estamos haciendo referencia al objeto Numeros, entonces ahora el THIS, que esta adentro de la funcion apunta al objeto 
                      numeros, por que el THIS de afuera que es el que indica a que objeto apuntar al THIS, de adentro apunta al objeto numeros.
    }                 si ahora nosotros ejecutamos la funcion nos va a devolver el resultado que esperamos.
}

*/
