//* METODOS ESTATICOS, METODOS GETTERS Y SETTERS:

/*
Hay algunas caracteristicas, si venimos de otros lenguajes de programacion como PHP, JAVA, C, hay otras caracteristicas que existen en la POO,
como los tipos de clases (clases abstractas, los mdificadores de acceso, es decir, si nuestra clase va hacer publica, privada, protegida) y que estas
caracteristicas, impactan en el uso de os atributos y metodos en las clases, hay algunas de estas caracteristicas que no estan presentes
en JavaScript, por ejemplo nosotros no podemos crear una clase con atributos y metodos privados, y que una clase tenga atributos y metodos 
privados significa que dichos metodos o atributos pues solamente los vamos a poder utilizar dentro del cuerpo de clase.

class Animal(){
    constructor(nombre, genero){
        this.nombre = nombre
        this.genero = genero
    }

    private accion(){  --> Es decir imaginemonos que  nosotros volvieramos al metodo accion creado dentro de la clase (Animal), un metodo 
                           privado, esto significa que nosotros podriamos utilizar dentro de la clase al metodo accion, pero si lo invocaramos
                           afuera de la clase nos marcaria ERROR. Esa es la caracteristica de cuando volvemos metodos PRIVADOS.

    }
}

Ahora bien, ese tipo de caracteristicas en JavaScript no existen, digmos que todas las clases que generamos en ajavascript son publicas por eso no
es necesario ponerle la plabra public o private a nuestra clase, por que en javascript, no existe eso de privados o protegidos y esto es por que 
las clases son azucar sintactico, sin embargo, hay ciertas caracteristicas que si existen en la escritura de clases que nos da javascript.*/


//*Metodos Estaticos

/*
Una de las caracteristicas que nos da javascript en las clases, son los metodos ESTATICOS, al venir de otro lenguaje de programacion orientado a 
clases, debemos de saber que un metodo estatico es aquel que se pied ejecutar sin la necesidad de instanciar la clase, es decir,

const prueba = new Animal() -->Sin la necesidad de nosotros aqui creado un objeto de tipo Animal, nosotros podriamos ejecutar directamente
                                mandando a llamar el nombre de la clase, un metodo que nosotros hallamos definido como estatico.

Por ejemplo, definemos un metodo que se llamara (descripcion) dentro de la clase Animal:

class Animal(){
    constructor (nombre, genero){
        this.nombre = nombre
        this.genero = genero
    }

    descripcion(){                       -->Entoces para definir a este metodo estatico simplmente anteponemos la palabra reservada static a el.
        console.log("Es un ejemplo para 
        ejemplificar nuestro caso")
    }

    static descripcion(){                --> ENtonces por la definicion que nosotros dimos, sobre metodo estatico, podemos decir que es un metodo
        console.log("Es un ejemplo para      que podemos ejecutar sin la necesidad de crear una instancia (obejto), del tipo al que pertenece la 
        ejemplificar nuestro caso")          clase que en este caso es Animal. Entonces para ejecutar este metodo estatico hariamos:
    }
}

Para ejecutar este metodo, invocamos el nombre de la clase donde este esta alojado, el punto para llamar al metodo y su nombre con sus 
parentesis:

Animal.descripcion() --> Ejecucion del metodo estatico.
*/


//* Metodos Getters y Setters:

/*
Ademas de los metodos estaticos, tambien tenemos unos metodos bien particulars, llamados Getters y Setters, estos son metodos especiales
que nos permiten establecer el valor de un atributo que exista en nuestra clase, pero como tal  a la hora que invocamos la creacion de la 
instacia de ese objeto basado en la clase pues no lo definimos.

Entonces para ejemplifica esto podriamos crear una caracteristica que no hicimos de la clase Animal, por ejemplo puede ser la raza */
class Animal{
    constructor (nombre, genero){
        this.nombre = nombre
        this.genero = genero
        this.raza = null        //--> Imaginemonos aqui, que crearemos una variable que se llame raza y entonces lo igualaremos a NULL, por que no
                                    //igualaremos esa variable a ningun parametro del constructor por que no lo vamos a pedir de inicio, entonces 
                                    //simplemente le diremos que el valor de raza al inicio de que se cree un Animal sea null.
    }

    static descripcion(){                
        console.log("Es un ejemplo para ejemplificar nuestro caso")
    }


/*Ahora aca, los metodos para poder modificar u obetener el valor de esa propiedad this.raza, debemos utilizar la palabra reservada GET, para 
indicarle dentro de la clase que no es un simple metodo, si no indicarle que es un metodo de tipo obetenedor.
ahora bien a este metodo lo podriamos llamar incluso igual que el atributo (raza).
Generalmente lo que se hace en otros lenguajes de programacion para detectar que son metodos obtenedores y establecedores le anteponeremos
al nombre raza, el verbo get, osea el nombre del metodo quedaria como getRaza para indicarle que es un metodo obtendedor. Quedaria:*/

    get getRaza(){        //--> getRaza va a ser ese metodo especial que permitira obtener el valor del atributo raza.
        return this.raza  //--> Generalmente un metodo obtenedor lo unico que va a relizar es retornar como tal el valor de la propiedad en 
                          //    cuestion, que en este caso seria this.raza
    }
/*Para generar un metodo establecedor que modifique el valor de dicha propiedad(raza) entonces definimos al metodo con la plabra reservada SET,
y de igual forma como se realiza en otros lenguajes que se acostumbra a anteponer al nombre del metodo con el que estamos trabajando (raza)
el verbo set, de igual forma que lo hicimos en el metodo GET, lo haremos con el metodo SET quedaria:*/

    set setRaza(raza){       // --> Como vamos a establecer un nuevo valor pues significa que este metodo SET si esta esperando recibir un valor como 
                             //     parametro, que podria ser la raza que queremos modificar.
        this.raza = raza     // --> Internmente podriamos decirle que a la propiedad this.raza, le asignaremos el valor de la raza.        
    }
}


const prueba = new Animal('nombre', 'genero')


/*Ahora la pregunta es como poder utilizar estos metodos, aunque son metodos los vamos a utlizar como si fueran atributos, es otra curiosidad
de javascrit.

Si nosotros quisieramos ejecutar el metodo getRaza que es un obtenedor o un metodo set que es un establecedor, como una funcion tendriamos
un error, entonces vamos a ejecutar esos metodos como si fueran atributos y no un metodo, es raro pero asi se trabaja en javascript. osea seria:

console.log(prueba.getRaza)  --> tendriamos que ejeccutarlo usando el console.log y obetenderiamos null, por que ese es el valor que obtenemos 
                                 en el metodo get.

Para establecerle un valor a la propiedad raza, tendriamos que utilizar el metodo setRaza, que es el que tiene esa propiedad y para generarle un
valor por defecto tendriamos que asignarselo como lo hacemos con las atributos de los objetos, osea de la siguiente manera:*/

prueba.setRaza = 'Gran danes'

// Ahora si nosotros mandamos a llamar a la sentencia prueba, esta ya contendra la propiedad (raza), con su valor (gran danes)

const prueba = new Animal('nombre', 'genero')
console.log(prueba) /* --> Si nosotros ejecutamos la isntancia prueba nos mostrara:

Animal {nombre: 'rocky', genero: 'macho', raza: 'Gran danes'}
    genero: "macho"
    nombre: "rocky"             
    raza: "Gran danes"      
    getRaza: "Gran danes"       --> Podemos ver que el metodo getRaza esta en la lista de los atributos por que JS lo convirtio en atributo, pero
                                    es un atributo especial, es un getter, en el cual ya esta establecido el valor de gran danes. Estos metodos
                                    getters y setters, internamente modifican la propiedad this.raza que esta ya definida con un valor de NULL.
                                    Gracias a esas propiedades podemos ver que el valor de Null cambio a gran danes.
    [[Prototype]]: Object       --> Si revisamos los prototipos que hay dentro del prototipo object podemos encontrar:

        constructor: class Animal --> Podemos ver el constructor de la clase Animal
        getRaza: (...)
        get getRaza: ƒ getRaza()  --> Podemos ver el metodos getRaza, aunque trabajamos con el como un atributo podemos ver que al final es 
                                      una funcion de tipo get.
        set setRaza: ƒ setRaza(raza) --> Podemos ver el metodo setRaza, aunque trabajamos con el como un atributo podemos ver que al final es 
                                      una funcion de tipo set.

        [[Prototype]]: Object       --> EL metodo estatico, al ser un metodo que se puede invocar independientemente sin la necesidad de tener 
                                        una instancia para utilizarlo, por eso es que no aparece dentro del portotipo, esa es una caracteristica
                                        de los metodos estaticos en javascript.
                                    
*/


/*
Estas son dos caracteristicas que tiene la programacion orientada a objetos basadas en clases en otros lenguajes que vienen a javascript.
*/