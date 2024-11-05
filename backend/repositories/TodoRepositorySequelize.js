// backend/repositories/TodoRepositorySequelize.js
const Todo = require('../models/todoSequelize');
const TodoRepository = require('./TodoRepository');

class TodoRepositorySequelize extends TodoRepository {
    async findAll() { return await Todo.findAll(); }
    async findById(id) { return await Todo.findByPk(id); }
    async create(todo) { return await Todo.create(todo); }
    async update(id, todo) { return await Todo.update(todo, { where: { id } }); }
    async delete(id) { return await Todo.destroy({ where: { id } }); }
}

module.exports = TodoRepositorySequelize;
