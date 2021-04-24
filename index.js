class Pendrive {
    constructor(name, color, price) {
        this.name = name,
        this.color = color,
        this.price = price
    }

    getColor() {
        return this.color
    }

    goForGrocery() {
        if(this.getColor) {
           this.getColor()
        }
        return 'i will buy'
    }
}

const adidasPendrive = new Pendrive('adidas', 'red', 200)
console.log(adidasPendrive.goForGrocery())