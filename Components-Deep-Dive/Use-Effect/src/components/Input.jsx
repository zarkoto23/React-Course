import { useEffect, useState } from "react";

export default function Input() {
  const [state, setState] = useState(true);
  const [text, setText]=useState('')
  //on mounth
  useEffect(() => {
    console.log("on mounth");
  },[]);
  // console.log('rendere');
  

  //onInput change
  useEffect(()=>{
    console.log(`text change - ${text}`);
    
  },[text])


 useEffect(()=>{
  console.log('on stage change');
  
 },[state])



  const buttonClickHandler = () => {
    console.log("clicked");

    //toogle state
    // setState(!state); //-not this way

    setState((oldState)=>!oldState);  
  };

  const inputChangeHandler=(e)=>{
    setText((e.target.value));
    

  }

  return (
    <>
      <h3>Input component</h3>

      <input type="text"  onChange={inputChangeHandler}/>

      <button onClick={buttonClickHandler}>Update</button>
    </>
  );
}
