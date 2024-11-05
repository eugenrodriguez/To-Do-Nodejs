require('dotenv').config();
const { Sequelize } = require('sequelize');

let sequelize;

if (process.env.DB_TYPE === 'sql') {
    sequelize = new Sequelize(process.env.SQL_URI, {
        dialect: 'mysql', // Asegúrate de que esto esté correcto para tu base de datos
        logging: false,
    });
} else if (process.env.DB_TYPE === 'nosql') {
    throw new Error("Sequelize está configurado solo para SQL. Usa Mongoose para MongoDB.");
}

console.log("Configuración de Sequelize:", process.env.SQL_URI);

module.exports = sequelize;
