const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
        unique: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    Remarks: {
        type: String,
    }
})

const User = mongoose.model("JaiHo", userSchema)

module.exports = User