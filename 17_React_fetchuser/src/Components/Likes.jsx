
import React, { Component } from 'react';

class Likes extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
                <h1>Likes Component</h1>
                <h4>Count: {this.state.count}</h4>
            </>
        );
    }
}

export default Likes;
