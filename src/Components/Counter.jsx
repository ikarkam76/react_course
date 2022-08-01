import React from "react";
import Controls from "./Controls";

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
            <Controls
              onInc={this.handleIncrement}
              onDecr={this.handleDescrement}
            />
          </div>
        );
    }
}

export default Counter;