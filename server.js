import express from 'express'
import { argv } from 'node:process';
import {handleVmRequestDate} from "./attack_handler.js";
const app = express()
const port = 3000

const fileToUse=argv.find(i => i.includes('file')).split('=')[1];

app.get('/attack?:vm_id', (req, res) => {
    const vmId = req.query.vm_id
    let result = handleVmRequestDate(fileToUse, vmId)
    res.send(result)

})
app.listen(port, ()=>{
    console.log(`listening to ${port}`)
})