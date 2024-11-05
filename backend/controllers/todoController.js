// backend/controllers/todoController.js
const { todoRepository } = require('../config/dbManager');

exports.getAllTodos = async (req, res) => {
    const todos = await todoRepository.findAll();
    res.json(todos);
};

exports.getTodoById = async (req, res) => {
    const todo = await todoRepository.findById(req.params.id);
    res.json(todo);
};

exports.createTodo = async (req, res) => {
    const todo = await todoRepository.create(req.body);
    res.status(201).json(todo);
};

exports.updateTodo = async (req, res) => {
    await todoRepository.update(req.params.id, req.body);
    res.status(200).json({ message: 'Todo updated' });
};

exports.deleteTodo = async (req, res) => {
    await todoRepository.delete(req.params.id);
    res.status(204).json({ message: 'Todo deleted' });
};
