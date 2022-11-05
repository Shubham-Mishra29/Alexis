import React from 'react'
import { useState } from 'react';
import './DropMessage.css';
import validator from "validator";

const DropMessage = () => {
const [validmessage, setValidMessage] = useState("");
const [Name, setName] = useState("");
const [Email, setEmail] = useState("");
const [Message, setMessage] = useState("");



const validateEmail = (e) => {
    var email = e.target.value;
    setEmail(e.target.value);
    if (validator.isEmail(email)) {
      setValidMessage("");
    } else {
      setValidMessage("Please, enter valid Email!");
    }
  };


  return (
    <div className="dropmessage">
        <div className="main">
            <div className="top">
                <div className="heading">Drop A Message</div>
                <div className="bar"></div>
            </div>

            <div className="bottom">
                <div className="nameandemail">
                    <input type="text" name='name' className='name' placeholder='Name*' value={Name} onChange = {(e) => setName(e.target.value)}/> 
                    <input type="text" name='email' className='email' placeholder='E-mail*' value={Email} onChange={(e) => validateEmail(e)}/>                    
                </div>
                    <span
                    style={{
                    fontWeight: "bold",
                    color: "red",
                    position : "relative",
                    left : "18rem"
                    }}
                    >
                    {validmessage}
                    </span>                
                <div >
                <textarea className="messageText" name="" id="" cols="30" rows="10" placeholder='Message*' value={Message} onChange = {(e) => setMessage(e.target.value)}></textarea>
                </div>
                <div className="messagebox"><button className='sendmsg'><span>Send message</span></button></div>
            </div>
        </div>
    </div>
  )
}

export default DropMessage