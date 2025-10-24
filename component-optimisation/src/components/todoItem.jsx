export default function TodoItem({ 
   id,
   text,
   isCompleted,
   onToggle
   }) {
  return <li onClick={onToggle}>{text}</li>;
}
