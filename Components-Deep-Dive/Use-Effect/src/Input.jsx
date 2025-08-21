import { useEffect, useState } from "react";

export default function Input() {
  const [state, setState] = useState(true);
  //BASIC useeffect
  useEffect(() => {
    console.log("each render");
  });

  const buttonClickHandler = () => {
    console.log("clicked");

    //toogle state
    // setState(!state); //-not this way

    setState((oldState)=>!oldState);  
  };

  return (
    <>
      <h3>Input component</h3>

      <input type="text" />

      <button onClick={buttonClickHandler}>Update</button>
    </>
  );
}
