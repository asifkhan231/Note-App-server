const mongooss = require("mongoose")

const userSchema = mongooss.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    }
},{timestamps:true})

module.exports = mongooss.model("user",userSchema)