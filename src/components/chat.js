import React, { useEffect, useState } from "react";
// import axios from "axios"
function Chat() {
  const [result, setresult] = useState([]);

  useEffect(() => {
    const getChat = async () => {
      let res = await fetch("http://localhost:8080/getAllDetails", {});

      res = await res.json();

      setresult(res.data);
      console.log(res.data);
    };
    getChat();
  }, []);

  return (
    <div className="chat">
      <h1>Heeloo This is Chat Page</h1>
      <ul>
        <li> s.id </li>
        <li> SenderName </li>
        <li> Recipient </li>
        <li> content </li>

        <li> At </li>
      </ul>

      {result &&
        result.length > 0 &&
        result.map((list, index) => {
          return (
            <ul key={index}>
              <li>{list.id}</li>
              <li>{list.senderName}</li>
              <li>{list.Recipient}</li>
              <li>{list.content}</li>
              <li>{list.At}</li>
            </ul>
          );
        })}
    </div>
  );
}
export default Chat;
