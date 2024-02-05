import { config } from 'dotenv'
config()
import express from 'express'
import cors from 'cors'
import cookie_parser from 'cookie-parser'
import contactRoutes from './routes/contactRoutes.js'
import DBConnection from './config/DbConnect.js'
import path from 'path'
const app = express()
app.listen(process.env.port,async() => {
    await DBConnection()
    console.log('our app is running on this portNo:=>',process.env.port);
})
app.use(cors({
  origin: process.env.frontend_url,
  credentials: true
}))
app.use(express.static(path.join(__dirname,"../build")))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookie_parser())
app.use('*',function(req,res){
  res.sendFile(path.join(__dirname,'../build/index.html'))
})
app.use('/api/v1',contactRoutes)
