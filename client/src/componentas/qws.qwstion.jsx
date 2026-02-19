import React from 'react'
import { useContext } from 'react'
import { UseContext } from '../App'
import { useState } from 'react'
import { useEffect } from 'react'

function Qwsqwstion() {
    const {listTerrorists} = useContext(UseContext)
    const [nex,setNex] = useState({})
    setNex(listTerrorists[Math.floor(Math.random()*50)])
    console.log(listTerrorists[Math.floor(Math.random()*50)]);
    
console.log(nex);

 
  return (
    <div>
{<p>{nex.country_txt} and year = {nex.iyear}</p>}
    </div>
  )
}

export default Qwsqwstion
