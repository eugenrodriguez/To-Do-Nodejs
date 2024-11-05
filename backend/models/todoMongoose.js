// backend/models/todoMongoose.js
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
});

module.exports = mongoose.model('Todo', todoSchema);
