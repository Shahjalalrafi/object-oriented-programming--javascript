class Tiger {
    #speed = 200
    constructor(name) {
        this.name = name
        this.#speed = 220
    }

    run() {
        console.log(`i am ${this.name} and i run at ${this.#speed} mph`)
    }
}

const royal = new Tiger('chita')

royal.run()