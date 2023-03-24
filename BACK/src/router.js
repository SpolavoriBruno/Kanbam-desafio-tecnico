const router = require('express').Router()
const logger = require('./middleware/logger')

// Auth Router
const { doLogin, authMiddleware } = require('./middleware/auth')
router.post('/login', doLogin)


// Card Router
const { getCard, createCard, updateCard, deleteCard } = require('./controller/cardController')

router.get('/cards', authMiddleware, getCard)
router.post('/cards', authMiddleware, createCard)
router.put('/cards/:id', authMiddleware, logger, updateCard)
router.delete('/cards/:id', authMiddleware, logger, deleteCard)


module.exports = router
