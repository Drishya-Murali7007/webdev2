import React ,{useState}from 'react'
import artstyle from '../css/Article.module.css'
// import styled from 'styled-components'
import styled from '@emotion/styled'
import {css} from '@emotion/react'


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

      <Button> Click me  </Button>
      <Button red> Dont click mi</Button>
      <button css ={{backgroundColor:'olive', color:'white', padding:'10px 20px', border:'none', borderRadius:'5px', cursor:'pointer'}}> i DOnt exist</button>
      <button className='bg-pink-500 text-white border-4'> absurdism</button>

    </div>
  )
}

export default Article

const Button = styled.button`
background-color: ${props => props.red ? 'red' : 'pink '} ;     
color: blue ;
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
 ;
    `

