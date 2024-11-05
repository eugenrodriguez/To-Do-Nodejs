const sequelize = require('../config/dbConfig'); // Importa la instancia de Sequelize
const { DataTypes } = require('sequelize');

if (!sequelize) {
    throw new Error("La instancia de Sequelize no está configurada correctamente.");
}

const Todo = sequelize.define('Todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = Todo;
