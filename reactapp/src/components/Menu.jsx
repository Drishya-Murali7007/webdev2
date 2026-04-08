import React ,{Component}from 'react'
// import { add as addition } from './utility'
import '../css/Menu.css'
// function Menu() {
//     console.log(addition(3,4))
//   return (
//     <div>
//       <h1>Menu</h1>
//       <ul>
//         <li>Sports</li>
//         <li>Entertainment</li>
//         <li>Polititcs</li>

//       </ul>
//     </div>
//   )
// }

// export default Menu

class Menu extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            age:0,
            name:''
        }

    }

    componentDidMount(){
        console.log("Component Mounted")
        

        // data to be retreived from backend
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.count===1){
            return false
        }
        console.log("Should componenet update")
        return true
    }

    componentDidUpdate(){
        console.log("Component  didUpdate")
    }

    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }


    componentWillUnmount(){
        console.log("Component will unmount")
    }
    render() {
        return (
            <div>
                <h1>Menu</h1>
                <ul>
                    <li>Sports</li>
                    <li>Entertainment</li>
                    <li>Polititcs</li>
                    <li>World</li>
                </ul>
                <h2>{this.state.count}</h2>
                <button className="btn" onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }
}

export default Menu