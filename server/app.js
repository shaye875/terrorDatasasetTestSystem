import express from 'express'
import cors from 'cors'
import { route } from './route/controller.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api",route)

app.listen(3000,()=>{
    console.log("server run");
})
