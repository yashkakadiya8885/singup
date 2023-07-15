import React, { useState } from "react";

const Signup = ()=>{
    let[name,setName]=useState('')
    
    let[email,setEmail]=useState('')
    let[number,setNumber]=useState('')
    let[password,setPassword]=useState('')

    return(
        <div>
            <h1 className="h-text">SIGN-UP</h1>
            <form>
                <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
                {/* <br /> */}
                <input type="email" placeholder="Enter E-mail" onChange={(e)=>setEmail(e.target.value)}/>
              {/* <br /> */}
                <input type="number" placeholder="Enter Number" onChange={(e)=>setNumber(e.target.value)}/>
              {/* <br /> */}
                <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
            </form>
          
            <h1>Name : {name}</h1>
            <h1>Email : {email}</h1>
            <h1>Number : {number}</h1>
            <h1>Password : {password}</h1>
        </div>
    )
} 

export default Signup;