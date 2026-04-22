import React, {useState} from 'react'

function Contact() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")

    const handleSubmit=()=>{
        event.preventDefault()
        if  (!email.endsWith("krmu.edu.in")  ){
        
            alert("Please enter a valid email address")
            return
        }
        console.log(name)
        console.log(email)
        console.log(message)
    }
  return (
    <div>
      <form onSubmit={handleSubmit("Sample Data")}>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <textarea placeholder='Enter your message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
        <button className='bg-cyan-700 text-white' type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default Contact