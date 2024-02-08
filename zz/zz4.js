'use strict'

class Refrigerator{
    constructor() {
        this.items = []
        this.color = 'Red'
}
showInfo(){
    alert('Empty')
}
addMeal(item){
    this.items.push(item)
}
getItems(){
    return(this.items)
}
}
let refrigerator = new Refrigerator()
refrigerator.showInfo()
refrigerator.addMeal(prompt('Ingrese los alimentos:', 'Orange, Banana, Apple'))
alert(refrigerator.getItems())
