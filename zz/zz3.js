'use strict'

class Product {
    //estado
        constructor(description,price,stock) {
          this.description = description;
          this.price = price;
          this.stock = stock;
//comportamiento          
    }
    showInfo(){
alert(`El articulo es: ${this.description} 
El precio es: ${this.price}$
Se encuentran en stock: ${this.stock} unidades`)
    }

    minusStock(minStock){
        this.stock = minStock;
alert(`El articulo es: ${this.description} 
El precio es: ${this.price}$
Se encuentran en stock: ${minStock} unidades`)
    }

    incrementStock(inStock){
        this.stock = inStock
alert(`El articulo es: ${this.description} 
El precio es: ${this.price}$
El stock actualizado es: ${inStock} unidades`)
    }

    updatePrice(newPrice){
        this.price = newPrice
alert(`El articulo es: ${this.description} 
El precio actualizado es: ${newPrice}$
Se encuenta en stock: ${this.stock} unidades`)
    }

}
let product = new Product(prompt('Ingrese el producto'),prompt('Ingrese el precio'),prompt('Ingrese el stock'));
product.showInfo()
product.minusStock(prompt('Disminuya el stock:'))
product.incrementStock(prompt('Incremente el stock:'))
product.updatePrice(prompt('Actualice el precio:'))