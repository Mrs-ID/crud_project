const express = require("express")
const router = express.Router()
const Todos = require("../models/Todos");
const todosControler = require("../controler/todosControler")

router.get("/", todosControler.getAllTodos)

router.get("/:id", todosControler.getTodosById)

router.post("/", todosControler.createTodos)

router.put("/", todosControler.updateTodos)

router.put("/:id", todosControler.updateCompleted)

router.delete("/", todosControler.deleteTodos)


module.exports = router
