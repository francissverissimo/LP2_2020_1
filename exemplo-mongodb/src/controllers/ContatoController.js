import Contato from '../models/Contato';

export default class ContatoController {

    async salvar(contato) {
        const contatoSalvo = await Contato.create(contato);
        return contatoSalvo;
    }

    async recuperarTodos() {
        const contatos = await Contato.find();
        return contatos;
    }

    async recuperarPorNome(nomeConsulta) {
        const contatos = await Contato.find({
            nome: {
                '$regex': nomeConsulta,
                '$options': 'i'
            }
        });

        return contatos;
    }
}