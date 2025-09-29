import { Spin } from "antd"
import Chat  from "./components/Chat"
import useFetch from "./hooks/useFetch"

const url='http://localhost:3030/jsonstore/messenger'

function App() {
  const [pending, messages ]=useFetch(url,[])

  return (
    <>
    {pending
    ?
  <Spin 
  fullscreen={true}
  size="large"
 />
  :
  <Chat messages={messages} />
    }
    </>
  )
}

export default App
