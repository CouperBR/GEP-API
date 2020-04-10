'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PermissaoSchema extends Schema {
  up () {
    this.create('PERMISSAO', (table) => {
      // table.integer('ID_PERMISSAO').primary()
      table.increments('ID_PERMISSAO')
      table.string('NOME_PERMISSAO', 50).notNullable().unique()
      table.string('DESCRICAO_PERMISSAO', 500).notNullable()
      table.string('ALIAS_PERMISSAO', 50).notNullable().unique()
    })
  }

  down () {
    this.dropIfExists('PERMISSAO')
  }
}

module.exports = PermissaoSchema
