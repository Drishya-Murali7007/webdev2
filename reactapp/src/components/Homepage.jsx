import React from 'react'

function Homepage() {
 const loggedin=true ;
//  if (loggedin)// if else statement
//  {
//     return (
//         <button>Logout</button>
//     )
    
//  }else 
//     return (
//         <button>Login</button>
//     )
// }
return loggedin ? <button>Logout</button> : <button>Login</button>//ternary 
}


export default Homepage