// class Objetos {
//     constructor(name, edad){
//         this.name = name,
//         this.edad = edad
//     }
//     x(){
//         return `Mi nombre es ${this.name} y tengo ${this.edad} años`
//     }
// }

// const op1 =  new Objetos('juan', 20);

// console.log(op1.x())



function hola(name = 'juan', apee = '20'){
 console.log(`Hola me llamo ${name} y tengo ${apee}`)
   
}


hola(undefined, 23);
