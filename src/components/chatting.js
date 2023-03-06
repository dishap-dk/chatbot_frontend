import React, { useState } from "react";

function Chatting() {

  const [sender, setSender] = useState("");
  const [Receiver, setReceiver] = useState("");
  const [msg, setMsg] = useState("");
  const collect = async () => {
    let result = await fetch("http://localhost:8080/chat", {
      method: "post",
      body: JSON.stringify({ sender, Receiver, msg }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem('user',JSON.stringify(result));
  };

  return (
    <div>
      <label className="label">senderId</label>
      <input
        className="inputBox"
        type="text"
        placeholder="enter senderID"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
      />{" "}
      <br /> <br />
      <label className="label">ReceiverId </label>
      <input
        className="inputBox"
        type="text"
        placeholder="enter ReceiverId"
        value={Receiver}
        onChange={(e) => setReceiver(e.target.value)}
      />{" "}
      <br />
      <br />
      <label className="label">Message </label>
      <input
        className="inputBox"
        type="text"
        placeholder="enter Message"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />{" "}
      <br />
      <br />
      <button onClick={collect}>Submit</button>
    </div>
  );
}

export default Chatting;
