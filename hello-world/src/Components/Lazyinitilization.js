




import React,{useState} from "react";
import Button from "./Button";

// function hello (){
//     console.log("Hello");
//     return 0;
// }
const Lazyinitilization = ()=>{

    // const [count, setCount] = useState(0);  //this useState(0) is for initial purpose 
                                                //but this is executing again and again 
    // const [count, setCount] = useState(hello());  
    // const [count, setCount] = useState(()=>hello());  
    const [count, setCount] = useState(()=>{
        console.log("hello");       //by passing a callback to usestate that return 
        return 0                     //initial value, now it'll not execute again and 
                                    //again only one time, this is called lazy initilization
    });  


    return (
        <div className="lazy">
            <h1>Count: {count}</h1>
            <button onClick={e=>setCount(count+1)}>Increase</button>
        </div>
    )
}

export default Lazyinitilization;