const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
    name: String,
    imaUrl: String
});

module.exports = mongoose.model("cards", cardSchema);