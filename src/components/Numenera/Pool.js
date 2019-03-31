import React, { useState } from 'react';
// import './_pool.scss';

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

  const updatePool = (amt) => {
    if (count + amt >= 0)
      setCount(count + amt);
  }

  return (
    <div className="collection-item">
      {/* Pool Type -- @TODO: Replace with icons! */}
      <p className="rotated">{type}</p>
      <p className="">
        <span className="ml-2">
          <span className="">
            <button className="mr-1 red white-text btn waves-effect waves-dark smaller" onClick={() => updatePool(-1)}><i className="material-icon">-</i></button>
            {(count) < 10 ? "0" + count : count}
            <button className="ml-1 green white-text btn waves-effect waves-light smaller" onClick={() => updatePool(+1)}><i className="material-icon">+</i></button>
          </span>
          <span className="right">Edge: {edge}</span>
        </span>
      </p>
    </div>
  )
}
