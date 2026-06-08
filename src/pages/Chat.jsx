import { useState } from "react";
import "./Chat.css";

const conversations = [
  {
    id: 1,
    name: "SolarTech Ltd",
    unread: 2,
    messages: [
      {
        id: 1,
        sender: "them",
        text: "Hello! How can we help you?",
        read: true,
      },
      {
        id: 2,
        sender: "me",
        text: "I'd like a quote for a 3-bedroom house.",
        read: true,
      },
    ],
  },
  {
    id: 2,
    name: "GreenLight Solar",
    unread: 1,
    messages: [
      {
        id: 1,
        sender: "them",
        text: "Good afternoon. How may we assist you?",
        read: false,
      },
    ],
  },
];

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now(),
      sender: "me",
      text: newMessage,
      read: false,
    };

    setSelectedChat({
      ...selectedChat,
      messages: [...selectedChat.messages, message],
    });

    setNewMessage("");
  };

  return (
    <div className="chat-container">
      <aside className="chat-sidebar">
        <h2>Messages</h2>

        {conversations.map((chat) => (
          <div
            key={chat.id}
            className={`conversation ${
              selectedChat.id === chat.id ? "active" : ""
            }`}
            onClick={() => setSelectedChat(chat)}
          >
            <span>{chat.name}</span>

            {chat.unread > 0 && (
              <span className="badge">{chat.unread}</span>
            )}
          </div>
        ))}
      </aside>

      <section className="chat-window">
        <div className="chat-header">
          <h3>{selectedChat.name}</h3>
        </div>

        <div className="messages">
          {selectedChat.messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender}`}
            >
              <p>{message.text}</p>

              {message.sender === "me" && (
                <small>
                  {message.read ? "Seen" : "Delivered"}
                </small>
              )}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="file"
            accept=".pdf,image/*"
          />

          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />

          <button onClick={sendMessage}>
            Send
          </button>
        </div>
      </section>
    </div>
  );
}