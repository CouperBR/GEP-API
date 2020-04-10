'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Usuario extends Model {


    static get primaryKey () {
        return 'ID_USUARIO'
      }
    static get table () {
        return 'USUARIO'
    }
}

module.exports = Usuario
