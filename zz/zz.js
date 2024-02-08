'use strict'

class Vehicle {
//estado
    constructor(marca,precio,color) {
      this.marca = marca;
      this.precio = precio;
      this.color = color;
    }
//comportamiento
    girar(){
        alert(`${this.marca} esta girando`)
    }
    frenar(){
    alert(`${this.marca} esta frenado`)
}
}
//instanciar
let vehicle = new Vehicle('Toyota',100000,'Azul');
vehicle.girar();
vehicle.frenar();
