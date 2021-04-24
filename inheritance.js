class Vehicles {
    constructor(color, tier, seat) {
        this.color = color,
        this.tier = tier,
        this.seat = seat
    }
}

class Bus extends Vehicles {
    constructor(color, tier, seat, name) {
        super(color, tier, seat)
        this.name = name
    }

}

const busDesc = new Bus('black', '4', '23','S.Alom')

console.log(busDesc)

// function createIncrement() {
//     let count = 0
//     function increment() {
//         return count++
//     }

//     let message = `couont is ${count}`

//     function log() {
//         console.log(message)
//     }

//     return [increment, log]
// }

// const [increment, log] = createIncrement()

// console.log(increment())
// // console.log(increment())
// // console.log(increment())
// log()