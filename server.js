import express from 'express'
import {argv} from 'node:process';
import {handleVmRequestDate} from "attack_handler.js";
import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from "path";

const app = express()
const port = 3001
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static("public"));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
})

app.get('/attack?:vm_id', (req, res) => {
    const vmId = req.query.vm_id
    const dateSource = getFileData()
    let result = handleVmRequestDate(dateSource, vmId)
    res.send(result)

})


app.listen(port, () => {
    console.log(`listening to ${port}`)
})


function getFileData() {
    const fileName = argv.find(i => i.includes('file')).split('=')[1];
    const file = fs.readFileSync(`data/${fileName}`, 'utf8')
    return JSON.parse(file)
}