import React,{useState, useEffect, useRef} from 'react'
import ArtStyle from "../css/Article.module.css"
// import styled from "styled-components"
import styled from "@emotion/styled"
import { css } from '@emotion/react'
import axios from "axios"


function Article(props) {
    const[count,setCount]=useState(0)
    const[age,setAge]=useState(0)
    const[name,setName]=useState("Alex")
    const [loading, setLoading]=useState(false)

    const myRef=useRef(null)

    useEffect(()=>{
      console.log("Component Mounted")
      return ()=>{
        console.log("Component Unmounted")
      }
    },[ name])

    useEffect(()=>{
      // const fetchData=async()=>{
      //   try{
      //     const response=await fetch("https://dummyjson.com/products/222",{
      //       method:"GET"
      //     })
      //     const data=await response.json()
      //     console.log(data)
      //   }catch(error){
      //     console.log(error)
      //   }
      // }

      const fetchData=async()=>{
        try{
          setLoading(true)
          const response=await axios.get("https://dummyjson.com/products")
          console.log(response.data)
          setLoading(false)
        }catch(error){
          console.log(error)
        }
      }


      fetchData()
    },[])

    
    const handleRef=()=>{
      myRef.current.focus()
      console.log(myRef.current.value)
    }


    const handleIncrement=()=>{
        setCount(count+1)
        console.log(count)
    }
  return (
    <div>
      <h2>Article</h2>
      {loading?<h2>Loading....</h2>:""}
      <input type='text' ref={myRef} placeholder='Enter Your Name'/>
      <button onClick={handleRef}>UseRef</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maiores nemo obcaecati a quam nihil nobis enim quod cupiditate, ipsam sunt laborum vel numquam, sint accusantium. Vitae aliquam esse culpa.</p>
      <h3 style={{backgroundColor:"red"}}>{props.data}</h3>
      <h2>{count}</h2>
      <button className={ArtStyle.btn} onClick={handleIncrement}>Increment</button>
      <h2>{name}</h2>
      <button className='bg-yellow-900' onClick={()=>setName("John")}>Change Name</button>
      <Button>Click Me!</Button>
      <Button red >Click Again</Button>
      <button css={{backgroundColor:"green",color:"white",borderRadius:"10px",height:"30px",width:"150px",'&:hover':{backgroundColor:"blue"}}}>Css Prop Button</button>

      <button className='bg-pink-500 text-white border-2 border-white'>Tailwind Button</button>
    </div>
  )
}

export default Article


const Button=styled.button`
    background-color: ${props=>props.red ? "red":"pink"};
    color: white;
    border-radius: 10px;
    height: 30px;  
    width: 100px;
`