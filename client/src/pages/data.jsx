import React from 'react'
import Hometitle from '../componentas/data.title'
import Datainputs from '../componentas/data.inputs'
import { useState } from 'react'
import Datalist from '../componentas/data.list'

function Data() {
    return (
        <div>
            <Hometitle />
            <Datainputs />
            <Datalist />
        </div>
    )
}
export default Data
