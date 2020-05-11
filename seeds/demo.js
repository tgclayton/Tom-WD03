exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('demo').del()
    .then(function () {
      // Inserts seed entries
      return knex('demo').insert([
        { id: 1, colName: 'demo1' },
        { id: 2, colName: 'demo2' },
        { id: 3, colName: 'demo2' },
        { id: 4, colName: 'demo2' },
        { id: 5, colName: 'demo2' },
        { id: 6, colName: 'demo2' },
        { id: 7, colName: 'demo2' },
        { id: 8, colName: 'demo3' }
      ])
    })
}
