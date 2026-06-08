

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
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);

useEffect(() => {
  fetch("http://localhost:3001/conversations")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    setConversations(data); } )
    .catch((error) => console.log( error));
},[] );

const handleClick = (chat) => {
  setSelectedChat(chat);
  fetch(`http://localhost:3001/conversations/${chat.id}/messages`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Messages for chat", chat.id, ":", data);
      setMessages(data);
    });

return(
  <div style={{ display: "flex", gap: "20px"}}>
    {/*LEFT SIDE CONVERSATION */}
    <div style={{ width: "30%" }}>
    <h2>Conversations</h2>



    {conversations.map((item) => (
      <div key={item.id}
        onClick={() => handleClick(item)}
        style={{
          padding: "10px",
          border: "1px solid gray",
          margin: "5px",
          cursor: "pointer",
          background: selectedChat && selectedChat.id === item.id ? "#0b3d2e" : "transparent",
          color: selectedChat && selectedChat.id === item.id ? "white" : "black",
        }}
        >
        <h4>{item.name}</h4>
        </div>
      ))
       }
  </div>

  {/*RIGHT SIDE MESSAGES */ }
  <div style={{ width: "70%" }}>
    <h2>Messages</h2>
      {!selectedChat ?  (<p>Click a conversation</p>) : (
    
      messages.map((message) => (
        <div key={message.id} style={{ marginBottom: "10px" }}>
          <p>{message.text}</p>
        </div>
      ))
       ) }
    </div>
  </div>
  
);
} 

 }  
