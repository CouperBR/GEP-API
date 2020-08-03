'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Funcao extends Model {
    static get primaryKey () {
        return 'ID_FUNCAO'
    }
    static get table () {
        return 'FUNCAO'
    }

    permissoes () {
        return this
          .belongsToMany('App/Models/Permissao', 'ID_FUNCAO', 'ID_PERMISSAO')
          .pivotModel('App/Models/FuncaoPermissao')
    }
}

module.exports = Funcao
