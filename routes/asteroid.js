import { feed, lookUp, browse } from "../controllers/asteroid.js"
import { Router } from "express"

const router = Router()

router.get('/feed', feed)
router.get('/:id', lookUp)
router.get('/browse', browse)

export default router