import React, { useState } from "react";

function Chatwindow({ socket }) {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.send(message);
      setMessage("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chatwindow;
