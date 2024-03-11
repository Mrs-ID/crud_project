const express = require("express")
const router = express.Router()
const usersControler =require("../controler/usersControler")

router.get("/",usersControler.getAllUsers)

router.get("/:id",usersControler.getUsersById)

router.post("/",usersControler.createUsers)

router.put("/",usersControler.updateUsers)

router.delete("/",usersControler.deleteUsers)


module.exports = router
