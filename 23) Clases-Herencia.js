//* CLASES Y HERENCIA


//*CLASES 
/*En los dos apartados anteriores, vimos como funciona la programacion orientada a objetos en javascript que esta basada en prototipos y no en 
clases, sim embargo desde el año 2015 el estandar de javascript, nos ah dado lo que seconoce como azucar sintactico, esto significa que apartir 
del año 2015 nosotros ya podemos escribir clases, sin embargo aunque ya podemos gramatical y sitacticamente poder escribir nuestras clases en 
javascript, javascript eso lo va a compilar a prototipos, por eso era muy importante que en las dos sesiones anteriores explicaramos lo que era
como construir una funcion constructora y como se creaan y como funcionaba el tema de los prototipos y herencia prototipica.

Entonces en este apartado, podremos darnos cuenta, como simplificaremos lo anterior con la escritura de CLASES. Si tenemos conceptos de lenguajes
como C++, JAVA, PHP por ejemplo, donde se utilizan las clases en la POO, vamos a ver que es practicamente muy similar.

Muy bien, ahora lo que haremos sera implementar la funcion constructora con la que hemos trabajado, que es la sigueinte:
*/

function Animales2(nombre, genero){
    this.nombre = nombre
    this.genero = genero
}

/*
Y la convertiremos en una clase. Para definir esta funcion constructora en una clase, vamos a usar la palabra reservada class, hay que tener
claro que las clases no reciben parametros, eso es algo que hay que tener presente. Ahora para recibir parametros, las clases tienen un 
metodo especial llamado constructor, este metodo especial, es justamente el que se encargara de recibir, dichos parametros, y dentro de este 
contructor es donde inicializaremos esos parametros. 

El constructor es un metodo especial que se ejecuta en el momento de instanciar la clase, quedaria como:
*/

/*class Animal{
    construtor(nombre,genero){
        this.nombre = nombre
        this.genero = genero
    }
}
*/
/*
Ahora, para definir los metodos en una clase lo podemos hacer de la misma forma en que lo hacemos en los objetos literales, es decir directamente
el nombre del metodo y paretesis. Los metodos aca si pueden recibir parametros en caso de necesitarlo, estos iran alojados dentro de la clase. 

Las clases nos ayudan a simplificarnos la escritura.
*/
class Animal{
    construtor(nombre,genero){
        this.nombre = nombre
        this.genero = genero
    }
    //Metodos dentro de la clase.-->  Ahora recordemos que en la funcion constructora Animales2 al tener los metodos dentro de esta, nos generaba 
    accion(){                    //   conflictos, debido ah que estos metodos se duplicaban por instancia creada apartir de la funcion constructora
                                 //   Animales2. Eso generara un impacto negativo en el rendimiento a nivel de memoria de la aplicacion. 
                                 //   Por ende realizabamos la modificacion de sacar los metodos del constructor y lo asignabaos al prototipo del 
    console.log('Hello world')   //   mismo, para evitar esa duplicacion.

                                 //   En las clases, no es nececesario sacar el metodo para evitar ese conflicto, por que al escribirlo en formato
                                 //   de clase javascript ya hace esta mejora por nosotros.

    }
}

//Vamos a invocar la la instancia, para eso las crearemos:

const Perro = new Animal('bronco', 'macho')

/*Ahora si nosotros mandamos a la consola la instancia entenderemos por que se les llama azucar sintactica a las clases en javascript, por 
que tras banbalinas lo que nos aparece:

Animal {nombre: 'rocky', genero: 'macho'}
    genero: "macho"                --> Nos aparece un objeto de tipo Animal que tiene porpiedades como nombre y genero. Animal es un objeto 
    nombre: "rocky"                    que hereda del prototipo mas primitivo de javaesscript que es OBJECT, sus propiedades. 
    [[Prototype]]: Object              
      constructor: class Animal    --> Dentro del prototipo Object viene el constructor que es lo que se inicializa, y dentro de este 
      accion: ƒ accion()               el metodo accion. 
      [[Prototype]]: Object

Aunque nosotros escribimos clases, es simplemente un maquillaje sintactico, por que javascript es un lenguaje que la programacion orientada a
objetos, la trabaja con portotipos, no con clases. Las clases nos la dieron parafacilitar la escritura, en las clases ya no nos tenemos que 
preocupar por sacar los metodos y asignarlos a los prototipos, por ende lo que simplifica las clases es la escritura, pero tras banbalinas
JavaScript sigue interpretando las clases como prototipos.     

*/
_________________________________________________________________________________________________________________ 

//*HERENCIA
/*
Ahora nuestra pregunta es como realizamos la herencia en clases, acordemonos que en la herencia prototipica vista en el apartadoa nterior
nosotros creabamos una funcion constructora perro, en donde le creabamos una propiedad this.super, por que super como veaiamos en la clase
anterior es un metodo especial existente en la POO, que nos permite invocar al contructor de la clase padre.

Para representar la herencia vamos a crear una nueva clase llamada Perro, que heredara las caracteristicas de su clase padre, en este caso
la clase padre del cual la clase Perro heredara sus caracteristicas es la clase Animal. 

Recordemos que en la herencia prototipica para realizar la herencia nosotros al prototipo de perro le indicabamos que iba hacer un nuevo animal,
y luego le creabamos su propio constructor, esto lo representabamos asi: Perro.prototype = new Animales2;
                                                                         Perro.prototipe.constructor = Perro;
Todo eso se puede simplificar de la siguiente forma:

Para decirle a la clase Perro que herede el prototipo Animal, siplemente podemos hacer uso de la palabra reservada (extends), es decir esto lo que
nos pedira es la clase padre de la cual vamos a heredar caracteristicas. Y dentro de la clae Perro, crearemos el constructor y este recibira 3 
parametros, (nombre, genero) y ademas le agregaremos uno nuevo, que es el tamanio.(nombre, genero, tamanio).

Ahora dentro del constructor, invocaremos al metedo SUPER, y SUPER es un metodo que mandara a llamar al constructor de la clase padre, es decir
manda a llamar al constructor de la clase Animal, entonces este asignara el nombre y genero, que vienen provenientes del constructor Animal.
Por ende a super hay que pasarle el parametro de nombre y genero. Recordemos que tamanio, es una propiedad exclusiva de los perros, por ende
hay que definirla dentro del constructor de perro, pero fuera de la invocacion del SUPER como this.tamanio y inicializarla con lo que nos pasen
como argumento en el parametro tamanio.

Tambien vimos la sobrrescritura de el metodo accion, en donde modificamos desde el constructor Perro, el metodo accion que estaba alojado
en la funcion constructora Animales2

*/

class perro extends Animal{   //--> Hacemos uso de EXTENDS para indicar que Animal sera la clase padre de la cul heredaremos caracteristicas.
    constructor(nombre, genero, tamanio){ // --> El constructor recibira 3 parametros.
        super(nombre, genero) //--> Hacemos uso de el metodo SUPER para llamara al constructor de la clase padre(Animal), por ende mandara a 
                              // llamar a las caracteristicas(Parametros) que tiene este (nombre, genero).
        this.tamanio = tamanio; //--> Tamanio, es una propiedad exclusiva de la clase Perro, que no esta alojada en el constructor de la clase
                                // padre(animal), por ende hay que definirla.
        }                        
    accion(){  //--> Podemos sobresccribir el metodo accion desde la clase hija Perro, antes teniamos en la clase padre: 'Hello world'
        console.log('Se modifico el metodo')                                          //Ahora tenemmos en la clase hija: 'Se modifico el metodo'
    }
}

/*
Ahora lo unico que tenemos que hacer es crear la nueva instancia, que sera un nuevo Perro (clase Perro), y le agregaremos los argumentos
para que se pasen a los parametros.
*/

const nuevaInstancia = new Perro('Junior', 'macho', 'mediano')
console.log(nuevaInstancia) 

/* Al ejecutar la nueva instancia tenemos:

Perro {nombre: 'skype', genero: 'macho', tamanio: 'mediano'}
    genero: "macho"         --> Podemos observar los atributos y sus vaores de la clase Perro.
    nombre: "skype"
    tamanio: "mediano"
    [[Prototype]]: Animal  --> En la clase Perro, su prototipo del cual deriba es Animal, que es la clase padre de la cual esta basado.
                               podemos ver la cadena prototipica que veiamos en la clase anterior, con la herencia prototipal.
                               Por eso decimos que las clases simplemente son una azucar sintactico. 
        
        constructor: class Perro --> SI desglozamos podemos ver que la clase perro tiene internamente su constructor y aparte podemos ver tambien  
        accion: ƒ accion()           que tiene disponible el metodo que sobreescribimos llamado accion, que modificamos.
        [[Prototype]]: Object    --> Podemos ver que la clase Animal, deriba del prototipo mas primitivo OBJECT y si a su vez desglozamos Object
                                     podemos ver:
            
            constructor: class Animal --> Al desglozar OBJECT, podemos ver que este contiene el metodo accion original de la clase animal, por que 
            accion: ƒ accion()            el constructor es animal.
            [[Prototype]]: Object

De esta manera podemos ver que el prototipo en el cual esta basado la clase Perro es Animal, y proporcinal podemos ver que la clase padre Animal
esta basada en el prototipo mas primitivo de javascript que es OBJECT. La dos clases anteriores donde veiamos que era un prototipo, como creabamos
una funcion constructora, comoasignar correctamente los metodos para evitar conflictos, y la herencia, se pudo simplificar con la escritura
de las clases. Hay que tener en cuenta una vez mas, que esto no convierte a JavaScript en un lenguaje orientado a objetos basado en clases, 
JavaScript, sigue siendo un lenguaje en la cual la orientacion a objetos la basa en prototipos, lo unico que nos dio el estandar ECMASCRIPT, fue
poder a escribir las clases de la forma en la cual se escriben en otros lenguajes basados en clases, como C, JAVA o PHP. Por eso se le llama
azucar sintactico, por que es una simplificacion de como escribir prototipos.
*/
