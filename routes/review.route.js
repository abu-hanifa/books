const {Router} = require("express")
const {reviewController} = require("../controllers/review.controller")
const router = Router()

router.post('/review/:id', reviewController.postreviewbook)
router.delete('/review/:id', reviewController.deletereview)
router.get('/review', reviewController.getreviewbook)
router.post('/review', reviewController.postreview)

module.exports = router