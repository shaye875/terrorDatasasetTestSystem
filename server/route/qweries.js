import csv from 'csv-parser'
import fs from "fs"

export function getCsv(){

function d() {
    return new Promise((res) => {
        const result = []
        fs.createReadStream("hayal_300_no_status.csv")
            .pipe(csv())
            .on("data", (data) => result.push(data))
            .on("end", () => {
              res(result)
            })
    })
}

}