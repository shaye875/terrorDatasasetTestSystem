import csv from 'csv-parser'
import fs from "fs"
import { promises as fsP } from 'fs'

export function promiseCsv() {
    return new Promise((res) => {
        const result = []
        fs.createReadStream("./data/terrorData.csv")
            .pipe(csv())
            .on("data", (data) => result.push(data))
            .on("end", () => {
                res(result)
            })
    })
}

export async function insertScore(obj) {
    try {
        const data = await fsP.readFile("./data/scores.json","utf8")
        const arr = await JSON.parse(data)
        arr[0].score += obj.score
        arr[0].date = new Date()
        await fsP.writeFile("./data/scores.json", JSON.stringify(arr))
    } catch (err) {
        throw new Error("error read score", err)
    }
}



