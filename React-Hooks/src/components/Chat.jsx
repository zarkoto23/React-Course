import { Avatar, List } from "antd";
const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];
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
        <List.Item.Meta
          avatar={<Avatar src={message.author} />}
          title={message.author}
          description={message.content}
        />
      </List.Item>
    )}
  />
);
export default Chat;
