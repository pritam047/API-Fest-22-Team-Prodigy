const mongoose = require("mongoose");

// Define the schema for a "Restaurant" record
// MongoDB automatically adds an id with property "_id" on every record
const memeSchema = new mongoose.Schema({
    creator: String,
    memeTitle : String,
    topText : String,
    bottomText : String,
    imgUrl : String,
    tags : String,
});

module.exports = mongoose.model("Meme", memeSchema);