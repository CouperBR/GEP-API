'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UsuarioFuncao extends Model {


    static get primaryKey () {
        return 'ID_USUARIO_FUNCAO'
    }
    static get table () {
        return 'USUARIO_FUNCAO'
    }
}

module.exports = UsuarioFuncao
