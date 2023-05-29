const Review = require("../models/Review.model")


module.exports.reviewController = {
    postreviewbook: (req, res) => {
        Review.create(  {
            textReview: req.body.textReview,
            nameAuthorReview: req.body.nameAuthorReview,
            bookReview: req.params.id
            }).then((data) => {
            res.json(data)
        })
    },
    deletereview: (req, res) => {
        Review.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getreviewbook: (req, res) => {
        console.log(1232421421421)
        Review.find({bookReview: req.params.id}).populate('bookReview').then((data) => {
            res.json(data)
        })

    },
    postreview: (req, res) => {
        Review.create({
            textReview: req.body.textReview,
            nameAuthorReview: req.body.nameAuthorReview
        }).then((data) => {
            res.json(data)
        })
    }

}