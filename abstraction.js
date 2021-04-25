class Noice {
    constructor() {

    }

    talk() {
        throw new Error('you have to write something')
    }
}


class Cat extends Noice {

    talks() {
        console.log('mew mew')
    }
}

const myCat = new Cat()

myCat.talks()