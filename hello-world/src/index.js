

import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
import App from "./App";
// import Hello from "./App.js";


/*

// this is function (Function starts with small letter)
// function hello(){
//     return "Hello-World"
// }
// Hello();  //this is way of calling the function

// This is componenet(componenet starts with Captial letter)
// function Hello (){  //normal function
//     return <h1>Hello-Worlds</h1>   
// // }
// const Hello =()=>{  //arrow function
//     // return <h1>Hello-World</h1>     //only one statement at a time
//     let a = 10;

//     let pStyle = {
//         color:"tomato",
//         backgroundColor:"black"
//     }
//     return (
//         // jsx not pure html
//         <div classname = "hello">
//             <h1 style={{color:"red", backgroundColor:"green"}}>Hello World</h1>
//             <p style={pStyle}>This is a variable {a}</p>
//         </div>
//     )
// }

// <Hello></Hello>    //this is way of calling the componenet either this 
// <Hello/>       //or this
*/


const root =  document.getElementById("root");
ReactDOM.render(<App/>, root);
// ReactDOM.render(<Hello></Hello>, document.getElementById("root"));