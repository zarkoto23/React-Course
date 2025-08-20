import { useState } from "react";

export default function KillCounter() {
  const [count, setCount] = useState(0);

  const isMax=count>=10

  const incraseCountClickHandler = () => {
    setCount(count + 1);
  };

//   if (count > 10) {
//     return (
//       <>
//         <hr />
//         <h2>bravo</h2>
//         <hr />
//       </>
//     );
//   }

const decrementCountClickHandler= ()=>{
    setCount(count-1)
}
  let title = <h2>Kill counterrrr</h2>;

  if (count > 10) {
    return(
        <>
    title = <h1>game over</h1>
    </>
    )
  }

  switch (count) {
    case 3:
      title = <h4>third blood</h4>;
      break;
    case 4:
      title = <h4>fouurth blood</h4>;
      break;
  }

  return (
    <>
      <hr />
      {title}
      <div>{count}</div>
      <button onClick={incraseCountClickHandler}>+</button>
      {count>6
        ? <button onClick={decrementCountClickHandler}>-</button>
        : <p>no decrement yet!</p>
    
    }
    {isMax&& <p>watch out</p>}
      <hr />
    </>
  );
}
