'use strict'
const Funcao = use("App/Models/Funcao")

class FuncaoController {

    async get({ request, response }) {
        const data = request.only(['nome', 'descricao', 'page', 'limit']);
        const query = Funcao.query();

        if (data != null) {
            
            if (data.nome != null) {
                query.where('NOME_FUNCAO', 'like', '%' + data.nome + '%');
            }

            if (data.descricao != null) {
                query.where('DESCRICAO_FUNCAO', 'like', '%' + data.descricao + '%');
            }
        }

        query.with('permissoes');

        const funcoes = await query.orderBy('ID_FUNCAO', 'asc').paginate(data.page, data.limit);

        return funcoes;
    }

    async getById({ params }) {

        const funcao = await Funcao.query()
            .with('permissoes')
            .where('ID_FUNCAO', params.id)
            .first()


        return funcao;

    }
}

module.exports = FuncaoController
