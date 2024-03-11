const Photos = require("../models/Photos")

const getAllPhotos= async (req, res) => {
    const photos = await Photos.find().lean()
    res.json(photos)
}

const getPhotosById = async (req, res) => {
    const { id } = req.params
    const photos = await Photos.findById(id).lean()
    if (!photos) return res.status(404).json("No photos found")
    res.json(photos)
}

const createPhotos = async (req, res) => {
    const { title,imageUrl} = req.body
    if (!title) return res.status(400).json("Title is a required field")
    const photos = await Photos.create({title,imageUrl})
    if (!photos) return res.status(404).json("error")
    res.json(photos)
}

const updatePhotos = async (req, res) => {
    const {id,title,imageUrl} = req.body
    if (!id) {
        return res.status(404).send("ID is required")
    }
    const photos = await Photos.findById(id).exec()
    photos.title = title
    photos.imageUrl = imageUrl
    const newPhotos = await photos.save()
    res.json(`update photos ${id} success`)
}
const deletePhotos = async (req, res) => {
    const { id } = req.body
    if (!id) {
        return res.status(404).send("id is required")
    }
    const photos = await Photos.findById(id).exec()
    const deleted = await photos.deleteOne()
    res.json(`deleted photos`)
}
module.exports = { getAllPhotos, getPhotosById, createPhotos, updatePhotos, deletePhotos }
