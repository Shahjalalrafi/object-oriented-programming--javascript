class Animal {
    static location = 'shundorban'
    look = 'nice'
    constructor(name, speed) {
        this.name = name,
        this.speed = speed
    }

    static compare(animal1, animal2) {
        if(animal1.speed > animal2.speed) {
            return `${animal1.name} is faster`
        }
        return `${animal2.name} is faster`
    }
}

const cat = new Animal('cat', 200)
const bog = new Animal('dog', 100)

console.log(Animal.location)
console.log(cat.look)

console.log(Animal.compare(cat, bog))
