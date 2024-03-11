const mongoose=require('mongoose')
const postSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:String
},{
    timestamps:true
})

module.exports=mongoose.model('Posts',postSchema)