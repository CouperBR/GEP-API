'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FuncaoPermissaoSchema extends Schema {
  up () {
    this.create('FUNCAO_PERMISSAO', (table) => {
      table.increments('ID_FUNCAO_PERMISSAO')
      table.integer('ID_FUNCAO')
            .references('FUNCAO.ID_FUNCAO')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
      table.integer('ID_PERMISSAO')
            .references('PERMISSAO.ID_PERMISSAO')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
  }

  down () {
    this.dropIfExists('FUNCAO_PERMISSAO')
  }
}

module.exports = FuncaoPermissaoSchema
