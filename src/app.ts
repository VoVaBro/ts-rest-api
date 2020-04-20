import express, { Application } from "express";
import cookieSession from "cookie-session";
import cookieParser from 'cookie-parser'
import passport from "passport";
import authRoutes from "./routes/auth";
import facebookAuth from './routes/fb.auth'
import profileRoutes from "./routes/profile";
import wodsRoutes from './routes/wods'
import morgan from "morgan";
import cors from "cors";
import { config } from "./config";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.cookieSession.secret],
  })
);

app.use(morgan("dev"));




import './config/passport.startegys/fb.strategy'

app.use(passport.initialize());
app.use(passport.session());


// app.use('/', express.static(path.join(__dirname, '../client')))
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client', 'index.html'))
// })


app.use('/facebook', facebookAuth)
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)
app.use('/user/wods', wodsRoutes)




app.set("port", 5000)

export default app;
