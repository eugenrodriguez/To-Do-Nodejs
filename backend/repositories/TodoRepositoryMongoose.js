// backend/repositories/TodoRepositoryMongoose.js
const Todo = require('../models/todoMongoose');
const TodoRepository = require('./TodoRepository');

class TodoRepositoryMongoose extends TodoRepository {
    async findAll() { return await Todo.find(); }
    async findById(id) { return await Todo.findById(id); }
    async create(todo) { return await Todo.create(todo); }
    async update(id, todo) { return await Todo.findByIdAndUpdate(id, todo); }
    async delete(id) { return await Todo.findByIdAndDelete(id); }
}

module.exports = TodoRepositoryMongoose;
