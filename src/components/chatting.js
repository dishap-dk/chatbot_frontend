

// export default Chatting;
import React, { useState, useEffect } from "react";
import NavBar2 from "./Navbar2";
import "../App.css"

function Chatting() {
  const userId = JSON.parse(localStorage.getItem("id"));
  const receiverId = JSON.parse(localStorage.getItem("receiverId"))
  const [receiver, setReceiver] = useState("");
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState([]);
  const [fetchMsg,setfetchMsg]= useState([])

  useEffect(() => {
    // Fetch the list of sent messages when the component mounts
    fetchSentMessages();
//  const interValId = setInterval(() => {


const intervalId = setInterval(() => {
  fetchReceivedMessages()
    .then((msgs) => {
      // console.log(msgs)
      setfetchMsg(msgs.data);
    })
    .catch((error) => {
      console.error("Error fetching received messages:", error);
    });
}, 10000);
  fetchReceivedMessages();
//  }, 100000);

// return()=>clearInterval(interValId)

return () => clearInterval(intervalId);
}, []);
  const handleSubmit = async () => {
    const messageData = {
      sender: userId,
      receiver: receiverId,
      content,
    };

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
      setMessages([...messages, messageData]);
      setfetchMsg([...fetchMsg,messageData])

      // Clear the form inputs after submitting the message
      setReceiver("");
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSentMessages = async () => {
    try {
      const result = await fetch(`http://localhost:8080/getUserMsg?sender=${userId}`);
      const responseData = await result.json();
      setMessages(responseData);
      console.log(responseData)
    } catch (error) {
      console.error(error);
    }
  };
  const fetchReceivedMessages=async()=>{
    try{
      const result = await fetch(`http://localhost:8080/fetchMsg/${receiverId}`);
      const responseData = await result.json();
      setfetchMsg(responseData);
      console.log(responseData)
    }catch (error) {
      console.error(error);
    }
    // setTimeout(fetchReceivedMessages,50000)
  }


  return (
    <div>
      <NavBar2/>
      {/* <label className="label">ReceiverId </label>
      <input
        className="inputBox"
        type="number"
        placeholder="enter ReceiverId"
        value={receiver}
        onChange={(e) => setReceiver()} */}
      {/* /> */}
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
      <button onClick={handleSubmit}>Submit</button>

      {/* Display the list of sent messages */}
      <div id="sent-messages" className="div">
        {messages.map((message) => (
          <div key={message.id}>
            {/* <p>Receiver ID: {message.receiverId}</p> */}
            <p>Message: {message.content}</p>
          </div>
        ))}
      </div>

      <div id="reeceived">
    { Array.isArray(fetchMsg) && fetchMsg.map((Msg)=>(
          <div key={Msg.id}>
            <p>receivedmessage:{Msg.content}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

 export default Chatting;





