// // export default Chatting;
// import React, { useState, useEffect } from "react";
// import NavBar2 from "./Navbar2";
// import "../App.css";

// function Chatting() {
//   const userId = JSON.parse(localStorage.getItem("id"));
//   const receiverId = JSON.parse(localStorage.getItem("receiverId"));
//   const [receiver, setReceiver] = useState("");
//   const [content, setContent] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [fetchMsg, setfetchMsg] = useState([]);
//   const [allMessages, setAllMessages] = useState([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       fetchSentMessages();
//       fetchReceivedMessages();
//     }, 5000);

//     fetchSentMessages();
//     fetchReceivedMessages();

//     return () => clearInterval(interval);
//   }, []);
//   useEffect(() => {
//     // setMessages([]);
//     setfetchMsg([]);
//   }, [receiverId,userId])

//   const handleSubmit = async () => {
//     const timestamp = new Date().getTime();
//     const messageData = {
//       sender: userId,
//       receiver: receiverId,
//       content,
//       timestamp,
//     }

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
//       console.log(timestamp)

//       setReceiver("");
//       setContent("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchSentMessages = async () => {
//     let content = {
//       senderId: userId,
//       receiverId: receiverId,
//     };
//     try {
//       const result = await fetch(`http://localhost:8080/fetchSentmsg`, {
//         method: "Post",
//         body: JSON.stringify(content),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const responseData = await result.json();
//       const sortedMessages = responseData.data.sort((a, b) => a.timestamp - b.timestamp);
//       setMessages(sortedMessages);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchReceivedMessages = async () => {
//     let content = {
//       senderId: receiverId,
//       receiverId: userId,
//     };
//     try {
//       const result = await fetch(`http://localhost:8080/fetchSentmsg`, {
//         method: "Post",
//         body: JSON.stringify(content),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const responseData = await result.json();
//       const sortedMessages = responseData.data.sort((a, b) => a.timestamp - b.timestamp);
//       setfetchMsg(sortedMessages);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     const allMsgs = [...messages, ...fetchMsg];
//     const sortedMessages = allMsgs.sort((a, b) => a.timestamp - b.timestamp);
//     setAllMessages(sortedMessages);
//   }, [messages, fetchMsg]);
//   console.log(userId,receiverId)
//   return (
//     <div
//       style={{
//         backgroundColor: "skyblue",
//         width: "400px",
//         height: "600px",
//         margin: "auto",
//       }}
//     >
//       <div className="Box">
//         <NavBar2 />

//         <br />
//         <br />
//         <label className="label">Content </label>
//         <input
//           className="inputBox"
//           type="text"
//           placeholder="enter Message"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />

//         <br />
//         <br />
//         <button
//           onClick={handleSubmit}
//           style={{ float: "right", marginTop: "-37px" }}
//         >
//           Submit
//         </button>
//         <div
//           id="sent-messages"
//           className="div"
//           style={{
//             backgroundColor: "#b3a8c0",
//             width: "250px",
//             height: "500px",
//             marginTop: "-500px",
//             marginLeft: "150px",
//           }}
//         >
//           {messages &&
//             messages.length > 0 &&
//             messages.map((message) => (
//               <div key={message.id}>
//                 <p>Me:{message.content}</p>
//               </div>
//             ))}
//           {fetchMsg &&
//             fetchMsg.length > 0 &&
//             fetchMsg.map((Msg) => (
//               <div key={Msg.id}>
//                 <p>receivedmessage:{Msg.content}</p>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );



// }
// export default Chatting;

// // const [message, newMessages] = useState([]);
//   // const [id, setId] = useState("");
//   // useEffect(() => {
//   //   // Define the interval function
//   //   const interval = setInterval(() => {
//   //     fetchSentMessages();
//   //     fetchReceivedMessages();
//   //   }, 5000);

//   //   // Call the fetch functions initially
//   //   fetchSentMessages();
//   //   fetchReceivedMessages();

//   //   // Clear the interval when the component unmounts
//   //   return () => clearInterval(interval);
//   // }, []);

//   // const handleSubmit = async () => {
//   //   const messageData = {
//   //     sender: userId,
//   //     receiver: receiverId,
//   //     content,
//   //   }

//   //   try {
//   //     const result = await fetch("http://localhost:8080/chat", {
//   //       method: "POST",
//   //       body: JSON.stringify(messageData),
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //     });
//   //     const responseData = await result.json();
//   //     console.log(responseData);

//   //     // Add the new message to the list of sent messages
//   //     // setMessages([...messages, messageData]);
//   //     // setfetchMsg([...fetchMsg, messageData]);

//   //     // Clear the form inputs after submitting the message
//   //     setReceiver("");
//   //     setContent("");
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   // const fetchSentMessages = async () => {
//   //   let content = {
//   //     senderId: userId,
//   //     receiverId: receiverId,
//   //   };
//   //   try {
//   //     const result = await fetch(`http://localhost:8080/fetchSentmsg`, {
//   //       method: "Post",
//   //       body: JSON.stringify(content),
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //     });
//   //     console.log(userId);
//   //     console.log(receiverId);
//   //     const responseData = await result.json();

//   //     setMessages(responseData.data);
//   //     console.log(responseData);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };
//   // const fetchReceivedMessages = async () => {
//   //   let content = {
//   //     senderId: receiverId,
//   //     receiverId: userId,
//   //   };
//   //   try {
//   //     const result = await fetch(`http://localhost:8080/fetchSentmsg`, {
//   //       method: "Post",
//   //       body: JSON.stringify(content),
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //     });
//   //     console.log(receiverId);
//   //     console.log(userId);
//   //     const responseData = await result.json();
//   //     setfetchMsg(responseData.data);
//   //     console.log(responseData);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   // write one to one chat process?


// /*import React, { useState, useEffect } from "react";
// import NavBar2 from "./Navbar2";
// import "../App.css";

// function Chatting() {
//   const userId = JSON.parse(localStorage.getItem("id"));
//   const receiverId = JSON.parse(localStorage.getItem("receiverId"));
//   const [receiver, setReceiver] = useState("");
//   const [content, setContent] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [fetchMsg, setfetchMsg] = useState([]);
//   const [allMessages, setAllMessages] = useState([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       fetchSentMessages();
//       fetchReceivedMessages();
//     }, 5000);

//     fetchSentMessages();
//     fetchReceivedMessages();

//     return () => clearInterval(interval);
//   }, []);
//   useEffect(() => {
//     // setMessages([]);
//     setfetchMsg([]);
//   }, [receiverId,userId])

//   const handleSubmit = async () => {
//     const timestamp = new Date().getTime();
//     const messageData = {
//       sender: userId,
//       receiver: receiverId,
//       content,
//       timestamp,
//     }

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

//       setReceiver("");
//       setContent("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchSentMessages = async () => {
//     let content = {
//       senderId: userId,
//       receiverId: receiverId,
//     };
//     try {
//       const result = await fetch(`http://localhost:8080/fetchSentmsg`, {
//         method: "Post",
//         body: JSON.stringify(content),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const responseData = await result.json();
//       const sortedMessages = responseData.data.sort((a, b) => a.timestamp - b.timestamp);
//       setMessages(sortedMessages);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchReceivedMessages = async () => {
//     let content = {
//       senderId: receiverId,
//       receiverId: userId,
//     };
//     try {
//       const result = await fetch(`http://localhost:8080/fetchSentmsg`, {
//         method: "Post",
//         body: JSON.stringify(content),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const responseData = await result.json();
//       const sortedMessages = responseData.data.sort((a, b) => a.timestamp - b.timestamp);
//       setfetchMsg(sortedMessages);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     const allMsgs = [...messages, ...fetchMsg];
//     const sortedMessages = allMsgs.sort((a, b) => a.timestamp - b.timestamp);
//     setAllMessages(sortedMessages);
//   }, [messages, fetchMsg]);
//   console.log(userId,receiverId)
//   return (
//     <div
//       style={{
//         backgroundColor: "skyblue",
//         width: "400px */


import React, { useState, useEffect } from "react";
import NavBar2 from "./Navbar2";
import "../App.css";

function Chatting() {
  const userId = JSON.parse(localStorage.getItem("id"));
  const receiverId = JSON.parse(localStorage.getItem("receiverId"));
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState([]);
  const [fetchMsg, setfetchMsg] = useState([]);
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchSentMessages();
      fetchReceivedMessages();
    }, 5000);

    fetchSentMessages();
    fetchReceivedMessages();

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    const timestamp = new Date().getTime();
    const messageData = {
      sender: userId,
      receiver: receiverId,
      content,
      timestamp,
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
      console.log(timestamp);

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
      const responseData = await result.json();
      const sortedMessages = responseData.data.sort((a, b) => a.timestamp - b.timestamp);
      setMessages(sortedMessages);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchReceivedMessages = async () => {
    let content = {
      senderId: receiverId,
      receiverId: userId
    };
    try {
      const result = await fetch(`http://localhost:8080/fetchSentmsg`, {
        method: "Post",
        body: JSON.stringify(content),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await result.json();
      // console.log(responseData.data)
      const receivedMessages = responseData.data.filter(message => message.sender === receiverId && message.Receiver === userId)
     
      const sortedMessages = receivedMessages.sort((a, b) => a.timestamp - b.timestamp);
      // console.log(sortedMessages)
      setfetchMsg(sortedMessages);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const allMsgs = [...messages, ...fetchMsg];
    const sortedMessages = allMsgs.sort((a, b) => a.timestamp - b.timestamp);
    setAllMessages(sortedMessages);
  }, [messages, fetchMsg]);

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
          onChange={(e) =>setContent(e.target.value)}
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
            height: "500px",
            marginTop: "-500px",
            marginLeft: "150px",
          }}
        >
          {allMessages.map((message) =>
            <div key={message.id}>
               {/* message.sender === userId ?  */}
              {
                <><p>Me: {message.content}</p><p>Received message: {message.content}</p></>
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chatting;
