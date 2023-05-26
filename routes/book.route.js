const {Router} = require("express")
const {bookController} = require("../controllers/book.controller")
const router = Router()


router.post('/book', bookController.postbook)
router.delete('/book/:id', bookController.deletebookId)
router.patch('/book/:id', bookController.patchbookId)
router.get('/book/:id', bookController.getbookId)
router.get('/book', bookController.getbook)
router.get('/book/genre/:id',bookController.getbookgenre)

module.exports = router