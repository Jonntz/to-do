'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable()
      table.string('sexo', 80).notNullable()
      table.string('nascimento', 80).notNullable()
      table.string('email', 254).notNullable()
      table.string('password', 60).notNullable()
      table.string('confirmar', 80).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
