import fs from 'fs';
import path from 'path';
import excelToJson from 'convert-excel-to-json';

import Municipio from '../entity/Municipio';
import {
    ANOS
} from '../../config/Constantes';

export default class ArrecadacaoDAO {

    carregarListaDeArrecadacaoPorCidade() {
        let dados = excelToJson({
            source: fs.readFileSync(path.resolve(__dirname, '../../data/dados.xls')),
            range: 'A4:P185',
        });

        let municipios = [];
        dados.Plan1.forEach(linha => {
            let nome = linha.A;
            let arrecadacoes = Object.values(linha).slice(1, 15);

            let municipio = new Municipio(nome, arrecadacoes);
            municipios.push(municipio);
        });

        return municipios;
    }

    carregarArrecadacaoEstadualPorAno(ano) {
        if (ano in ANOS) {
            let dados = excelToJson({
                source: fs.readFileSync(path.resolve(__dirname, '../../data/dados.xls')),
                range: 'A3:P3',
            });

            let arrecadacaoEstadual = dados.Plan1[0];
            let indice = ANOS[ano];
            return Object.values(arrecadacaoEstadual)[indice];
        }
    }
}