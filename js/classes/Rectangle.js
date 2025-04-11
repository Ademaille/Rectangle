// Vous mettrez ici le code de la classe Rectangle

class Rectangle {

    #length;
    #width;

    constructor(val1 = 1, val2 = 1) {

        if (val1 > val2) {

            this.#length = val1;
            this.#width = val2;

        } else {

            this.#length = val2;
            this.#width = val1;
        }
    }

    get length() {
        this.#length;
    }

    set length(length) {
        if (length < this.#width)
            throw new Error("La longueur doit être plus grande que la largeur")
    }

    perimeter() {
        return (this.#length + this.#width) * 2;
    }

    area() {
        return this.#length * this.#width
    }

    isSquare() {

        return this.#length === this.#width;
    }
}

