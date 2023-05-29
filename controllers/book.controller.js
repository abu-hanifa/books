const Book = require("../models/Book.model")


module.exports.bookController ={
    postbook: (req, res) => {
        Book.create({
            name: req.body.name,
            author: req.body.author,
            genre: req.body.genre   
        }).then((data) => {
            res.json(data)
        }).catch((err) => res.json(err.message))
    },
    deletebookId: (req, res) => {
        Book.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })
    },
    patchbookId: (req, res) => {
        Book.findByIdAndUpdate(req.params.id, {name: req.body.name}).then((data) => {
            res.json(data)
        })
    },
    getbookId: (req, res) => {
        Book.findById(req.params.id).then((data) => {
            res.json(data)
        })
    },
   getbook: (req, res) => {
    Book.find().then((data) => {
        res.json(data)
    })
   },
   getbookgenre: async (req, res) => {
   const data = await Book.find({genre: req.params.id}).populate('genre', "-_id -__v")
        res.json(data)
    }
   }


