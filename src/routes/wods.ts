import {Router} from 'express'
import {createWod, deleteWod, editWod, changeWodValue} from '../controllers/wod.controller'
import {isAuth} from '../middleware/auth.middleware'


const router: Router = Router() 



router.post('/createwod', createWod)
router.post('/deletewod', deleteWod)


router.get('/editwod', changeWodValue)
router.post('/editwod', editWod)


export default router