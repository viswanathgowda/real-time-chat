import React, { useEffect, useState } from "react";

function Chatwindow({ socket }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = async (event) => {
      console.log(event);
      const text = await event.data.text();
      setMessages((prev) => [...prev, text]);
    };
  }, [socket]);
  return (
    <div>
      {messages.map((m, i) => (
        <div key={i}>{m}</div>
      ))}
    </div>
  );
}

export default Chatwindow;
