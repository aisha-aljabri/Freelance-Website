const mongoose = require("mongoose");


const CommentSchema = new mongoose.Schema({
    freelancer_name: {
        type: String,
    },
    client_name: {
        type: String,
    },
    comment: {
        type: String,
        required: [true, "Comment is required"],
    }
}, {timestamps: true});

module.exports.Comment = mongoose.model("Comment", CommentSchema);