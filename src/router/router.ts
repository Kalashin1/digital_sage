import { Router, Request, Response } from 'express'
import { renderHomepage } from '../controllers/auth'

const router = Router()

router.get('/', renderHomepage)

export { router }