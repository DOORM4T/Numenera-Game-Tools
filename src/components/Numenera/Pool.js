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
    <div className={`collection-item ${count === 0 ? 'red darken-3' : ''}`}>
      <i className="material-icons left">
        {
          (type === 'might')
            ? 'fitness_center'
            : (type === 'speed')
              ? 'directions_run'
              : 'school'
        }
      </i>
      <span className="ml-1">
        <span className="">
          <button className="red white-text btn waves-effect waves-dark smaller" onClick={() => updatePool(-1)}><i className="material-icon">-</i></button>
          {(count) < 10 ? "0" + count : count}
          <button className="green white-text btn waves-effect waves-light smaller" onClick={() => updatePool(+1)}><i className="material-icon">+</i></button>
        </span>
        <span className="right"><i className="material-icons">arrow_upward</i>{edge}</span>
      </span>
    </div>
  )
}
