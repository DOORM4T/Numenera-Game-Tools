import React, { useState, useContext, useEffect } from 'react';
import { UpdateContext } from '../NumeneraLayout';

// Component for Character Pools 
export default function Pool(props) {
  // Types = Might, Intellect, Speed
  const [type] = useState(props.type);
  const [max] = useState(props.max);
  const [edge] = useState(props.edge);
  const [count, setCount] = useState(max + props.diff); // Initial Count = max + stored difference (which is saved in localStorage)
  const [updated, setUpdated] = useState(0); // Count #times updated => used to prevent excessive useEffect calls

  const updatePool = (amt) => {
    setUpdated(updated + 1);
    if (count + amt >= 0)
      setCount(count + amt);
  }

  console.log(props.diff)
  // Use Context to update member state with updateMember
  // Used to save current pool values
  const updateMember = useContext(UpdateContext);
  useEffect(() => {
    if (updated > 0) // Update only if state (count) changes
      updateMember(props.id, `${type}Diff`, count - max); // Updates Pool Difference of Character
  });

  return (
    <div className={`collection-item row ${count === 0 ? 'red darken-3' : ''}`}>
      <span className="col s9 valign-wrapper">
        <i className="material-icons">
          {
            (type === 'might')
              ? 'fitness_center'
              : (type === 'speed')
                ? 'directions_run'
                : 'school'
          }
        </i>
        <button className="red white-text btn waves-effect waves-dark smaller" onClick={() => updatePool(-1)}><i className="material-icons">remove</i></button>
        {(count) < 10 ? "0" + count : count}/{max}
        <button className="green white-text btn waves-effect waves-light smaller" onClick={() => updatePool(+1)}><i className="material-icons">add</i></button>
      </span>

      <span className="col s3 valign-wrapper mt-half"><i className="material-icons mr-half">arrow_upward</i>{edge}</span>
    </div>
  )
}
