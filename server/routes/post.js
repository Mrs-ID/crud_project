const express = require("express")
const router = express.Router()
const Post = require("../models/Posts");
const postsControler =require("../controler/postsControler")

router.get("/",postsControler.getAllPosts)

router.get("/:id",postsControler.getPostsById)

router.post("/",postsControler.createPosts)

router.put("/",postsControler.updatePosts)

router.delete("/",postsControler.deletePosts)


module.exports = router
