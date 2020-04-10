'use strict'
const Funcao = use("App/Models/Funcao")

class FuncaoController {

    async list() {
        const funcoes = await Funcao
                .query()
                .with('permissoes')
                .fetch();

        return funcoes.toJSON();
    }
}

module.exports = FuncaoController
