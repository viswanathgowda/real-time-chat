import React, { useState, useEffect } from "react";
import Messgeinput from "../components/Messgeinput";
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
      <Messgeinput socket={socket} />
      <Chatwindow socket={socket} />
    </div>
  );
}

export default Chat;
