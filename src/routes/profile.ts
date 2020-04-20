import {Router} from 'express'
import {profile} from '../controllers/profile.controllers'
import {isAuth} from '../middleware/auth.middleware'


const router: Router = Router() 



router.get('/', isAuth, profile)


export default router