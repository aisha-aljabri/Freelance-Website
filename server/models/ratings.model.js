const mongoose = require("mongoose");


const RatingsSchema = new mongoose.Schema({
    freelancer: {
        type: String
    },
    client: {
        type: String
    },
    comment: {
        type:String
    },
    rating: {
        type: Number,
        required: [true, "rating is required"],
    },
    state:{
        type: String
    }
}, {timestamps: true});

module.exports.Ratings = mongoose.model("Ratings", RatingsSchema);