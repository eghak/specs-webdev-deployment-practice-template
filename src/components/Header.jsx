import React from "react";
import { useState } from "react";
import axios from "axios";

function Header() {
  const [text, setText] = useState([]);

  function getText() {
    axios.get("http://localhost:4050/api/get").then((res) => {
      console.log(res.data);
      setText(res.data);
    });
  }
  return (
    <div>
      <h1>Header</h1>
      <button onClick={getText}>Get Text</button>
      {text.map((item) => {
        return <h1 style={{ color: "yellow" }}>{item.text}</h1>;
      })}
    </div>
  );
}

export default Header;
