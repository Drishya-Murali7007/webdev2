import React ,{useState}from 'react'

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
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Article