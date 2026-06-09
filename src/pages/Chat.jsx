

//const conversations = [
  //{
    //id: 1,
    //name: "SolarTech Ltd",
    //unread: 2,
    //messages: [
      //{
        //id: 1,
        //sender: "them",
        //text: "Hello! How can we help you?",
        //read: true,
      //},
      //{
        //id: 2,
        //sender: "me",
        //text: "I'd like a quote for a 3-bedroom house.",
        //read: true,
      //},
    //],
  //},
  //{
    //id: 2,
    //name: "GreenLight Solar",
    //unread: 1,
    //messages: [
      //{
        //id: 1,
        //sender: "them",
        //text: "Good afternoon. How may we assist you?",
        //read: false,
      //},
    //],
  //},
//];

//export default function Chat() {
  //const [selectedChat, setSelectedChat] = useState(conversations[0]);
  //const [newMessage, setNewMessage] = useState("");

  //const sendMessage = () => {
    //if (!newMessage.trim()) return;

    //const message = {
      //id: Date.now(),
      //sender: "me",
      //text: newMessage,
      //read: false,
    //};

    //setSelectedChat({
      //...selectedChat,
      //messages: [...selectedChat.messages, message],
    //});

    //setNewMessage("");
  //};

  //return (
    //<div className="chat-container">
      //<aside className="chat-sidebar">
        //<h2>Messages</h2>

        //{conversations.map((chat) => (
          //<div
            //key={chat.id}
            //className={`conversation ${
              //selectedChat.id === chat.id ? "active" : ""
            //}`}
            //onClick={() => setSelectedChat(chat)}
          //>
            //<span>{chat.name}</span>

            //{chat.unread > 0 && (
              //<span className="badge">{chat.unread}</span>
            //)}
          //</div>
        //))}
      //</aside>

      //<section className="chat-window">
        //<div className="chat-header">
          //<h3>{selectedChat.name}</h3>
        //</div>

        //<div className="messages">
          //{selectedChat.messages.map((message) => (
            //<div
              //key={message.id}
              //className={`message ${message.sender}`}
            //>
              //<p>{message.text}</p>

              //{message.sender === "me" && (
                //<small>
                  //{message.read ? "Seen" : "Delivered"}
                //</small>
              //)}
            //</div>
          //))}
        //</div>

        //<div className="chat-input">
          //<input
            //type="file"
            //accept=".pdf,image/*"
          ///>

          //<input
            //type="text"
            //placeholder="Type a message..."
            //value={newMessage}
            //onChange={(e) => setNewMessage(e.target.value)}
          ///>

          //<button onClick={sendMessage}>
            //Send
          //</button>
        //</div>
      //</section>
    //</div>
  //);
//}


// REVISED CODE WITH API INTEGRATION
import { useEffect, useState } from "react";
import "./Chat.css";

export default function Chat() {
  const [conversations, setConversations] = useState([]);
  const [allMessages, setAllMessages] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Fetch conversations and all messages
    Promise.all([
      fetch("http://localhost:3001/conversations").then((res) => res.json()),
      fetch("http://localhost:3001/messages").then((res) => res.json()),
    ])
      .then(([conversationsData, messagesData]) => {
        console.log("Conversations:", conversationsData);
        console.log("All Messages:", messagesData);
        setConversations(conversationsData);
        setAllMessages(messagesData);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  const handleClick = (chat) => {
    setSelectedChat(chat);
    setIsMobileMenuOpen(false); // Close mobile menu when chat is selected
  };

  // Get messages for selected chat
  const getMessagesForChat = () => {
    if (!selectedChat) return [];
    return allMessages.filter((msg) => msg.conversationId === selectedChat.id);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;

    const message = {
      id: Date.now(),
      conversationId: selectedChat.id,
      sender: "me",
      text: newMessage,
    };

    setAllMessages([...allMessages, message]);
    setNewMessage("");
  };

  const chatMessages = getMessagesForChat();

  return (
    <div className="chat-container">
      {/* Mobile Menu Toggle */}
      <button 
        className="mobile-menu-toggle" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>

      {/* LEFT SIDE CONVERSATION */}
      <div className={`chat-sidebar ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <h2>Conversations</h2>

        {conversations.length === 0 ? (
          <p>Loading conversations...</p>
        ) : (
          conversations.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClick(item)}
              className={`conversation-item ${
                selectedChat && selectedChat.id === item.id ? "active" : ""
              }`}
            >
              <h4>{item.name}</h4>
            </div>
          ))
        )}
      </div>

      {/* RIGHT SIDE MESSAGES */}
      <div className="chat-messages">
        {!selectedChat ? (
          <div className="empty-state">
            <p>👈 Select a conversation to start chatting</p>
          </div>
        ) : (
          <>
            <div className="chat-header">
              <h3>{selectedChat.name}</h3>
            </div>

            <div className="messages-container">
              {chatMessages.length === 0 ? (
                <p className="no-messages">No messages yet. Start the conversation!</p>
              ) : (
                chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`message ${message.sender}`}
                  >
                    <p>{message.text}</p>
                  </div>
                ))
              )}
            </div>

            <div className="chat-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 

   
