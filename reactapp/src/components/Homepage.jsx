import React from 'react'

function Homepage() {
 const loggedin=true ;
//  if (loggedin)
//  {
//     return (
//         <button>Logout</button>
//     )
    
//  }else 
//     return (
//         <button>Login</button>
//     )
// }
return loggedin ? <button>Logout</button> : <button>Login</button>
}


export default Homepage