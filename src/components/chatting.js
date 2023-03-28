// export default Chatting;
import React, { useState, useEffect } from "react";
import NavBar2 from "./Navbar2";
import "../App.css";

function Chatting() {
  const userId = JSON.parse(localStorage.getItem("id"));
  const receiverId = JSON.parse(localStorage.getItem("receiverId"));
  const [receiver, setReceiver] = useState("");
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState([]);
  const [fetchMsg, setfetchMsg] = useState([]);
  // const [id, setId] = useState("");

  useEffect(() => {
  
const fetchSent= setInterval(()=>{
  fetchSentMessages()
  .then ((setMessages)=>{
    setMessages(messages)
  })
  .catch((error)=>{
    console.error("Error fetching sent messages:", error);
  })
},100000)

    const intervalId = setInterval(() => {
      fetchReceivedMessages()
        .then((setfetchMsg) => {
          setfetchMsg(fetchMsg);
        })
        .catch((error) => {
          console.error("Error fetching received messages:", error);
        });
    }, 100000);
    fetchReceivedMessages();
    fetchSent()

    return () => {clearInterval(intervalId);
    return () => clearInterval(fetchSent);
    }
  }, []);
  const handleSubmit = async () => {
    const messageData = {
      sender: userId,
      receiver: receiverId,
      content,
    }

    try {
      const result = await fetch("http://localhost:8080/chat", {
        method: "POST",
        body: JSON.stringify(messageData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await result.json();
      console.log(responseData);

      // Add the new message to the list of sent messages
      // setMessages([...messages, messageData]);
      // setfetchMsg([...fetchMsg, messageData]);

      // Clear the form inputs after submitting the message
      setReceiver("");
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSentMessages = async () => {
    let content = {
      senderId: userId,
      receiverId: receiverId,
    };
    try {
      const result = await fetch(`http://localhost:8080/fetchSentmsg`, {
        method: "Post",
        body: JSON.stringify(content),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(userId);
      console.log(receiverId);
      const responseData = await result.json();

      setMessages(responseData.data);
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchReceivedMessages = async () => {
    let content = {
      senderId: receiverId,
      receiverId: userId,
    };
    try {
      const result = await fetch(`http://localhost:8080/fetchSentmsg`, {
        method: "Post",
        body: JSON.stringify(content),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(receiverId);
      console.log(userId);
      const responseData = await result.json();
      setfetchMsg(responseData.data);
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "skyblue",
        width: "400px",
        height: "600px",
        margin: "auto",
      }}
    >
      <div className="Box">
        <NavBar2 />

        <br />
        <br />
        <label className="label">Content </label>
        <input
          className="inputBox"
          type="text"
          placeholder="enter Message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <br />
        <br />
        <button
          onClick={handleSubmit}
          style={{ float: "right", marginTop: "-37px" }}
        >
          Submit
        </button>
        <div
          id="sent-messages"
          className="div"
          style={{
            backgroundColor: "#b3a8c0",
            width: "250px",
            height: "300px",
            marginTop: "-300px",
            marginLeft: "150px",
          }}
        >
          {messages &&
            messages.length > 0 &&
            messages.map((message) => (
              <div key={message.id}>
                <p>Me:{message.content}</p>
              </div>
            ))}

          {fetchMsg &&
            fetchMsg.length > 0 &&
            fetchMsg.map((Msg) => (
              <div key={Msg.id}>
                <p>receivedmessage:{Msg.content}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Chatting;
