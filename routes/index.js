import { Router } from "express"
import asteroidRouter from '../routes/asteroid.js'

const router = Router()

router.use('/asteroids', asteroidRouter)

export default router