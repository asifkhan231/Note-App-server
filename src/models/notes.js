const mongooss = require("mongoose")

const noteSchema = mongooss.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    userId: {
        type: mongooss.Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
},{timestamps:true})

module.exports = mongooss.model("noteModel",noteSchema)