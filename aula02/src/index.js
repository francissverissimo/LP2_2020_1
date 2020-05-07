import ArrecadacaoDAO from './model/dao/ArrecadacaoDAO';

let dao = new ArrecadacaoDAO();
console.log(dao.carregarArrecadacaoEstadualPorAno(2010));