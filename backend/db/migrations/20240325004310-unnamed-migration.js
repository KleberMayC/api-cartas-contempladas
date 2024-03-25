'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Cartas",{
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numero:{
        type: Sequelize.INTEGER
      },
      tipo:{
        type: Sequelize.STRING
      },
      valorEntrada:{
        type: Sequelize.INTEGER
      },
      valorCredito:{
        type: Sequelize.INTEGER
      },
      qtdParcelas:{
        type: Sequelize.INTEGER
      }
    })
  },


};
