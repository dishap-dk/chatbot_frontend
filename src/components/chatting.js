// import React, { useState } from "react";

// function Chatting() {

//   const [sender, setSender] = useState("");
//   const [Receiver, setReceiver] = useState("");
//   const [Content, setContent] = useState("");
//   const collect = async () => {
//     let result = await fetch("http://localhost:8080/chat", {
//       method: "post",
//       body: JSON.stringify({ sender, Receiver, Content }),
//       headers: {
//         "Content-Type": "application/json",
//       }
//     });
//     result = await result.json();

//     localStorage.setItem('user',JSON.stringify(result));
//   };

//   return (
//     <div>
//       <label className="label">senderId</label>
//       <input
//         className="inputBox"
//         type="text"
//         placeholder="enter senderID"
//         value={sender}
//         onChange={(e) => setSender(e.target.value)}
//       />
//       <br /> <br />
//       <label className="label">ReceiverId </label>
//       <input
//         className="inputBox"
//         type="text"
//         placeholder="enter ReceiverId"
//         value={Receiver}
//         onChange={(e) => setReceiver(e.target.value)}
//       />
//       <br />
//       <br />
//       <label className="label">Content </label>
//       <input
//         className="inputBox"
//         type="text"
//         placeholder="enter Message"
//         value={Content}
//         onChange={(e) => setContent(e.target.value)}
//       />
     
//       <br />
//       <br />
//       <button onClick={collect}>Submit</button>
//     </div>
//   );
// }

// export default Chatting;



// import React, { useState } from "react";

// function Chatting() {

//   const id = JSON.parse(localStorage.getItem('id'));
//   const [receiver, setReceiver] = useState("");
//   const [content, setContent] = useState("");
//   const [messages, setMessages] = useState([]);
//   const collect = async () => {
//     const messageData = { sender: id, receiver, content };
//     try {
//       const result = await fetch("http://localhost:8080/chat", {
//         method: "POST",
//         body: JSON.stringify(messageData),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const responseData = await result.json();
//       console.log(responseData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <label className="label">ReceiverId </label>
//       <input
//         className="inputBox"
//         type="number"
//         placeholder="enter ReceiverId"
//         value={receiver}
//         onChange={(e) => setReceiver(e.target.value)}
//       />
//       <br />
//       <br />
//       <label className="label">Content </label>
//       <input
//         className="inputBox"
//         type="text"
//         placeholder="enter Message"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//       />
     
//       <br />
//       <br />
//       <button onClick={collect}>Submit</button>
//       <div id="sent-messages">
//         {messages.map((message) => (
//           <div key={message.id}>
//             <p>Receiver ID: {message.receiver}</p>
//             <p>Message: {message.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
    
    
//   );
// }

// export default Chatting;



// import React, { useState } from "react";

// function Chatting() {
//   const userId = JSON.parse(localStorage.getItem("id"));
//   const [receiver, setReceiver] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = async () => {
//     const messageData = {
//       sender: userId,
//       receiver: parseInt(receiver),
//       content,
//     };

//     try {
//       const result = await fetch("http://localhost:8080/chat", {
//         method: "POST",
//         body: JSON.stringify(messageData),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const responseData = await result.json();
//       console.log(responseData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <label className="label">ReceiverId </label>
//       <input
//         className="inputBox"
//         type="number" // Change input type to number
//         placeholder="enter ReceiverId"
//         value={receiver}
//         onChange={(e) => setReceiver(e.target.value)}
//       />
//       <br />
//       <br />
//       <label className="label">Content </label>
//       <input
//         className="inputBox"
//         type="text"
//         placeholder="enter Message"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//       />

//       <br />
//       <br />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// export default Chatting;
import React, { useState, useEffect } from "react";
import NavBar2 from "./Navbar2";
import "../App.css"

function Chatting() {
  const userId = JSON.parse(localStorage.getItem("id"));
  const [receiver, setReceiver] = useState("");
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState([]);
  const [fetchMsg,setfetchMsg]= useState([])

  useEffect(() => {
    // Fetch the list of sent messages when the component mounts
    fetchSentMessages();
    // fetchReceivedMessages();
const timeoutId = setTimeout(fetchReceivedMessages, 2000);

// Clean up the timeout when the component unmounts
return () => clearTimeout(timeoutId);
}, []);
  const handleSubmit = async () => {
    const messageData = {
      sender: userId,
      receiver: parseInt(receiver),
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
      setfetchMsg([...fetchMsg,setfetchMsg])

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
    } catch (error) {
      console.error(error);
    }
  };
  const fetchReceivedMessages=async()=>{
    try{
      const result = await fetch(`http://localhost:8080/fetchMsg?Receiver=${receiver}`);
      const responseData = await result.json();
      setfetchMsg(responseData);
    }catch (error) {
      console.error(error);
    }
  }


  return (
    <div>
      <NavBar2/>
      <label className="label">ReceiverId </label>
      <input
        className="inputBox"
        type="number"
        placeholder="enter ReceiverId"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
      />
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
            <p>Receiver ID: {message.receiver}</p>
            <p>Message: {message.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

 export default Chatting;





