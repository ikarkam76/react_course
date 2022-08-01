import React from "react";

class DropDown extends React.Component {
    state = { visible: false, };
    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        })
        )
    };
    render() {
        return (
          <div>
                <button type="button" onClick={this.toggle}>{this.state.visible ? "hide" : "show"}</button>
            {this.state.visible && (<span>modalka</span>)}
          </div>
        );
    }
}

export default DropDown;
