


import React from "react";
import Button from "./Components/Button";
import CounterApp from "./Components/CounterApp";
import Objects from "./Components/Objects";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";
import FruitesArr from "./Components/FruitesArr";
import Lazyinitilization from "./Components/Lazyinitilization";

// const App =()=>{  //arrow function
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

const App = ()=>{
    return (
        <div>
           { /*<h1>Hello Fruits</h1>
            <Button 
            fruitName ="Banana"
            price ="50rs"
            desc ="This is Yellow fruit"
            />
            <Button 
            fruitName ="Apple"
            price ="80rs"
            desc ="This is Red fruit"
            />
    */   }

            {/*<CounterApp/>*/}
            <CounterApp/>

            <Objects/>

            <Form1/>

            <Form2/>
            
            <FruitesArr/>
            
            <Lazyinitilization/>
        
        </div>
    )
}

export default App