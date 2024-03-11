const express = require("express")
const router = express.Router()
const Photos = require("../models/Photos");
const photosControler =require("../controler/photosControler")

router.get("/",photosControler.getAllPhotos)

router.get("/:id",photosControler.getPhotosById)

router.post("/",photosControler.createPhotos)

router.put("/",photosControler.updatePhotos)

router.delete("/",photosControler.deletePhotos)


module.exports = router
