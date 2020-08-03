'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioFuncaoSchema extends Schema {
  up () {
    this.create('USUARIO_FUNCAO', (table) => {
      // table.integer('ID_USUARIO_FUNCAO').primary()
      table.increments('ID_USUARIO_FUNCAO')
      table.integer('ID_USUARIO')
            .references('USUARIO.ID_USUARIO')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
      table.integer('ID_FUNCAO')
            .references('FUNCAO.ID_FUNCAO')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
  }

  down () {
    this.dropIfExists('USUARIO_FUNCAO')
  }
}

module.exports = UsuarioFuncaoSchema
