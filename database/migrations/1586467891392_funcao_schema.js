'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FuncaoSchema extends Schema {
  up () {
    this.create('FUNCAO', (table) => {
      table.increments('ID_FUNCAO')
      table.string('NOME_FUNCAO', 50).notNullable().unique()
      table.string('DESCRICAO_FUNCAO', 500).notNullable()
    })
  }

  down () {
    this.dropIfExists('FUNCAO')
  }
}

module.exports = FuncaoSchema
