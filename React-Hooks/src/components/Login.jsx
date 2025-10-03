import { Button, Input } from "antd";
import useForm from "../hooks/useForm";
import { SendOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { userContext } from "./contexts/UserContext";
import { useContext } from "react";

export default function Login() {
  const { userLoginHandler } = useContext(userContext);

  const navigate = useNavigate();
  const initalFormState = {
    username: "",
    password: "",
  };

  const { changeHandler, submitHandler, values } = useForm((values) => {
    userLoginHandler(values.username);
    navigate("/send");
  }, initalFormState);

  return (
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
  );
}
