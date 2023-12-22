


import React from "react";

const Section = ({title, description})=>{
    return (
        <div className="section about">
        <hr/>
            <h1 className="heading">{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Section;