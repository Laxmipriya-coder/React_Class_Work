import React from "react";

class Message extends React.Component{
    constructor(props){
        super();
        this.name = "Satya";
        this.props = props;
        this.state = {age : 20}
    }
    handleIncrement = ()=>{
        console.log("Incrementing.....................");
        // Asynchronous Code
        this.setState({age: this.state.age+1})
        console.log(this.state);
    }
    handleDecrement = ()=>{
        console.log("Decrementing..............");
        // Asynchronous Code
        this.setState({age: this.state.age - 1})
        console.log(this.state);
    }
    render(){
        return(
            <>
            <h1>Hello Class Based Component</h1>
            <h4>Student Name: {this.name}</h4>
            <h5>Message: {this.props.msg}</h5>
            <h6>Hii</h6>
            <button onClick={this.handleDecrement}>-</button>
            <span> {this.state.age} </span>
            <button onClick={this.handleIncrement}>+</button>
            </>
        )
    }
}
export default Message;