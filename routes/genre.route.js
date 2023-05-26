const {Router} = require("express")
const {genreController} = require("../controllers/genre.controller")
const router = Router()


router.post('/genre',genreController.postgenre)
router.delete('/genre/:id', genreController.deletegenre)
router.get('/genre', genreController.getgenre)




















module.exports = router