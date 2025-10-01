import { Button, Input, message } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function Send() {
  const [messageApi, contextHolder] = message.useMessage();

  const formSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const msg = formData.get("msg");
    console.log(msg);

    await fetch("http://localhost:3030/jsonstore/messenger", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        author: "Ui",
        content: msg,
      }),
    });

    messageApi.open({
      type: "success",
      content: 'Success!',
    });
  };

  return (
    <>
      {contextHolder}
      <form onSubmit={formSubmit}>
        <br />
        <br />
        <br />
        <br />
        <Input
          size="large"
          name="msg"
          placeholder="username"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <br />
        <br />
        <Button type="primary" htmlType="submit">
          SendMessage
        </Button>
      </form>
    </>
  );
}
