import { Button, Input } from "antd";
import useForm from "../hooks/useForm";
import { SendOutlined } from "@ant-design/icons";


export default function Login() {
    const initalFormState={
        username:'',
        password:''
    }
    

    const {changeHandler, submitHandler, values}=useForm((values)=>{
        console.log(values);
        

    },initalFormState)

  return(
    <form onSubmit={submitHandler}>
        <Input
        size="large"
          name="username"
          onChange={changeHandler}
          value={values.username}
          prefix={<SendOutlined />}
          placeholder="Username"
         />

            <Input
           size="large"
          placeholder="Password"

          name="password"
          type="password"
          onChange={changeHandler}
          value={values.password}
          prefix={<SendOutlined />}
         />

                 <Button type="primary" htmlType="submit">
          Login
        </Button>
    </form>
    
)
}