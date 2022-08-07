

function crearPrototipo(animal, genero) {
    this.animal = animal;
    this.genero = genero;   
}

crearPrototipo.prototype.nombre = function() {
    console.log(`Soy un ${this.animal} y soy ${this.genero}`);
}

const perro = new crearPrototipo('perro', 'macho'); 
      perra = new crearPrototipo('perra', 'hembra');

console.log(perro);
console.log(perra);
perro.nombre();
perra.nombre();