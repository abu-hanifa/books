const mongoose = require("mongoose")


const genreSchema = mongoose.Schema({
    nameGenre: String,
    descriptGenre: String

})


const Genre = mongoose.model('Genre', genreSchema)
module.exports = Genre