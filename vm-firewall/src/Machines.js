import {Box, Button, MenuList, TextField, Typography, useColorScheme} from "@mui/material";
import React, {useEffect, useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

const Machines = (props) => {
    const {vmData} = props
    const [id, setId] = useState(null)
    const [idsWithRisk, setIdsWithRisk] = useState(null)

    useEffect(() => {
        handleClick
    }, [idsWithRisk])

    function handleChange(event) {
        setId(event.target.value)
    }

    async function handleClick() {
        const info = {
            vms: vmData.data.vms,
            rules: vmData.data.rules
        }
        console.log('info', info)
        const response = await fetch(`/api/file_selection/attack?vm_id=${id}`,
            {
                method: 'POST',
                body: JSON.stringify(info),
                headers: {'Content-Type': 'application/json'}
            })
        const data = await response.json()
        setIdsWithRisk(data.ids)

    }


    return (
        <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
            }}>
                <FormControl fullWidth>
                    <InputLabel lable={id}>Machines Ids</InputLabel>
                    <Select
                        value={id}
                        label="Machine Id"
                        onChange={handleChange}
                    >{vmData.data.ids.map((id) => (<MenuItem value={id}>{id}</MenuItem>))}
                    </Select>
                </FormControl>
                <Button disable={id !== null} onClick={handleClick}>Submit</Button>
            </div>

            <div>
                    <div>
                        <h2>Machines with potential risk</h2>
                        <h3>{idsWithRisk ? idsWithRisk.join(',') : 'no potential risk was found'}</h3>
                    </div>
            </div>
        </div>
    )
}

export default Machines