import * as db from './config/db';
import ProdutoController from './controllers/ProdutoController';
import Produto from './models/Produto';

const produtoCtrl = new ProdutoController();

let recuperarProdutos = async () => {

    db.conectarBD();

    /** // Salva um novo produto
    const produto = new Produto({
        desc: 'Sabão em pó',
        qnt: 3,
        marca: 'Tixan'
    });

    const produtoSalvo = await produtoCtrl.salvar(produto);
    console.log(produtoSalvo);
    */
    
    // Recupera todos os produtos
    const produtos = await produtoCtrl.recuperarTodos();
    console.log(produtos);

    /** // Recupera pela Descrição
    const produtos = await produtoCtrl.recuperarPelaDesc('f');
    produtos.forEach(produtos => console.log(produtos));
    */

    /** // Recupera pelo id
    const produto = await produtoCtrl.recuperarPeloId('5eb3353944aa224e01676f49');
    console.log(produto);
    */

    /** // Atualiza os dados de um produto pelo id
    let produto = await produtoCtrl.recuperarPeloId('5eb32d9d8300a64b267730f7');
    produto.marca = 'Piracanjuba';
    const produtoAtualizado = await produtoCtrl.salvar(produto);
    console.log(produtoAtualizado);
    */
    
    /** // Remove um produto pelo id
    const resposta = await produtoCtrl.remover('5eb3354b0ce2444e2935b08d');
    console.log(resposta);
    */
    
    db.desconectarBD();
}

recuperarProdutos();