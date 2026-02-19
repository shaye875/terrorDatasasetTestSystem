import React from 'react'
import { useContext } from 'react'
import { UseContext } from '../App'
import { useState } from 'react'

function Datainputs() {
    const { listTerrorists, setList } = useContext(UseContext)
    const [searchBy, setSearchBy] = useState("")
    const [houSelect, setHowSelect] = useState("")
    return (
        <div id='allinputs'>
            <div>
                <label className='font' htmlFor="search">Search:</label>
                <input type="text" className='input' id='search' onChange={(e) => { setSearchBy(e.target.value), setHowSelect("search") }} />
            </div>
            <div>
                <label className='font' htmlFor="year>">Year ›</label>
                <input className='input' type="text" id='year>' onChange={(e) => { setSearchBy(e.target.value), setHowSelect("high") }} />
            </div>
            <div>
                <label className='font' htmlFor="year<">Year ‹</label>
                <input type="text" className='input' id='year<' onChange={(e) => { setSearchBy(e.target.value), setHowSelect("laou") }} />
                <button id='button' onClick={() => {
                    if (houSelect === "search") {
                        const newArr = listTerrorists.filter((item) => {
                            if (item.city === searchBy || item.country_txt === searchBy) {

                                return item
                            }
                        })
                        setList(newArr)
                    } else if (houSelect === "high") {
                        const newArr = listTerrorists.filter((item) => {
                            if (Number(searchBy < item.iyear)) {
                                return item
                            }
                        })
                        setList(newArr)
                    } else if (houSelect === "laou") {
                        const newArr = listTerrorists.filter((item) => {
                            if (Number(searchBy > item.iyear)) {
                                return item
                            }
                        })
                        setList(newArr)
                    }
                }}>Filter</button>
            </div>
        </div>
    )
}

export default Datainputs
