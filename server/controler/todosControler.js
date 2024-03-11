const Todos = require("../models/Todos")

const getAllTodos = async (req, res) => {
    const todos = await Todos.find().lean()
    res.json(todos)
}

const getTodosById = async (req, res) => {
    const { id } = req.params
    const todos = await Todos.findById(id).lean()
    if (!todos) return res.status(404).json("No todos found")
    res.json(todos)
}

const createTodos = async (req, res) => {
    const { title, tags, completed } = req.body
    if (!title) return res.status(400).json("Title is a required field")
    const todos = await Todos.create({ title, tags, completed })
    if (!todos) return res.status(404).json("error")
    res.json(todos)
}

const updateTodos = async (req, res) => {
    const { id, title, tags } = req.body
    if (!id) {
        return res.status(404).send("ID is required")
    }
    const todos = await Todos.findById(id).exec()
    todos.title = title
    todos.tags = tags
    const newTodos = await todos.save()
    res.json(`update todos ${id} success`)
}
const updateCompleted = async (req,res) => {
    const { id } = req.params
    const todo = await Todos.findById(id).exec()
    todo.completed = !todo.completed
    const newTodos = await todo.save()
    res.json(`update todo ${id} success`)
}
const deleteTodos = async (req, res) => {
    const { id } = req.body
    if (!id) {
        return res.status(404).send("id is required")
    }
    const todos = await Todos.findById(id).exec()
    const deleted = await todos.deleteOne()
    res.json(`deleted todos`)
}
module.exports = { getAllTodos, getTodosById, createTodos, updateTodos,updateCompleted, deleteTodos }
