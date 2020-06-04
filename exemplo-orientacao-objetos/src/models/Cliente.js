export default class Cliente {

    #cpf;

    constructor() {

        this.nome = '';
        this.#cpf = '';
        this.dataNascimento = '';
        this.endereco = '';
        
        Object.freeze(this);
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(cpf) {
        let valido = cpf.length === 11;
        if (valido) {
            let cont = 1;
            for (let i = 1; i < cpf.length; i++) {
                if (cpf[i] === cpf[i - 1]) {
                    cont++;
                }
            }
            this.#cpf = cont < 11 ? cpf : this.#cpf;
        }
    }
}