import React from "react";

class Card extends React.Component {
    constructor() {
        super();
        this.state = { Increment: 0 }
    }
    handleIncrementOne = () => {
        // console.log("Add +1.............");
        this.setState({ Increment: this.state.Increment + 1 });
        // console.log(this.state);
    }
    handleDecrementOne = () => {

        // console.log("SubStract -1..........");
        if (this.state.Increment > 0) {
            this.setState({ Increment: this.state.Increment - 1 });
        }
        // console.log(this.state);
    }
    handleIncrementFive = () => {
        // console.log("Add +5...........");
        this.setState({ Increment: this.state.Increment + 5 })
        // console.log(this.state);
    }
    resetIncrementValue = () => {
        console.log("Reset Value........");
        this.setState({ Increment: 0 })
    }

    render() {
        return (
            <>
                <div className="card col-3 mx-auto mt-4 p-4 shadow">
                    <div className="d-grid gap-3 mx-auto mt-4">
                        <h1 className="text-center">Count Value: {this.state.Increment}</h1>
                        <button className="btn btn-primary" type="button" onClick={this.handleIncrementOne}>+1</button>
                        <button className="btn btn-danger" type="button" onClick={this.handleDecrementOne}>-1</button>
                        <button className="btn btn-warning" type="button" onClick={this.handleIncrementFive}>+5</button>
                        <button className="btn btn-success" type="button" onClick={this.resetIncrementValue}>Reset</button>
                    </div>
                </div>
            </>
        )
    }
}
export default Card;