import { Button, Input, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { userContext } from "./contexts/UserContext";

export default function Send() {

    const [loading, setLoading]=useState(false)
  const { user } = useContext(userContext);

  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const formSubmit = async (values) => {
    setLoading(true)
    await fetch("http://localhost:3030/jsonstore/messenger", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        author: user,
        content: values.message,
      }),
    });

    messageApi.open({
      type: "success",
      content: "Done!",
    });
    
     setLoading(false)
    

    // navigate("/chat");
  };

  const { values, changeHandler, submitHandler } = useForm(formSubmit, {
    message: "",
    author: "",
  });

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
        <Button type="primary" htmlType="submit" disabled={loading}>
          SendMessage
        </Button>
      </form>
    </>
  );
}
