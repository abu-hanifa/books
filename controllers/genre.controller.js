const Genre = require("../models/Genre.model")

module.exports.genreController = {
    postgenre: (req, res) => {
        Genre.create({
           nameGenre: req.body.nameGenre,
           descriptGenre: req.body.descriptGenre 
        }).then((data) => {
            res.json(data)
        })
    },
    deletegenre: (req, res) => {
        Genre.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getgenre: (req, res) => {
        Genre.find().then((data) => {
            res.json(data)
        })
    }
}
