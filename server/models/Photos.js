const mongoose = require('mongoose')
const photosSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl:String
}, {
    timestamps: true
})
module.exports = mongoose.model('Photos', photosSchema)