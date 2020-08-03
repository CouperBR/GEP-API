'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FuncaoPermissao extends Model {

    static get primaryKey () {
        return 'ID_FUNCAO_PERMISSAO'
      }
    static get table () {
        return 'FUNCAO_PERMISSAO'
    }
}

module.exports = FuncaoPermissao
