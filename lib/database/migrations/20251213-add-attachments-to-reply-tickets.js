'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      // Check if attachments column exists
      const table = await queryInterface.describeTable('reply_tickets');
      
      if (!table.attachments) {
        await queryInterface.addColumn('reply_tickets', 'attachments', {
          type: Sequelize.TEXT,
          allowNull: true,
          comment: 'JSON stringified array of file URLs'
        });
        console.log('Added attachments column to reply_tickets');
      }
      
      if (!table.updated_at) {
        await queryInterface.addColumn('reply_tickets', 'updated_at', {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
          allowNull: true
        });
        console.log('Added updated_at column to reply_tickets');
      }
    } catch (err) {
      console.error('Error in migration:', err);
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      const table = await queryInterface.describeTable('reply_tickets');
      
      if (table.attachments) {
        await queryInterface.removeColumn('reply_tickets', 'attachments');
        console.log('Removed attachments column from reply_tickets');
      }
      
      if (table.updated_at) {
        await queryInterface.removeColumn('reply_tickets', 'updated_at');
        console.log('Removed updated_at column from reply_tickets');
      }
    } catch (err) {
      console.error('Error in migration rollback:', err);
      throw err;
    }
  }
};
