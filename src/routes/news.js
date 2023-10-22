import express from 'express'
import newsControllers from '../app/controllers/NewsController.js'

const router = express.Router()

router.use('/:slug', newsControllers.show)
router.use('/', newsControllers.index)

export default router
