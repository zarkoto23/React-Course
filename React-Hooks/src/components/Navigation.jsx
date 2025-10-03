import { useState } from "react";
import { HomeOutlined, LoginOutlined, MessageOutlined, SendOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router";
const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "home",
    icon: <HomeOutlined />,
    // danger: true,
  },
  {
    label: <Link to="/chat">Chat</Link>,

    key: "chat",
    icon: <MessageOutlined />,
  },
    {
    label: <Link to="/send">Send</Link>,

    key: "send",
    icon: <SendOutlined />,
  },
  {
    label: <Link to="/login">Login</Link>,

    key: "login",
    icon: <LoginOutlined />,
  },

];
const Navigation = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Navigation;
