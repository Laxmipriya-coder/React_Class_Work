import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
        console.log("Constructor Method");
    }

    componentDidMount(){
        console.log("Component  Did Mount Method");             
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Going to Update " , nextState);
        return this.state.count != nextState.count
    }
    
    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        console.log("Re-render Happens");
        return (
            <div className="card m-auto mt-4" style={{ maxWidth: "320px" }}>
                <div className="card-body" style={{ textAlign: "center" }}>
                    <h1>Counter App</h1>
                    <h3>Count Value : {this.state.count}</h3>
                    <button className="btn btn-primary" onClick={this.increment}>Increment</button>
                </div>
            </div>
        );
    }
}

export default Counter;
