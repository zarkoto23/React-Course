import { memo, useState } from "react"

export default function Counter({count, setCount}) {


  return(
    <>
    <h2>Counter - {count}</h2>
    <button onClick={()=>setCount(c=>c+1)}>+</button>
    </> 
)
}
