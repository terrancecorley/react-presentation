import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            ...prevState, // not completely necessary in this case
            count: prevState.count + 1
        }))
    }

    handleReset() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <span>{this.state.count}</span>
                <button onClick={this.handleClick}>Dew et.</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

export default Counter;



