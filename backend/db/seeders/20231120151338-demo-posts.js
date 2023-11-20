'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Posts';
    return queryInterface.bulkInsert(options, [
      {
        posterId: 1,
        title: 'TITLE',
        body: 'BIG BODY'
      },
      {
        posterId: 1,
        title: 'TITLE2',
        body: 'BIG BODY 2'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Posts';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      id: { [Op.in]: [1, 2] }
    }, {});
  }
};
