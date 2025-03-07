import React, { useState, useEffect } from "react";
import Chatwindow from "../components/Chatwindow";

function Chat() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    return () => ws.close;
  }, []);

  return (
    <div>
      <h1>Happy Chatting!</h1>
      <Chatwindow socket={socket} />
    </div>
  );
}

export default Chat;
