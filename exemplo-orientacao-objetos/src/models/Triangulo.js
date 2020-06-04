import Poligono from './Poligono';

export  default class Triangulo extends Poligono {

    #base;
    #altura;

    constructor(arestas) {
        super(arestas);
        this.#base = arestas.base;
        this.#altura = arestas.altura;
        Object.freeze(this);
    }

    area () {
        return (this.#base * this.#altura) / 2; 
    }

    get base() {
        return this.#base;
    }

    set base(base) {
        this.#base = base;
    }

    get altura() {
        return this.#altura;
    }
    
    set altura(altura) {
        this.#altura = altura;
    }
}