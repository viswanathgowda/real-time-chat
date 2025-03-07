import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const gotoChat = () => {
    return navigate("/chat");
  };

  return (
    <div>
      <h1>Welcome to Real time Chat</h1>
      <button onClick={gotoChat}>Go to Chat</button>
    </div>
  );
}

export default Home;
