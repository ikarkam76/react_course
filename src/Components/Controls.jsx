import React from "react";

const Controls = ({ onInc, onDecr }) => {
    return <div>
      <button onClick={onInc}>Add</button>
      <button onClick={onDecr}>Remove</button>
    </div>;
};

export default Controls;