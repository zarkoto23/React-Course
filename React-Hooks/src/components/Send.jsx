import { Button, Input, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import useForm from "../hooks/useForm";

export default function Send() {
    const [messageApi, contextHolder] = message.useMessage();
    
      const formSubmit = async (values) => {
    await fetch("http://localhost:3030/jsonstore/messenger", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        author: "Ui",
        content: values.message,
      }),
    });

    messageApi.open({
      type: "success",
      content: 'Done!',
    });
  };
    
    const {values, changeHandler, submitHandler}= useForm({
        message:'',
        author:''
    },formSubmit)




  return (
    <>
        {contextHolder}
      <form onSubmit={submitHandler}>
        <br />
        <br />
        <br />
        <br />
        <Input
          size="large"
          name="message"
          onChange={changeHandler}
          value={values.message}
          placeholder="username"
          prefix={<UserOutlined />}
          />
        <br />
        <br />
            {/* <Input
          size="large"
          name="author"
          onChange={changeHandler}
          value={values.author}
          placeholder="password"
          prefix={<UserOutlined />}
          /> */}
        <br />
        <br />
        <Button type="primary" htmlType="submit">
          SendMessage
        </Button>
      </form>
    </>
  );
}
