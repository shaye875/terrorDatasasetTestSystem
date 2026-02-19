import React from 'react'
import { useState } from 'react'
import { UseContext } from '../App'
import { useContext } from 'react'

function Datalist() {
    const {listTerrorists} = useContext(UseContext)   
    return (
        <div>
             <table id='table'>
                <tr>
                    <th>Event Id</th>
                    <th>Year</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Attack Type</th>
                    <th>Motive</th>
                </tr>
                {listTerrorists.map((item)=>{
                    return(
                        <tr>
                            <td>{item.eventid}</td>
                            <td>{item.iyear}</td>
                            <td>{item.country_txt}</td>
                            <td>{item.city}</td>
                            <td>{item.attacktype1_txt}</td>
                            <td>{item.motive}</td>
                        </tr>
                    )
                })}
             </table>
        </div>
    )
}

export default Datalist
