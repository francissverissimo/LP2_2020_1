import * as db from './config/db';
import ContatoController from './controllers/ContatoController';
import Contato from './models/Contato';

const contatoCtrl = new ContatoController();

let recuperarContatos = async () => {

    db.conectarBD();

    /*// Recupera os contatos que contém "a" no nome 
    const contatos = await ContatoController.recuperarPorNome('a');
    contatos.forEach(contato => console.log(contato));
    */

    // Salva um novo contato
    const contato = new Contato({
        nome: 'Sidney',
        telefone: '55555-5555'
    });
    
    const contatoSalvo = await contatoCtrl.salvar(contato);
    console.log(contatoSalvo);

    /*// Recupera todos os contatos
    const contatos = await contatoCtrl.recuperarTodos();
    console.log(contatos);
    */

    /*// Recupera um contato específico pelo seu id
    const contato = await contatoCtrl.recuperarPeloId('5eb213f7e3ce4d0d22a53ded');
    console.log(contato);
    */

    /*// Atualiza um contato pelo seu id
    let contato = await contatoCtrl.recuperarPeloId('5eb213f7e3ce4d0d22a53ded');
    contato.email = 'mrverissimo@email.com';
    const contatoAtualizado  = await contatoCtrl.salvar(contato);
    console.log(contatoAtualizado);
    */

    /*// Remove um contato pelo seu id
    const resposta = await contatoCtrl.remover('5ebb3467203a90088efc489a');
    console.log(resposta);
    */

    db.desconectarBD();
}

recuperarContatos();