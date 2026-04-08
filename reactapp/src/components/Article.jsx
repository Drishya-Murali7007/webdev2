import React ,{useState}from 'react'
import artstyle from '../css/Article.module.css'

function Article() {
    const [count , setCount ]=useState(0)
    const [age , setAge ]=useState(0)
    const [name , setName ]=useState("")

    const handleIncrement = () => {
        setCount(count + 1)
   console.log(count)
    }
    const handleDecrement = () => {
        setCount(count - 1)
   console.log(count)
    }
  return (
    <div>
      <h2>Article  </h2>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic doloribus a illum reprehenderit veniam fugiat fuga sit ducimus beatae quibusdam iusto quas dolorem quod facere, dolor, porro debitis omnis!</p>
      <h2> {count}</h2>
      <button className={artstyle.btn} onClick={handleIncrement}>Increment</button>
      <button className={artstyle.btn} onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Article