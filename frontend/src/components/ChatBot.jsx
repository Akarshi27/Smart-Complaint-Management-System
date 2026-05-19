import { useState } from "react";
import API from "../services/api";

function ChatBot() {
  const [message, setMessage] = useState("");

  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    try {
      const response = await API.post(
        "/chat",
        {
          message,
        }
      );

      setReply(response.data.botReply);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chatbot">
      <h2>AI Chatbot</h2>

      <input
        type="text"
        placeholder="Enter complaint..."
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
      />

      <button onClick={sendMessage}>
        Send
      </button>

      {reply && (
        <div className="reply">
          <b>Bot:</b> {reply}
        </div>
      )}
    </div>
  );
}

export default ChatBot;