exports.up = function (knex) {
  knex.schema.createTable('demo', (table) => {
    table.increments('id').primary()
    table.string('data')
  })
}

exports.down = knex => knex.schema.dropTable('demo')
