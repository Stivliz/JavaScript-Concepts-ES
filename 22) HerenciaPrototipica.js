//* HERENCIA PROTOTIPICA

/*
La HERENCIA es la capacidad de poder heredar caracteristicas de un objeto padre, a un objeto hijo. Eso se da con las clases enlos lenguajes 
basados en clases, pero en JavaScript que esta basado en prototipos, la herencia tambien se da a manera de cadena prototipica.

En el tema anterior (prototipos) habiamos generado una funcion constructora (Animales2)*/
function Animales2(nombre, genero){
    this.nombre = nombre
    this.genero = genero
} 
//Habiamos agregado un metodo al protoipo de la funcion constructora Animales2.
Animales2.prototype.accion = function(){
    console.log(`soy un animal de nombre ${this.nombre} y soy ${this.genero}`)
}


//y entonces teniamos diferentes instancias creadas aparte de esa funcion constructora como:

const dog = new Animales2('skype', 'macho') 
const cat = new Animales2('roma', 'hembra')

/*Entonces apartir de eso imaginemonos que vamos a generar una nueva funcion constructora, para crear a el prototipo Perro, y el prototipo perro
va a herear las caracteristicas de la funcion constructora Animales2. Para esto vamos a generar la estructura de la funcion constructora Perro.

Vamos a decir que el Perro (F.Constructora), va a recibir como parametros los mismos parametros que el padre (Animales2), que en este caso van 
a ser (NOMBRE, GENERO), y adicionalmente vamos a crear un nuevo parametro para nuestra nueva funcion constructora, llamada tamaño, como en ingles 
no existe la Ñ entonces le pondremos como tamanio. 

Ahora alg muy importante, cuando estamos trabajando con clases en la programacion orientada a objetos (POO), y tratamos de hacer la herencia, 
tenemos en la mayoria de los lenguajes, un metodo llamado SUPER, que tiene como fin, llamar a el constructor de la clase padre, pero aca nosotros
como estamos trabajando directamente con prototipos, vamos a crear una variable (atributo), que va a colgar del THIS de la funcion, a la cual 
llamaremos SUPER, como alusion al metodo usado en clases para mantener los mismos nombres.

*/

function Perro(nombre, genero, tamanio){  //this.super, va a ser igual a el prototipo del cual nos basaremos para hacer la herencia hacia el 
    this.super = Aniamles2                //constructor perro, es decir, le diremos que el elemento padre de perro es el constructor Animales2.
    this.super(nombre, genero)        //<-- Aca lo que haremos ahora es ejecutar ese metodo this.super, y si this.super es la funcion constructora 
    this.tamanio = tamanio;           //<-- Animales2, pues recibe los dos parametros de esa funcion construcutora Animales2(nombre,genero).
                                          //Adionalmente a esto, recuerden que a la funcion constructora perro, le agregamos un parametro nuevo
                                          //que no seta en la funcion constructora padre(Animales2), entonces hay que nombrarla a esta funcion 
                                          //funcion constructora perro. EntonCES this.tamanio sera igual a lo que nos pasen en el parametro tamanio.  
}

/*
De esta manera en la propiedad this.super que hemos generado hacemos la invocacion del constructor Animales2 dento de mi funcio contructora perro, 
pero donde realmente haremos la harencia sera al momento de hacer que el prototipo de perro sea una instancia de la funcion constructora animal.

Ahora muy importante aqui estariamos cometiendo un error de que cada vez que generemos una nueva instancia de la funcion constructora perro 
estariamos generando una propiedad this.super(en donde estamos copiando las caracteristicas de la funcion constructora de la cual nos estamos 
basando que es la funcion constructora Animales2), donde copiaria y clonaria el prototipo Animales2, digamos que esto pasaria de igual forma 
cuando creabamos la funcion constructora animal, con sus metodos al interior de la funcion constructora.

Entonces lo que hay que hacer es asignar al prototipo de perro que sea una instancia de Animales2, para asi poder realizar la herencia,
lo haremos de la sigueinte forma: */

//*En esta linea se esta realizando la herencia, perro esta heredando las caracteristicas de animal.
Perro.prototype = new Animales2(); //Aqui no tendremos que especificar los parametros nombre y genero, por que eso ya lo estamos realizando 
                                   //dentro de el constructor perro.

/*
Hay que tener en cuenta que en las clases(tras banbalinas en los prototipos) existe un metodo Constuctor con el que trabajaremos mas adelante, 
entonces de igual forma internamente nosotros podriamos generarle su propio constructor a la funcion constructora perro. Lo hariamos de la 
sigueinte forma*/

Perro.prototype.constructor = Perro; /*Con esto, al igualar el metodo contructor del prototipo Perro, al mismo constructor perro, se podra jalar
                                       todas las caracteristicas de su prototipo padre, que en este caso seria Animales2.
                                       
Ahora otra cosa importante, una de las caracteristicas en la programacion orientada a objetos es que cuando una clase hija, hereda los metodos 
de una clase padre, aqui hablando de los prototipos, eso aplicara exactamente igual, es decir ya Perro al ser una funcion constructora que hereda
las caracteristicas de Animales2, tambien puede utilizar los metodos de Animales2, como en este caso es el metodo(Accion).

Tambien es claro decir, que se puede hacer una sobreescipcion de los metodos de la funcion constructora padre(Animales2). Para sobreescribir 
el metodo accion hariamos:
*/

//*Sobreescritura de metodos del prototipo padre en el hijo(sobrrescribir el metodo accion que es de Animales2 con la F. Constructora Perro).

Perro.prototype.accion = function(){
    console.log('Se sobre escribio, el metodo accion') //Al ejecutar antes el metodo accion nos daba:'soy un animal de nombre skipe y soy macho'. 
}                                                      //Ahora con la sobreescritura no ejecuta:'Se sobree escribio, el metodo accion'
                                                     
/*
Ahora vamos a crear un nuevo metodo con los parametros que heredamos de la funcion constructora Animales2, para el prototipo de la funcion 
constructora Perro y lo ejecutaremos:
*/

Perro.prototype.nuevaAccion = function(){
    console.log(`Soy un perro me llamo ${this.nombre}, soy ${this.genero}, y soy de tamaño ${this.tamanio}`)
}

//*Creando una nueva instancia para darle argumentos a los parametros de la funcion constructora Perro.
const nuevaSentencia = new Perro('Junior', 'Macho', 'mediano') /* Como a perro le agregamos un nuevo parametro(tamanio), entonces le pasamos como
                                                                argumento a ese parametro 'mediano', que es el tamaño que tendra como caracteristica
                                                                nuestra nueva instancia*/

nuevaSentencia.accion() //SI ejecutamos este metodo nos mostrara: 'Se sobree escribio, el metodo accion'
nuevaSentencia.nuevaAccion () //Si ejecutamos este metodo nos mostrara: 'Soy un perro me llamo Skype, soy macho, y soy de tamaño mediano'




//*Al ejecutar en el console.log la sentencia nuevaSentencia y al compararla con la sentencia Doc lo que nos aparecera sera lo siguiente:
/*
1. La sentencia Doc basada en la funcion constructora Animales2 nos mostrara por consola:

Animales2 {nombre: 'rocky', genero: 'macho'}
    genero: "macho"                    --> Aca en el constructor animal tenemos el nombre y su genero
    nombre: "rocky"
    [[Prototype]]: Object              --> El prototipo de animal es el prototipo primitivo de JavaScript Object.
    accion: ƒ ()
    constructor: ƒ Animal(nombre, genero)
    [[Prototype]]: Object




    
2. La sentenia nuevaSentencia basada en la funcion constructora Perro, nos mostrara por consola:

Perro {nombre: 'Skype', genero: 'macho', tamanio: 'mediano', super: ƒ}
    genero: "macho"                                         
    nombre: "Skype"
    super: ƒ Animales2(nombre, genero) --> Tiene una propiedad super que es la que esta invocando (el constructor animales2) las caracteristicas 
                                           atraves de la herencia prototipica, de su funcion constructora padre que es Animales2.
    tamanio: "mediano"                 --> Podemos ver que tenemos las propiedades, genero nombre, tamanio.
    [[Prototype]]: Animales2           --> Podemos ver que a diferencia de Animales2 que su prototipo era el object primitivo de javascript, 
                                           podemos ver que en la funcion constructora Perro el prototipo de esta, es la funcion constructora 
                                           que hereda, es decir su prototipo es animales2. Al abrir en consola Animales2 podemos ver:
    
    accion: ƒ ()                       --> Podemos ver la el metodo que sobreescribimos con la funcion constructora Perro
    constructor: ƒ Perro(nombre, genero, tamanio) -->Podemos ver el constructor que igualamos a perro, para obtener las caracteristicas de Animales2
    genero: undefined                  --> Podemos ver nombre y genero, nos aparecen como undefined, por que se han sobreescrito y estan en el 
    nombre: undefined                      elemento hijo que es el constructor Perro.
    nuevaAccion: ƒ ()                  --> Podemos ver el metodo que creamos para el prototipo de la funcion constructora Perro.
    [[Prototype]]: Object              --> Al finalizar el prototipo del constructor Animales2, es el objeto primitivo Object.

//*De esta manera podemos visualizar y analizar toda la cadena prototipica y la herencia de como va funcionando.

*/