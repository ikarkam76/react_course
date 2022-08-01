import React from "react";

class Counter extends React.Component {
    state = {
    value: 0,
    }

    handleIncrement = () => {
        this.setState(prevstate => ({
            value: prevstate.value + 1,
        }));
        console.log("add 1");
    }
    handleDescrement = () => {
        this.setState((prevstate) => ({
          value: prevstate.value - 1,
        }));
        console.log("remove 1");
    }
    render() {
        return (
            <div>
                <span>{this.state.value}</span>
                <button onClick={this.handleIncrement}>Add</button>
                <button onClick={this.handleDescrement}>Remove</button>
            </div>
        )
    }
}

export default Counter;