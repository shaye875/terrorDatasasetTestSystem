import { promiseCsv,insertScore } from "./qweries.js";
import { isInformation,isTypes } from "./validation.js";

export async function getCsv(){
    try{
    const data = await promiseCsv()
    return data.slice(0,50)
    }catch (err){
        throw new Error("error read csv",err)
    }
}

export async function CreateScore(obj){
   if(!isInformation(["score"],obj)){
    return {"false":"missing information"}
   }
   if(!isTypes({"score":""},obj)){
    return {"false":"missing information"}
   }
   obj["date"] = new Date()
   await insertScore(obj)
   return {"true":"data added!"}
}