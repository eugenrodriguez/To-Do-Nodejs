// backend/config/dbManager.js
const config = require('./dbConfig');
const TodoRepositorySequelize = require('../repositories/TodoRepositorySequelize');
const TodoRepositoryMongoose = require('../repositories/TodoRepositoryMongoose');
const { Sequelize } = require('sequelize');
const mongoose = require('mongoose');

let todoRepository;

if (config.DB_TYPE === 'sql') {
    const sequelize = new Sequelize(config.SQL_URI);
    sequelize.authenticate();
    todoRepository = new TodoRepositorySequelize();
    module.exports = { sequelize, todoRepository };
} else {
    mongoose.connect(config.NOSQL_URI);
    todoRepository = new TodoRepositoryMongoose();
    module.exports = { mongoose, todoRepository };
}
