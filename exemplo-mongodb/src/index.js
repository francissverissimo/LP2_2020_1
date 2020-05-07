import * as db from './config/db';
import ContatoController from './controllers/ContatoController';
import Contato from './models/Contato';

const contatoCtrl = new ContatoController();

let recuperarContatos = async () => {

    db.conectarBD();

    /**
    const contato = new contato({
        nome: 'Sidney',
        telefone: '55555-5555'
    });

    const contatoSalvo = await contatoCtrl.salvar(contato);
    console.log(contatoSalvo);
    */
    ////////////
    
    /**
    const contatos = await ContatoController.recuperarTodos();
    console.log(contatos);
    */
    ////////////
    
    const contatos = await ContatoController.recuperarPorNome('a');
    contatos.forEach(contato => conlsole.log(contatos));

    db.desconectarBD();
}

recuperarContatos();