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
