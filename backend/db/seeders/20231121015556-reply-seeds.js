'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Replies';
    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        postId: 1,
        body: 'blah blah blah'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Replies';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      id: { [Op.in]: [1] }
    }, {});
  }
};
