import { useState } from "react";
import { HomeOutlined, MessageOutlined } from "@ant-design/icons";
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

];
const Navigation = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
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
