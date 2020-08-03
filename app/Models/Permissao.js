'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Permissao extends Model {

    static get primaryKey () {
        return 'ID_PERMISSAO'
      }
    static get table () {
        return 'PERMISSAO'
    }

    funcoes () {
        return this
          .belongsToMany('App/Models/Funcao','ID_PERMISSAO', 'ID_FUNCAO')
          .pivotTable('FUNCAO_PERMISSAO')
      }
}

module.exports = Permissao
