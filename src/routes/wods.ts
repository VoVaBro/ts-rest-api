import {Router} from 'express'
import {createWod, deleteWod, editWod, changeWodValue, getAllWods} from '../controllers/wod.controller'
import {isAuth} from '../middleware/auth.middleware'


const router: Router = Router() 



router.post('/createwod', createWod)
router.post('/deletewod', deleteWod)
router.post('/editwod', editWod)



router.get('/getallwods', getAllWods)
router.get('/editwod', changeWodValue)


export default router