import React, { Component } from 'react'
import Likes from './Likes';

class CompUnmount extends Component {
    constructor() {
        super();
        this.state = { isShow: true }
    }
    handleIsShow = () => {
        this.setState({ isShow: !this.state.isShow })
    }
    render() {
        return (
            <>
                <section className="card m-auto mt-4" style={{maxWidth : "320px", textAlign:"center"}}>
                    <div className="card-body">
                        <h1>Component UnMount Phase</h1>
                        <p>Click the Button</p>
                        <button className='btn btn-primary' onClick={this.handleIsShow}>
                            {this.state.isShow ? 'Hide' : 'Show'}
                        </button>
                        {
                            this.state.isShow && <Likes />
                        }
                    </div>
                </section>
            </>
        )
    }
}

export default CompUnmount