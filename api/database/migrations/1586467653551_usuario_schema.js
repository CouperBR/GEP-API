'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.create('USUARIO', (table) => {
      table.increments('ID_USUARIO')
      table.string('NOME_USUARIO', 80).notNullable().unique()
      table.string('EMAIL_USUARIO', 254).notNullable().unique()
      table.string('SENHA_USUARIO', 500).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.dropIfExists('USUARIO')
  }
}

module.exports = UsuarioSchema
