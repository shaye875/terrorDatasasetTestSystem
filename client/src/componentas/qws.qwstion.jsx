import React from 'react'
import { useContext } from 'react'
import { UseContext } from '../App'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router'

function Qwsqwstion() {
  const { listTerrorists } = useContext(UseContext)
  const [nex, setNex] = useState(false)
  const [result, setResult] = useState(false)
  const [value, setValue] = useState("")
  const [use, setUse] = useState(new Date())
  function change() {
    localStorage.setItem("qs", JSON.stringify(listTerrorists[Math.floor(Math.random() * 50)]))
    setUse(new Date())
    setTimeout(() => {
      setResult(false)
    }, 1000)

  }
  if ((listTerrorists.length > 0 && localStorage.getItem("qs") === 'undefined') || (listTerrorists.length > 0 && localStorage.getItem("qs") === undefined) || (listTerrorists.length > 0 && localStorage.getItem("qs") === null)) {
    change()
  }
  async function fetchScore() {
    await fetch("http://localhost:3000/api/terrorists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "score": 1
      })
    })
  }
  console.log(localStorage.getItem("qs"));

  console.log(listTerrorists);

  return (
    <div id='allq'>
      <div id='qws'>
        {localStorage.getItem("qs") != 'undefined' && localStorage.getItem("qs") != null && <p>When <b>Country = {JSON.parse(localStorage.getItem("qs")).country_txt}</b> and <b>year = {JSON.parse(localStorage.getItem("qs")).iyear},</b>what is the <b>Attack Type?</b></p>}
      </div>
      <div id='ans'>
        <div id='an'>
          <label htmlFor="input"><b>Your Answer:</b></label>
          <input id='inq' type="text" onChange={(e) => setValue(e.target.value)} />
        </div>
        <button id='sub' onClick={(() => {
         
           console.log(value,JSON.parse(localStorage.getItem("qs")).attacktype1_txt)
          if (value === JSON.parse(localStorage.getItem("qs")).attacktype1_txt) {
            setResult(true)
            setNex(true)
            fetchScore()
            change()
          }
        })}>Submit Answer</button>
      </div>
      <div id='curd'>
        {localStorage.getItem("qs") != 'undefined' && localStorage.getItem("qs") != null && result && <p className='cur'><b>Correct!</b> The answer is: <b>{JSON.parse(localStorage.getItem("qs")).attacktype1_txt}</b></p>}
        {!result && <p id='wr' className='cur'>No matching result found. No point.</p>}
      </div>
      <div id='nex'>
        <Link to={"/"} id='lin' className='butt'>Back to Data Page</Link>
        <button className='butt' onClick={(() => {
          change()
        })}>Next Question</button>
      </div>
    </div>
  )
}

export default Qwsqwstion
