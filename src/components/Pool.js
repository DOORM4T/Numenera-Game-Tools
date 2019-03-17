import React, { useState } from 'react';
import './_pool.scss';

// Component for Character Pools 
export default function Pool(props) {
  // Props
  // Types = Might, Intellect, Speed
  // Count = Current pool
  // Max = max value

  const [type] = useState(props.type);
  const [max] = useState(props.max);
  const [edge] = useState(props.edge);
  const [count, setCount] = useState(max);

  return (
    <div className="pool-info">
      <label className="pool-type">{type}</label>
      <label className="pool-edge-bar">
        <span className="pool">{count}</span>

        <span className="edge">{edge}</span>
      </label>
      <br />
      <div className="button-group">
        <button className="increment" onClick={() => setCount(count + 1)}>+</button>
        <button className="decrement" onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  )
}
