
/*
const datosPersona = {

    nombre: 'Juan',
    apellido: 'Rodriguez',
    edad: 23,
    casado: false,
    profesion: function (empleo, salario){
        console.log(`El profesional trabaja en ${empleo} y tiene un salario de ${salario}`);
    }
    }
    console.log(datosPersona.nombre);
    datosPersona.profesion('Programacion', 1_200_000);



const arreglo = [1, 2, 3, 4, [5, 6, 7, [8, 9, 10]]];

console.log(arreglo[4][3][2]);

*/


/*

const ex = ['a','A','t', 'g']

ex.splice(0,2, 'angie', 'alejandra');

console.log(ex);





const datoInfo = ['attg', 'dslb', 2013, 2015, 2019, 'DsyApsyps09']

datoInfo.forEach((element, index, array) =>{

    console.log(`El primer elemento: ${element}, esta en la posicion: ${index}, del array: [${array}]`);
});


const numeros = [1,2,3,4,5,6,7];
numeros.splice(4, 2, 'Hola'); //Aqui es donde se vivide el elemento
console.log(numeros);
//console.log(numeros.length);


/*
const x = ['a', 'b', 'c', 'd', 'e', 'f'];
x.splice(, 2, 'angie');
console.log(x);
*/

/*
const y = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(y.splice(1, 3)); // este metodo lo que hace es que en el primer numero estara el inicio y este sera la posicion
//del primer elemento y el segundo sera el final donde sera el limite de elementos que este tomara.
//Por ejemplo, en el ejemplo anterior, el primer numero seria 1 y el segundo sera 3, esto significa que tomara los elementos desde la posicion 1,
//hasta los elementos de la posicion 3. Osea : b,c,d.
*/
/*

const objeto ={
    nombre: 'Ana',
    apellido: 'Gabriela',
    ocupacion: 'Mantenida',
    relacion: 'Divorciada',
    edad: '20',
    estudios: 'Economia',
    hijos: false,
    datos: [2019, 2020, 2021, 2022],
    saludar: function(){
        console.log(`Hola soy ${this.nombre} ${this.apellido}`); //La propiedad this hace refrencia a las propiedades que estan en el
                                                                // objeto global en este caso (objeto) y this llama a nombre y apellido
    }
    /*
     saludar:(() =>{
        console.log(`Hola soy ${this.nombre} ${this.apellido}`);
    })
    */


/*

let edad = 101;

if(edad >= 0 && edad < 10){
    console.log('Es un niño');
}else if(edad >= 10 && edad < 18){
    console.log('Es un dolecente');
}else if(edad >= 18 && edad < 30){
    console.log('Es mayor de edad');
}else if(edad >= 30 && edad < 40){
    console.log('Es maduro');
}else if(edad >= 40 && edad <= 100){
    console.log('Es adulto');
}else{
    console.log('Ya ha fallecio');
}


let cedulaDeIdentidad = 10;

let mayorEdad = (cedulaDeIdentidad >= 18) ? 'Es mayor de edad' : 'Es menor de edad';
console.log(mayorEdad);


let compra = 50;
let descuento = (compra >= 60) ? 'Habra descuento' : 'No habra descuento';
    console.log(descuento);


    switch (navegador) {
        case 'Edge':
          alert( "¡Tienes Edge!" );
          break;

        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
          alert( 'Esta bien, soportamos estos navegadores también' );
          break;

        default:
          alert( '¡Esperamos que esta página se vea bien!' );
      }
*/
/*

let navegador = 'chrome';

if(navegador === 'Edge'){
    console.log('¡Tienes Edge!');
}else if(navegador === 'chrome'){
    console.log('tienes chrome');
}else if(navegador === 'firefox'){
    console.log('tienes firefox');
}else if(navegador === 'safari'){
    console.log('tienes safari');
}else if(navegador === 'opera'){
    console.log('tienes opera');
}else{
    console.log('no soportamos este navegador');
}

*/
/*
let mes = 10;

switch(mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Mayo');
        break;
    case 6:
        console.log('Junio');
        break;
    case 7:
        console.log('Julio');
        break;
    case 8:
        console.log('Agosto');
        break;
    case 9:
        console.log('Septiembre');
        break;
    case 10:
        console.log('Octubre');
        break;
    case 11:
        console.log('Noviembre');
        break;
    case 12:
        console.log('Diciembre');
        break;
    default:
        console.log('No es un mes valido');
}
*/

/*
let abecedario = 6;

switch(abecedario){
    case 1:
    console.log('a');
    break;

    case 2:
    console.log('e');
    break;

    case 3:
    console.log('i');
    break;

    case 4:
    console.log('o');
    break;

    case 5:
    console.log('u');
    break;

    default:
    console.log('no existe');
}


const co = {
    id: 1,
    nombre: 'Ana',
    apellido: 'Gabriela',
    edad: 20,
    estudios: 'Economia',
    saludar: function(){
        console.log(`Hola soy ${this.nombre} ${this.apellido}`);
    },
    arr: ['a', 'b', 'c', 'd', 'e', 'f'],
    obj: {
        ciudad: 'Medellin',
        pais: 'Colombia',
        continente: 'America',
        clima: 'Cálido'
    },
    abecedario: function(){
        let abecedario = 6;
        switch(abecedario){
            case 1:
            console.log('a');
            break;

            case 2:
            console.log('e');
            break;

            case 3:
            console.log('i');
            break;

            case 4:
            console.log('o');
            break;

            case 5:
            console.log('u');
            break;

            default:
            console.log('no existe');
        }
    },
    clima: function(){
        let ebullicion = 100;
        let temperatura = ( ebullicion >= 100) ? 'habra ebullicion' : 'no habra ebullicion';
        console.log(temperatura);
    }

}

co.saludar();
co.abecedario();
console.log(co.obj.clima);
console.log(co.arr[2]);
co.clima();

*/
/*
let x = 0;

do{
    console.log(x);
    x++;
}while(x < 10);
*/


/*
let valor = 0;

while(valor <= 10){
    console.log(valor);
    valor++;
}

do{
console.log(valor);
valor++;
}while(valor <= 10);
*/

/*
const datos ={
    nombre: "juan",
    Apellido: "Rodriguez",
    Edad: 23,
    Casado: false
}

for(const prop in datos){ //El metodo in nos permite recorrer la propiedad del objeto, en este caso el objeto es (datos).
    console.log(`Key: ${prop}, Value: ${datos.prop}`);

}


const x = [1, 2, 3, 4, [[5, 6, 7], [8, 9, 10]]];

for(const elementos of x){
 console.log(elementos);
}
*/
/*
const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach((element, index, array) => {
    console.log(element += 1, index, array);
});
*/

/*

const arr = [2,4,6,8,10,];

arr.forEach((element, index, array) => { //La estructura de este array utilizando el metodo forEach,
                                        //consta de la funcion esta no se pone literalmente sino que se pone en una funcion anonima.
                                        //osea parentesis y entre este parentesis se ponen los parametros que se van a utilizar en la funcion.
                                        //que seran 3 parametros.
                                        //-El primer parametro es el elemento que estamos recorriendo.
                                        //-El segundo parametro es el indice del elemento que estamos recorriendo.
                                        //-El tercer parametro es el array que estamos recorriendo.

        console.log(element,index, array); //Aqui ejecutaremos la funcion con los parametros de la funcion anonima.
                                                //E iran ordenamente en la consola asi como estan en la funcion,
                                                //primero el parametro element, segundo el indice y por ultimo el array.
});



*/

// while

//do while

//for

//for in

// for of



/*

try{

    console.log("Esto es una prueba de error"); //Aqui se ejecuta el TRY. Si dentro de estos corchetes hay algun error,
                                           //entonces se pasa y se ejecuta el catch como prueba de que hubo error.

}catch(error){  // Aqui se ejecutara el codigo que haya tenido el error en el TRY.

    console.log("Error: " + error); // Aqui se ejecuta el CATCH.

}finally{                // Aqui se ejecuta el bloque FINALLY. Este se ejecutara haya error o no.
    console.log("Esto es una prueba de finally");
}


try{
    let num1 = 25;
    if(isNaN(num1)){
    throw new error(`No se introdujo numero 1`);
    }
    console.log(num1 * num1);

}catch(error){

    console.log(`se ha producido un error: ${error}`);

}
*/



/*
let x = [2, 4, 6, 8, 10];

for(let i = 0; i < x.length; i++){
    if (i ===3){
        continue;
}
    console.log(x[i]);
}

*/


/*


const y = {
    nombre: 'Ana',
    apellido: 'Gabriela',
    edad: 20,
    casado: false,
    hijos: 0,
    mascotas: null,
    dni: '12345678',
    direccion: {
        calle: 'Calle falsa 123',
        piso: '1',
        depto: 'A',
        localidad: 'Medellin',
        provincia: 'Antioquia',
    }
}

const {nombre, apellido, edad, ...resto} = y;
//const {calle, piso, depto, localidad, provincia} = direccion;
console.log(nombre, apellido, edad, resto );

*/

/*
let nombre = 'ana';
let apellido = 'gabriela';

const dato = {

    nombre,
    apellido,
    edad: 20,
    saludar(){
        return  console.log('hola');
    }
}

console.log(dato.nombre, dato.apellido);
dato.saludar();
*/

/*
function datos (x,b, ...rest){
    let suma = x + b;

    rest.forEach((element) => {

        suma += element;

});
    return suma;

}

console.log(datos(1,2,));
console.log(datos(1,2,3));
console.log(datos(1,2,3,4));
console.log(datos(1,2,3,4,5));

*/
/*

const operacion = (d,s, ...o) => {
    let suma = d + s;

    o.forEach((element) => {

        suma += element;

});
    return suma;

}

console.log(operacion(1,2,));
console.log(operacion(1,2,3));
console.log(operacion(1,2,3,4));



const arr = [1,2,3,4,5];
const [...rest] = arr;
console.log(rest);
*/
/*
const array = [1,2,3,4,5];

array.forEach ((element, index, arr) => {
   console.log (`El numero ${element}, esta en la posicion: ${index}, del array: ${arr}`);

});



const datos = ['Ana Gonzalez', 'joseph castro', 'luis garrido' ]

datos.forEach((element, index, datos) => {
    console.log(`Su nombre es: ${element}, esta en la posicion: ${index}, dentro de los datos: ${datos}`);
});
*/


/*
const any = [

    { nombre: 'Ana', edad: 20 },
    { nombre: 'Luis', edad: 30 },
    { nombre: 'Maria', edad: 40 },

];
any.forEach((element, index) => { return console.log(element,index);});

const xo = any.filter((element) => { return element.edad > 20;});
console.log(xo);


const xo2 = any.map((element) => { return element.edad;});
console.log(xo2);

const xo3 = any.reduce((acumulador, element) => { return acumulador + element.edad;}, 0);
console.log(xo3);

const x5 = any.filter((element) => { return element.edad <= 30;});
console.log(x5);
*/

/*
const user = {
    a: true,
    b: true,
    c:true
}

/*
for(let it in user){
    console.log(it[user])
}


for(let it in user){
    console.log(user[it])
}
*/
/*
for(let it in user){
    console.log(user[it] = false)
}
*/
/*
const user2 = {

    usr:[
        {lista:false},
        {lista:false},
        {lista:false},
        {lista:false},
        {lista:false}
    ]
}

console.log(user2.usr[lista])

*/


// inicioApp()

//  function inicioApp(){
//     console.log('La Aplicacion esta iniciando...');
//     autenticacionApp();
//  }

// function autenticacionApp(a, b){
//    console.log('Se esta autenticando el usuario...')
//    verificacion('Nick', 'Smith')
//    return a * b
// }

// const x = autenticacionApp(2,5 )
// console.log(x);

//  function verificacion(name, lastname){
//      console.log(`El usuario ${name} ${lastname} ha sido verificado.`)
//  }




//      console.log("uno");
//      console.log("dos");
//      return "Los valores se retornaran hasta donde se encuentre la palabra reservada retunr";
//  }

//  let variable = unafuncionQueDevuelveValor();
//   console.log(variable);

// let total = 0;
// function compra(precio){
//     return total += precio //-->  total = total + precio
// }

// function descuento(total1){
//     return total1 / 1.15;
// }

// let total1 = compra(100)
//     total1 = compra(400)

// let totalPagar = descuento(total1)

// console.log(totalPagar)



// const reproducir = {
//     reproductor:function(id){
//         console.log(`Reproduciendo cancion con el id --> ${id}`)
//     },
//     pausar: function(){
//         console.log(`Pausando...`)
//     },
//     borrar: function(id){
//         console.log(`Borrando cancion numero --> ${id} `)
//     },
//     crearPlayList: function(name){
//         console.log(`Creando la Play List --> ${name}`)
//     },
//     reproPlayList: function(name){
//         console.log(`Reproduciendo la Play List --> ${name}`)
//     }
// }

// reproducir.reproductor(30)
// reproducir.pausar();
// reproducir.borrar(20);
// reproducir.crearPlayList('Rock and Roll');
// reproducir.reproPlayList('Rock and Roll');

// let total = 0;

// function compra (camisa, pantalon, medias, tenis){
//     return total = camisa + pantalon + medias + tenis;
// }

// const totalPrecio = compra(100, 200, 130, 300);
// console.log(totalPrecio);


// function iva(precio){
//     return precio *1.15;
// }
// const totalPagar=iva(totalPrecio)
// console.log(totalPagar);

// let total = 0;

// function pago(gym){
//     return total += gym;
// }

// const pagoMensual = pago(800000);
// console.log(`La mensaulidad sin iva es de: ${pagoMensual}.`);

// function pagoIva(pagoMensual){
//     return pagoMensual * 1.05;
// }

// const mensualidadTotal = pagoIva(pagoMensual)
// console.log(`La mensualidad total es de: ${mensualidadTotal}.`)

// const album = {

//     track1: function(song1){
//         console.log(`Se esta reproduciendo la cancion: ${song1}`)
//     },
//     track2: function(song2){
//         console.log(`Segunda en la lista esta la cancion: ${song2}`)

//     },
//     track3: function(song3){
//         console.log(`La cancion "${song3}" presenta problemas`)
//     }

// }

// album.track1('Civil War')
// album.track2('November Rain')
// album.track3('Estranged')

// album.borrar = function(Deleted, song3){
//     console.log(`se ha ${Deleted} la cancion: ${song3}`)
// }

// album.borrar('eliminado', 'Estranged');

// 2 manera de retornar un valor dentro de una funcion.
// function saludar(nombre){
//     return `Hola ${nombre}, bienvenido a Desarrollo Útil`
//  }

// // const resultado = saludar ( " Pablo " ) ;
// console.log(saludar('jose'))

// function calcular(suma){
//     return suma;
// }

// function suma (a,b){
//     return a + b;
// }


// const operacion = suma(2,3)

// const final = calcular(operacion);
// console.log(final);

/*A las funciones que son pasadas como argumentos de otras funciones se les conoce como callbacks */


    // const obtenerSaludo = function(nombre) {
    //     return `Hola ${nombre}, bienvenido a Desarrollo Útil.`;
    // };
  
    // const imprimirSaludo = function(mensaje) {
    //     console.log(mensaje);
    // };

    // const alertSaludo = function(mensaje) {
    //     alert(mensaje);
    // };

    // const saludar = function (obtener, imprimir) {
    //     const saludo = obtener('Pablo');
    //     imprimir(saludo);
    // };
    
    // saludar(obtenerSaludo, imprimirSaludo);
    // saludar(obtenerSaludo, alertSaludo);


    // const llamadaPolicial = function(numero){
    //     return `llame al numero ${numero}, para llamada a la policia`
    // }

    // const llamadaUrgente = function(primordial){
    //     alert(primordial)
    // }

    // const emergencia = function(opcion1, urgente){
    //     const telefono = opcion1(123)
    //     urgente(telefono);
    // }

    // emergencia(llamadaPolicial, llamadaUrgente)

    function map(f, a) {
        let result = []; // Crea un nuevo arreglo
        let i; // Declara una variable
        for (i = 0; i != a.length; i++)
          result[i] = f(a[i]);
        return result;
      }

    const f = function(x) {
        return x * x * x;
    }
    
    let numbers = [0, 1, 2, 5, 10];
    let cube = map(f,numbers);
    console.log(cube);