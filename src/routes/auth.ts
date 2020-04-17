import {Router} from 'express'
import {signup, signin, profile} from '../controllers/auth.controller'
import {isAuth} from '../middleware/auth.middleware'

const router: Router = Router() 



router.post('/signup', signup)
router.post('/signin', signin)
router.get('/profile', isAuth, profile)


export default router