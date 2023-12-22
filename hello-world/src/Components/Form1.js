import React from "react";
import { useState } from "react";

const Form1 = () => {
  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");

  function getValue(event) {
    // console.log(event.target.value);
    // setText(event.target.value)
    setText(`${event.target.value}`);
    
  }
  return (
    <div className="form1">
      <form className="form">
        <label>Form1: </label>
        <input type="text" placeholder="Type anything..." onChange={getValue} />
       
        {
          text != "" ?  <p>Hello {text} !</p> : ""
        }
      </form>
    </div>
  );
};

export default Form1;
