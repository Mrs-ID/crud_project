const  mongoose= require("mongoose");
const usersSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    username:{
        type:String
    },
    email:{
        type:String,
        lowercase:true
    },
    address:{
        type:{"city":String,"street":String}
    },
    phone:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
module.exports = mongoose.model('Users', usersSchema)