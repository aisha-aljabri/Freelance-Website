const mongoose = require("mongoose");


const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be 3 characters or longer"]
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

module.exports.Client = mongoose.model("Client", ClientSchema);