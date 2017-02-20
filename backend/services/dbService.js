'use strict';

const mongo = require('promised-mongo');
const db = mongo('mongodb://localhost:27017/todolist', ['items']);
module.exports = db;