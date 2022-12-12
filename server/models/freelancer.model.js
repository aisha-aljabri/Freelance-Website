const mongoose = require("mongoose");


const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be 3 characters or longer"]
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    },
    rate: {
        type: Number
    },
    projects: {
        type: Number
    },
    phone: {
        type: String
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password must be 8 characters or longer"]
    },
    userlevel: {
        type: String
    }
    
}, {timestamps: true});

module.exports.Users = mongoose.model("Users", UsersSchema);