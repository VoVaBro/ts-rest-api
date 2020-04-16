import express, {Application} from 'express'
import authRoutes from './routes/auth'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const app: Application = express ()

app.use('/api/auth', authRoutes)

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))

app.set('port', 3000)


export default app