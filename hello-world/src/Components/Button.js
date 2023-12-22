


import React from "react"


// either like this without destructring 
// const Button = (props)=>{ 
     
//     // props will recieve in form of object "readOnly"
//     // console.log(props); => {fruitName :"Banana"}
//         return (
//             // <button>{props.fruitName}</button>
//             <div>
//             <h1>{props.fruitName}</h1>
//             <p>{props.price}</p>
//             <p>{props.desc}</p>
            
//             </div>
//         )
// }
// let props = {fruitName:"Banana", price:"50rs", desc:"This is yellow fruit"};
// let {fruitName,price,desc} = props;

// after destructring
const Button = ({fruitName,price,desc})=>{ 
        return (
            <div>
                <button>{fruitName}</button>
                <p>{price}</p>
                <p>{desc}</p>
            </div>
        )
}

export default Button;