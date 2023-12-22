


import React from "react";
import profileImg from "../imgs/profile.jpg"
// for local imgs cant give direct img src have to  import first online src link works

const About = ()=>{
    return (
        <div className="about">
        <h1 className="heading">About me</h1>
        <img className="profile" src={profileImg} alt="Profile"/>
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quis molestiae laborum quos suscipit, quidem aliquid provident maiores repudiandae ex veniam fugiat alias autem temporibus blanditiis deleniti. Saepe, voluptas recusandae.</p>
    </div>
    )
}

export default About;