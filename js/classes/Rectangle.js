// Vous mettrez ici le code de la classe Rectangle

class Rectangle {

    #length;
    #width;

    constructor(length, width) {
        this.#length = length
        this.#width = width
    }

    perimeter() {
        return (this.#length + this.#width) * 2;
    }

    area() {
        return (this.#length * this.#width);
    }

    isSquare() {
        if (this.#length = this.#width) {
            return true
        } else {
            return false;
        }
    }
}

