import React, {useEffect, useState} from "react";

const App = () =>{
const [message, setMessage] = useState('')

    // useEffect(() => {
    //     fetch('/').then((res) => res.json())
    //         .then(() =>setMessage('api is working'))
    // })

    return (
        <VirtualMachine />
    )
}


const VirtualMachine = () => {
    const [vmData, setVmData] = useState('')

    function handleVmInput(){
        setVmData(vmData)
    }

    return (
        <input type='text' value={vmData} onChange={handleVmInput} />
    )
}
export default App