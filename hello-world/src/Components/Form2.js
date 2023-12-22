import React from "react";
import { useState } from "react";

const Form2 = () => {
  const [text, setText] = useState("");
  // const[btnClick, setBtnClick] = useState(false)
  const [btnClick, setBtnClick] = useState("");
  console.log("text===>", text);

  // function getValue(event){
  //     // console.log(event.target.value);
  //     setText(event.target.value)
  // }
  function implementSubmit(event) {
    event.preventDefault();
    // setBtnClick(true);
    setBtnClick(text); //storing text into clicked variable before reset
    setText("");
  }

  return (
    <div className="form1">
      <form onSubmit={implementSubmit} className="form">
        <label>Form2:</label>
        <input
          type="text"
          placeholder="Type anything..."
          onChange={(event) => {
            setText(event.target.value);
            setBtnClick(""); //removing prev text asoon as changes happen
          }}
          value={text}
        />
        <button type="submit">Submit</button>
      </form>

      <p>{btnClick}</p>

      {/*{
                btnClick==true?<p>{text}</p>:""
            }*/}
    </div>
  );
};

export default Form2;
