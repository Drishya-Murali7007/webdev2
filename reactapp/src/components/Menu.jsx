// import React from 'react'

// function Menu(props) {//rfce to create functional component
//   return (
//     <>
//         <div>menu</div>
//     <ul >
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//     </ul>
//     <button
//         className="counter"
//         onClick={() => props.setCount((count) => count + 1)}
//     >
//         Count is {props.count}
//     </button>
//     </>
//   )
// }
 
// export default Menu

import React, { Component } from 'react'//rcc to create class component

export default class Menu extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
        <>
      <div>Menu</div>
    <ul >
      <h1>Menu</h1>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <button
        className="counter"
        onClick={() => this.props.setCount((count) => count + 1)}
    >
        Count is {this.props.count}
    </button>
    </>
  )
}
    
  }

