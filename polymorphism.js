class Circle {
    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius)
    }
}

class Rectangel {
    constructor(width, height) {
        this.height = height,
        this.width = width
    }

    area() {
        return this.height * this.width
    }
}


class Triangle {
    constructor(base, height) {
        this.base = base,
        this.height = height
    }

    area() {
        return this.base * this.height /2
    }
}

const shapes = [new Circle(10), new Triangle(10, 20), new Rectangel(5, 5)]

for(let i = 0; i< shapes.length; i++) {
    const shape = shapes[i]
    console.log(shape.area())
}