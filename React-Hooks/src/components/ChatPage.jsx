const url = "http://localhost:3030/jsonstore/messenger";

import useFetch from "../hooks/useFetch";

import Chat from "./Chat";

import { Spin } from "antd";

export default function ChatPage() {
  const [pending, messages] = useFetch(url, []);

  if (pending) {
    return <Spin fullscreen={true} size="large" />;
  }

  return <Chat messages={messages} />;
}
