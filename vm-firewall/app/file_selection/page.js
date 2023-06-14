'use client';

import React, {useState, createContext, useEffect} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Button} from "@mui/material";
import Machines from "@/src/Machines";


//  selection of the file name
//  based on the file name i need to fetch the machines data
// the components that uses the machines ids is the Machines that retruns a menu with the ids

const DataSourceSelection = () => {

    const [dateSource, setDataSource] = useState(null)
    const [showMenu, setShowMenu] = useState(false)
    const [data, setData] = useState(null)
    const files = ['input-0.json', 'input-1.json', 'input-2.json', 'input-3.json']


    function handleChange(event) {
        setDataSource(event.target.value)
    }

    async function handleClick() {
        const res = await fetch(`/api/file_selection?fileName=${dateSource}`, {method: 'GET'})
        const results = await res.json()
        setData(results)
        setShowMenu(true)


    }

    return (
        <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
            }}>
                <FormControl fullWidth>
                    <InputLabel lable={dateSource}>Data Sources</InputLabel>
                    <Select
                        value={dateSource}
                        label="Data Source"
                        onChange={handleChange}
                    >{files.map((f) => (<MenuItem value={f}>{f}</MenuItem>))}
                    </Select>
                </FormControl>
                <Button disable={dateSource !== null} onClick={handleClick}>Submit</Button>
            </div>

            {showMenu ? (<div>
                <Machines vmData={data}/>
            </div>) : ''}
        </div>

    )
}


export default DataSourceSelection
