//* PROTOTIPOS

/*
Como nota inicial, la POO de JavaScript se encuentra basada en prototipos y no en clases. Los prototipos son un conjunto de normas 
para integrar Programación Orientada a Objetos en JavaScript. 
Un objeto en JavaScript tiene otro objeto, llamado prototype (prototipo, en español). Cuando pedimos a un objeto una propiedad que no tiene, 
la busca en su prototipo. Así, un prototipo es otro objeto que se utiliza como una fuente de propiedades alternativa.

Prototype es una propiedad de Object, -el objeto del que se derivan todos los demás objetos-, y esta propiedad es, a su vez, un objeto. 
Por tanto, el prototipo último de un objeto es Object.prototype. Este prototipo padre tiene métodos que comparten todos los objetos.

Javascript es un lenguaje mutiparadigma esto significa que podemos utilizar diferentes paradigmas de programacion, por lo tanto podemos 
utilizar la programacion funcional, la POO, este es el paradigama mas utilizado en los lenguajes de programacion, y una caracteristica muy partcular de
javascript es que la programacion orientacion a objetos en el lenguaje de javascript es muy diferente a otros lenguajes de programacion
basados en clases, como C, JAVA etc.  Apartir del año 2015, del estandar ECMAScript ya tenemos clases sin embargo las clases en javascript
no son mas que una azucar sintactica, osea, una manera mas facil que nos provee ahora el lenguaje, para poder realizar la programacion 
basada en prototipos, es decir aunque ya tenemos clases en javascript, realmente esas clases el compilador del lenguaje convierte esas clases
en funciones prototipicas, entonces es muy importante entender lo que son los prototipos en JAVASCRIPT.

Ahora antes de comenzar a hablar de los porototipos es muy importante entender que en porgramacion orientada a objetos (POO),hay cuatro conceptos
muy importantes que debemos de entender:

1. Las clases: Una clase es un MODELO A SEGUIR, es decir es algo que nos sirve como referencia para de ahi basarnos en ellas y poder generar
instancias.
2. Los Objetos: Un objeto es una instancia  de una clase. Es decir es una copia de ese modelo (CLASE). Los objetos tendran 2 facultades 
por asi decirlos, estos tendran:
                            -3 Atributos: Un atributo es una caracteristica o propiedad del objeto. Los atributos son variables dentro de un objeto.
                            -4 Metodos: Los metodos son las acciones que un obeto puede realizar. Los metodos no son mas que funciones dentro de
                                       un objeto.
                                
Es importante entender que aunque en javascript ya tenemos clases apartir del año 2015, es solo una forma de simplificarnos la escritura de los
prototipos, javascript es un lenguaje orientado a objetos pero basado en PROTOTIPOS, no en CLASES.
Entonces aunque ya tenemos las clases, cuando nosotros escribimos una clase en javascript, tras banbalinas lo que hace el compilador de javascript
(Si estamos hablando en los navegadores es el motor del navegador, si estamos hablando del lado del servidor es NODE JS), lo que hace es 
transformar esa clase que nosotros hemos escrito a una funcion Prototipal. Por eso es muy importante entender lo que son los prototipos en 
JAVASCRIPT.

Una manera sencilla de definir lo que es un prototipo en JAVASCRIPT, es que es un mecanismo por el cual un objeto puede heredar de un 
objeto padre atributos y metodos. De hecho la HERENCIA tambien en JAVASCRIPT se da mendiante la cadena de prototipos, es decir que hace una copia
de el prototipo en el cual esta basado. 

Ahora por ejemplo en clases anteriores cuando explicabamos los objetos, podriamos estructurarlo con atributos y metodos:
*/

const animal = {
    nombre: 'skype',
    accion(){
        return 'Esta comiendo'
    }
} /*--> SI nosotros llevamos a la consola este obejto, nos mostrara en consola el __proto__ que esta asignado a su vez al objeto raiz que es el 
Object, esto es por que el prototipo mas primitivo, mas fundamental que tiene javascript es el prototipo Object, es decir un objeto. Ese sera
el prototipo del objeto literal que hemos creado anteiormente.


--> Ahora imaginemos que queremos realizar otro objeto con las mismas propiedades del objeto creado anterioremente ya que por ejemplo tomamos como 
referencia a el objeto ANIMAL creado para crear uno nuevo con las mismas propiedades(animal2), para hacer esto tendriamos
que copiar nuevamente el objeto anterior con sus propiedades:
*/

const animal2 = {
    nombre: 'rocky',
    accion(){
        return 'Esta durmiendo'
    }
}

/*
Ahora como vimos para poder generar un objeto basado en el primer objeto, tuvimos que copiar y pegar el codigo debido a que son similares, 
esto no es FUNCIONAL, entonces para eso en la programacion orientada a objetos tenemos las clases. Las CLASES es un modelo a seguir del cual 
podemos generar varios objetos, este tema lo veremos mas adelante.

Entonces para solucionar esta ausencia de funcionaidad nosotros en JavaScritpt, podriamos generar un prototipo del cual nos basemos para
estar creando n cantidad de objetos similares.


Lo que haremos sera crearnos una funcion, a esta funcion se les suele llamar FUNCION CONSTRUCTORA, por que como su nombre lo dice la construiremos
una sola vez y apartir de ella vamos a generar nuevas instancias(nuevos OBJETOS), osea nuevos objetos que sean de este tipo de funcion 
constructora. De hecho una funcion en si genera un prototipo vacio.


***Ahora es muy importante tener en cuenta que como trabajaremos con una funcion constructora de un prototipo, tendremos que escribirlas de la 
misma forma que las clases, utilizando la tecnica del UpperCamelCase.

-->Las clases que es un tema que veremos mas adelante, tienen un metodo especial llamado constructor, que es el que se ejecuta cuando se genera 
una nueva instancia de ese objeto, pero como aun no vamos a trabajar con clases, si no que trabajaremos simplemente con una funcion 
constructora, de la cual vamos a crear un prototipo, aqui si yo necesito pasar porpiedades a la funcion constructora, pues hay que pasarselas como
parametos de la misma funcion, por ejemplo:
*/

//*Creamos una funcion Animales, y le pasamos como parametros (animal, genero), y entonces utilizaremos la palabra reservada THIS, que hara 
//*referendia a los parametros de la misma funcion.
function Animales(nombre, genero) {
    //Atributos
    this.nombre = nombre;         // Entonces (this.nombre) va a ser igual a lo que el usuario, nos pase como argumento en el parametro (nombre), 
    this.genero = genero;         // y (this.genero) va a ser igual a lo que el usuario nos pase como argumento en el parametro (genero). 
    //Metodos                            
    this.accion = function (){    // Crearemos ademas un metodo llamado (accion), y para que forme parte de este constructor, debemos utilizar el
                                  // this. Eso es algo muy importante al trabajar con funciones constructoras en JavaScript por que tanto los atributos
                                  // como los metodos, tienen que colgar de el objeto THIS. Ahora la sintaxis del metodo creado en los objetos 
                                  // literales,no aplica para funciones constructoras, entonces la sitaxis cambia, this.accion debe ser igual 
    }                             // a una funcion.
}
/*La ventaje de tener esta funcion constructora, donde tenemos dos atributos y un metodo, nos simplifica el hecho de tener que estar copiando
la estructura de un objeto literal e irle cambiando los valores. La pregunta es como podriamos nosotros volver a generar esas instancias 
sin tener que copiar y pegar como lo haciamos anteriormente con los objetos literales en donde creabamos animal y animal2. 

Esto lo podemos realizar de la siguiente manera: Vamos a crear una variable que se llame nombre1 y la asignaremos a NEW, aqui es donde entra 
la palabra reservada NEW que nos va a permitir crear una nueva instancia, es decir un nuevo objeto del tipo que le especfiquemos, por ejemplo
podremos crear un STRING(new String), un array (new Array), pero en este caso lo que haremos sera crear una nueva instancia basada en la funcion
constructora (Animales) y Animales recibe 2 parametros (nombre y genero).
*/

const nombre1 = new Animales('Rocky', 'Macho') //-->En este caso le pasaremos como argumentos a los parametros (nombre, genero), el nombre de
                                                //rocky y el genero macho. 

const nombre2 = new Animales('Perla', 'Hembra') // --> si queremos crear una nueva instancia, pues creamos una nueva variable en este caso nombre2
                                                // que pasara como argumentos de (nombre, genero) el nombre de perla y el genero hembra.

//* Si mandamos a la consola las variables creadas, ya sea nombre1 o nombre2, nos ejecutara lo siguiente:         

console.log(nombre1) /*-->  Animales {
                                nombre: 'Rocky',
                                genero: 'Macho',
                                accion: ƒ (),
                                __proto__: { constructor: ƒ Animales() }
                            }*/

console.log(nombre2) /*-->  Animales {
                                nombre: 'perla',
                                genero: 'hembra',
                                accion: ƒ (),
                                __proto__: { constructor: ƒ Animales() }
                            }*/

/*
Si vamos a necesitar varias instancias de un objeto que estemos creando nos conviene utiliar una funcion constructora. 

Ahora algo muy importante, en la funcion constructora tenemos un metodo, en este caso lo pusimos anteriormente para aclarar algo, y es que a medida 
que vayamos creando mas instancias, este metodo se aplicara en las instancias que creemos, eso es un problema, por que si por ejemplo en vez de 
crear mas de un metodo, estos se aplicaran a todas las instancias que creemos, osea si creamos 3 metodos, si o si a cada instancia creada se le
asignaran los 3 metodos creados de forma predeterminada, eso es un gran problema por que consumira muchos recursos en memoria de forma innecesaria,
ahora mismo no tenemos un problema porque solo tenemos un metodo que se le asignaran a las ya 2 instancias creadas por lo tal no hay porblema
alguno, pero no es conveniente. 

Por ejemplo cada instancia comparten atributos como nombre y genero, pero el metodo en muchas ocasiones debera 
ser independiente por cada instancia que creemos. Estos metodos los podremos reutilizar de una manera mas eficiente.

Una mejora a lo anterior sera asignarle al prototipo de la funcion construtora (Animal), el metodo accion afuera de la funcion constructora, osea 
sacamos de la funcion constructora el metodo Accion, y afuera de ella se lo asignamos al prototipo de la funcion constructora. Esto es para evitar
que en dado caso de tener mas de un metodo no se repliquen en todas las instancias creadas, ya que cada instancia tendra valores diferentes 
por ende en caso de crear varias sentencias y queramos asignarle un metodo, el metodo sea independiente por sentencia creada.*/

//* Cuando nosotros creamos funciones constructoras de las cuales pretendemos crear portotipos para JavaScript en la programacion orientada 
//* a objetos(POO), lo ideal es que nuestras funciones constructoras solamente tengan los atributos, y los metodos los saquemos de la funcion
//* para asginarselos al prototipo la funcion constructora ya creada de manera independiente, para hacer esto, lo hacemos de la siguiente forma:



function Animales2(nombre, genero){
    this.nombre = nombre
    this.genero = genero
}

/*Para asignar el metodo al prototipo, primero mandamos a llamar el nombre de la funcion constructora, en cuestion la nuestra es (Animales2),
seguida a ella (.prototype) y luego (.nombre del metodo), quedaria: -->(Animales2.prototype.accion)*/

//*Metodo agregado al prototipo de la funcion constructora (Animales2).

Animales2.prototype.accion = function(){
    console.log(`soy un animal de nombre ${this.nombre} y soy ${this.genero}`)
}

/*
Para utilizar este metodo que esta asignado al prototipo tendremos que crear la variable o instancia que inicializamos con la palabra reservada
new a la funcion constructora Animales2, que al pasarle como parametros los argumentos que queramos podremos utilizarlos en el metodo con el THIS
THIS.NOMBRE hara refrencia al nombre que le pasamos como argumento al parametro nombre en la funcion constructora, y THIS.GENERO que hara referencia
al parametro que le pasamos como argumento en la funcion constructora, de esta manera al utilizar this en el metodo, podremos llamar a estos 
atributos alojados en la funcion contructora. Y para llamar al metodo y su contenido, lo llamaremos con el nombre de la variable(sentencia), 
y el nombre de el metodo (accion), que esta aginado al prototipo (Animales2). De esta manera se asignaran los datos de manera individual
y no se duplicaran a otras instancias creadas. Esto se hara de la sigueinte forma: */

//*Creacion de las instancias
const dog = new Animales2('skype', 'macho') //Dog es una instancia creada como copia del prototipo Animales2.
const cat = new Animales2('roma', 'hembra') //Cat es una instancia creada como copia del prototipo Animales2.

//*LLamada a los metodos con el nombre de las instancias creadas
dog.accion() //--> De esta manera llamamos al metodo que esta asignado al prototipo, para darle caracteristicas independientes a la isntancia
             //    dog, el resultado que tendremos al llamar al metodo sera: 'Soy un animal de nombre skype y soy macho'

cat.accion() //--> De esta manera llamamos al metodo que esta asignado al prototipo, para darle caracteristicas independientes a la isntancia
             //    cat, el resultado que tendremos al llamar al metodo sera: 'Soy un animal de nombre roma y soy hembra'


/*Con lo anterior logramos una mejora importante a nivel de rendimiento y memoria. 
Esos son los prototipos en JavaScript, esta es la base de la programacion orientada a objetos en JavaScript, por eso al venir de otros lenguajes 
de programacion en donde la POO se basan en clases, es importante entender que aunque ya hay clases gramaticalmente en JavaScript, realmente
la programacion orientada a objetos en JavaScript sigue funcionando basado en prototipos.

Hay otra caracteristica muy importante como es la HERENCIA que tambien veremos mas adelante, es una caracteristica muy importante en la 
programacion oriendata a objetos. Y al ser JavaScript su prormacion orientada a objetos basado en prototipos, pues la herencia tambien 
tiene sus ciertas particularidades.

Entonces mas adelante veremos como se genera la herencia prototipica, en la POO en JS.

*/







