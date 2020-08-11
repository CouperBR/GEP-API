'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Serie extends Model {
    static get primaryKey () {
        return 'id'
    }
    static get table () {
        return 'kura_serie'
    }
}

module.exports = Serie
