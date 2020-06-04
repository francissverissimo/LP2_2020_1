import Triangulo from './Triangulo'; 

export default class TrianguloIsosceles extends Triangulo {

    #lado;

    constructor(arestas) {
        super(arestas);
        this.#lado = arestas.lado;
        this.calcularAltura();
    }
    
    calcularAltura () {
        const meiaBase = this.base / 2;
        let subtracaoPotencias = Math.pow(meiaBase, 2) - Math.pow(this.#lado, 2);
        subtracaoPotencias = subtracaoPotencias < 0 ? subtracaoPotencias * -1 : subtracaoPotencias;
        this.altura = Math.sqrt(subtracaoPotencias);
    }
};