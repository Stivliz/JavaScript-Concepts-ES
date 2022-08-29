/*function factorial(numero) {
    if (numero == 0) {
    return;
    } else {
    return factorial(numero - 1) * numero;
    }
    }
console.log(factrial(8))


let r = []
 for(let i in personaje.propiedades){
    console.log( personaje.propiedades[i].vida);
    
 }

/*
var arr1 = [1,2,3,4];
var r = [];

for(i = 0; i < arr1.length; i++){
  r[i] =arr1[2] + arr1[3];
}

console.log(r); */
/*
const objetos = {
  name1: 'josue',
  apellido: 'guzman',
  años: 20,
  dato: {
    nombre2: 'juan',
    apellido2: 'tovar',
    años: 20,
    dato2:{
      nomre3:'pablo',
      apellido3:'duran',
      arreglo: [1,2,3,[3,4['joseph']]],
      años: 22, 
      dato3: {
        nombre4:'danna',
        apellido4: 'giraldo',
        años: 21,
        dato4: {
          informacion: false
        }
      }
    },
    fabricacion:{
      pais: 'china'
    }
  }
}

const{dato:{dato2:{dato3:{nombre4, apellido4}}} } = objetos;
console.log(nombre4, apellido4);
/*
console.log(Object.values(objetos)); //Me da los valores de las llaves del objeto.
console.log(Object.keys(objetos)); // Me da las llaves de el objeto, es decir, los nombres de las propiedades y metodos.
console.log(Object.entries(objetos)); //Me da las llaves y los valores de el objeto.
console.log(Object.getOwnPropertyNames(objetos)); //Me da las llaves de el objeto, es decir, los nombres de las propiedades y metodos.
console.log(Object.getOwnPropertyDescriptor(objetos, 'name1')); //Me da la llave del atributo nombre y su description.
console.log(Object.getOwnPropertyDescriptors(objetos)); //Me da las llaves de el objeto y la description de los atriutos y metodos.
console.log(objetos.hasOwnProperty('name1')); //Esta propiedad busca y me permite saber si el objeto tiene la propiedad nombre por ejemplo.

*/


/*

function Person (){
  "use strict";
  this.name = "",
  this.lastname = "",
  this.age = 0;
}

const usuario = new Person();
usuario.name = 'juan'
usuario.lastname = 'guzman'
usuario.age = 30
console.log(usuario);

const usuario2 = new Person();
usuario2.name = 'catalina'
usuario2.lastname = 'rodriguez'
usuario2.age = 20
console.log(usuario2);

const usuario3 = new Person();
usuario3.name = 'Luis'
usuario3.lastname = 'garrido'
usuario3.age = 31
console.log(usuario3);

const usuario4 = new Person();
usuario4.name = 'gabriela'
usuario4.lastname = 'gonzalez'
usuario4.age = 21
console.log(usuario4);
*/

/*
function Marca (nombre, año, valor, color){
  this.nombre = nombre
  this.año = año
  this.valor = valor
  this.color = color
}
Marca.prototype.sonar = function(){
  return `El carro de marca ${this.nombre}, cuesta al rededor de ${this.valor}`
}
Marca.prototype.time = function(){
  return `El carro de marca ${this.nombre} es modelo ${this.año}`
}

Marca.prototype.estilo = function(){
  return `El carro de marca ${this.nombre} es de color ${this.color}`
}

const dato1 = new Marca('Chevrolet', 2015, 3000, 'azul');
const dato2 = new Marca('Honda', 2022, 10000, 'rojo');
const dato3 = new Marca('Hydra', 2021, 300000, 'negro');


console.log(dato1);
console.log(dato1.sonar());
console.log(dato1.time());
console.log(dato1.estilo());


console.log(dato2);
console.log(dato2.sonar());
console.log(dato2.time());
console.log(dato2.estilo());

console.log(dato3);
console.log(dato3.sonar());
console.log(dato3.time());
console.log(dato3.estilo());
*/


/*

function Genero(rock, metal, pop, electro){
  this.rock = rock
  this.metal = metal
  this.pop = pop
  this.electro = electro
}

const gusto1 = new Genero('Estranged', 'Shop suey', 'No pasa nada', 'Infinity')
const gusto2 = new Genero('A  nother in the brack in the wall', 'nero forte', 'El diablo', 'mesmerize')
const gusto3 = new Genero('November rain', 'lonely day', 'los malaventurados no lloran', 'beat of my heart');
const gusto4 = new Genero('Something in the way', ' plop', 'xlov', 'hearts');

Genero.prototype.Op1 = function(){
  return `Mi cancion de rock favorita es ${this.rock} e ${this.electro}`
}

Genero.prototype.Op2 = function(){
  return `Mi cancion de metal favorita es ${this.metal} y de pop es ${this.pop}`
}

Genero.prototype.Op3 = function(){
  return `Mi cancion de electronica favorita es ${this.electro} y de rock es ${this.rock}`
}

Genero.prototype.Op4 = function(){
  return `Mi cancion favorita de metal es ${this.pop} y de rock es ${this.rock}`
}

console.log(gusto1.Op1())
console.log(gusto2.Op2())
console.log(gusto3.Op3())
console.log(gusto4.Op4())

*/

/*
class Person{
  constructor(name, lastname, edad){
    this.name = name
    this.lastname = lastname
    this.edad = edad
  }
  musica(){
    return `Su nombre es ${this.name} ${this.lastname} tienen ${this.edad} años, fue mi novia y yo le gustaba`
  }
}

const Op1 = new Person('Aljenadra', 'ruiz', 22);
const Op2 = new Person('Angie', 'guzman', 20);

console.log(Op1.musica());
console.log(Op2.musica());

*/

/*  
class colegio{
  constructor(name, students, jornada){
    this.name = name
    this.students = students
    this.jornada = jornada
  }
  students1(){
    return `El colegio ${this.name} tiene estudiantes de ${this.students} en la jornada de la ${this.jornada}`
  }
}



const Op1 = new colegio('JER', 'Primaria', 'Mañana');
const Op2 = new colegio('USCO', 'Secundaria', 'Tarde');
const Op3 = new colegio('UNA', 'Preparatoria', 'Noche');



console.log(Op1.students1());
console.log(Op2.students1());
console.log(Op3.students1());
//
*/

//'use strict';
const package = {
  name1: 'josue',
  apellido: 'guzman',
  años: 20,
}



package.name1 = 'juan'
console.log(package.name1);

/*

const {name1:name, apellido: apellido1, años: años1} = objetos;
console.log(name,apellido1, años1 )*/


class Colegio {
  constructor(nombre, song, number){
    this.nombre =  nombre,
    this.song = song,
    this.number = number
  }
  free(){
    return `Mi nombre es ${this.nombre} escucho ${this.song} creada en el año ${this.number}`
  }
}

const op1 = new Colegio('Max', 'bird the sea', '2013');

console.log(op1.free());