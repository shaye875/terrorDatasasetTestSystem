import express from 'express'
import { getCsv, CreateScore } from './servise.js'


export const route = express()

route.get("/terrorists", async (req, res) => {
    res.json(await getCsv())
})

route.post("/terrorists", async (req, res) => {
    const obj = req.body
    const resut = await CreateScore(obj)
    if (Object.keys(resut)[0] !== "true") {
        res.status(400)
        res.json(resut)
    } else {
        res.json(resut)
    }
})
