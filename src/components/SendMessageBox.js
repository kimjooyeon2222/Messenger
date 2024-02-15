import { useState } from "react";

function SendMessageBox({ sender, addMessage }) {

  //input에서의 mes
  const [mes, setMes] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setMes(event.target.value);
  }

  function sendMes() {
    if (mes !== "") {
      addMessage(sender, mes);
      setMes("");
    }
  }

  return (
    <div>
      <span id="Span">{sender === "Me" ? "Me:" : "Friend:"}</span>
      <input
        id="Input"
        value={mes}
        onChange={handleChange}
      />
      <button id="Button" onClick={sendMes}>Send</button>
    </div>
  );
}

export default SendMessageBox;
