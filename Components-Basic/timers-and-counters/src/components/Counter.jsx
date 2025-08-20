import { useState } from "react";

export default function Counter(){
    const [count, setCount]=useState(0)

    const incraseCountClickHandler=()=>{
        console.log('increase');
        setCount(count+1)
        
    }

    return(
        <>
        <h2>Counter</h2>
        <hr />
        <div>{count}</div>
        <hr />
        <button onClick={incraseCountClickHandler}>+</button>

        </>
    )
}