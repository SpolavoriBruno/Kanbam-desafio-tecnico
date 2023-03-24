"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {
    return queryInterface.createTable("cards", {
      id: {
        type: sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      titulo: sequelize.STRING,
      conteudo: sequelize.STRING,
      lista: sequelize.STRING,
      createdAt: sequelize.TIME,
      updatedAt: sequelize.TIME
    });//    sql: 'SELECT "id", "titulo", "conteudo", "lista", "createdAt", "updatedAt" 
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('cards')
  },
};
