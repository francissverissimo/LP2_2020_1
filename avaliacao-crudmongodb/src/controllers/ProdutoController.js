import Produto from '../models/Produto';

export default class ProdutoController {

    async salvar(produto) {
        const produtoSalvo = await Produto.create(produto);
        return produtoSalvo;
    }

    async recuperarTodos() {
        const produtos = await Produto.find();
        return produtos;
    }

    async recuperarPelaDesc(descConsulta) {
        const produtos = await Produto.find({
            desc: {
                '$regex': descConsulta,
                '$options': 'i'
            }
        }); 
        return produtos;
    }

    async recuperarPeloId(id) {
        const produto = await Produto.findById(id);
        return produto;
    }

    async remover(id) {
        const resposta = await Produto.deleteOne({
            _id: id
        });
        
        return resposta;
    }
}