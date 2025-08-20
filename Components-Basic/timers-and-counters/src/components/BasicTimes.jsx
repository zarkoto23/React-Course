import { useState } from "react"


export default function BasicTimer(){
    const startValue=0
    const [time, setTime]=useState(startValue)


    setTimeout(() => {
        // console.log(time);
        
        setTime(time+1)
    }, (1000));

    return(
        <>
        <h2>Basic Timer</h2>
        <hr />
        <div>{time}</div>
        <hr />

        </>
    )
}