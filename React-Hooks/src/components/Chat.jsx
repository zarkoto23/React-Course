import { List } from "antd";

const Chat = ({ messages }) => (
  <List
    bordered={true}
    size="large"
    split={true}
    header={<h1>ChatChe</h1>}
    itemLayout="horizontal"
    dataSource={messages}
    renderItem={(message) => (
      <List.Item>
        <List.Item.Meta title={message.author} description={message.content} />
      </List.Item>
    )}
  />
);
export default Chat;
