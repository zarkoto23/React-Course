
export default function TodoItem({ 
   id,
   text,
   isCompleted,
   onToggle
   }) {

    console.log(`${id} - > re-rernder`);
    
  return ( <li onClick={()=>onToggle(id)}
   style={isCompleted? 
   {textDecoration:'line-through'}
   : {}}>
  {text}
  </li>
   )
}
