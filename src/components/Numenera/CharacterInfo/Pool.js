import React, { useState, useContext, useEffect } from 'react';
import M from 'materialize-css';
import { UpdateContext } from '../NumeneraLayout';


// Component for Character Pools 
export default function Pool(props) {
  // Types = Might, Intellect, Speed
  // Pool Max/Edge is recieved from UpdateContext
  let member = useContext(UpdateContext).party.find(member => member.id === props.id) || null; // Fallback to null to prevent delete errors
  const [type] = useState(props.type);
  const max = member ? parseInt(member[`${type}Pool`]) : null;
  const edge = member ? parseInt(member[`${type}Edge`]) : null;
  const current = member ? parseInt(member[`${type}Current`]) : null;

  const [count, setCount] = useState(current); // Initial Count = max + stored difference (which is saved in localStorage)
  const [updated, setUpdated] = useState(0); // Count #times updated => used to prevent excessive useEffect calls


  const updatePool = (amt) => {
    setUpdated(updated + 1);
    if (amt === 0) {
      setCount(max);
      return;
    }
    if (count + amt >= 0)
      setCount(count + amt);
  }

  // Use Context to update member state with updateMember
  // Used to save current pool values
  const { updateMember } = useContext(UpdateContext);
  useEffect(() => {
    if (updated > 0) // Update only if state (count) changes
      updateMember(props.id, `${type}Current`, count); // Current pool
  });

  // Tooltips
  useEffect(() => {
    M.Tooltip.init(document.querySelectorAll('.tooltipped'), {});
  }, []);

  return (
    <div className={`collection-item row ${count === 0 ? 'red lighten-4' : ''} ${count >= max ? 'green lighten-4' : ''} ${(count < max / 3 && count !== 0) ? 'yellow lighten-4' : ''}`}>
      <span className="col s7 valign-wrapper">
        <i className="material-icons tooltipped" data-position="left" data-tooltip={`${type} Pool, Edge: ${edge}`}>
          {
            (type === 'might')
              ? 'fitness_center'
              : (type === 'speed')
                ? 'directions_run'
                : 'school'
          }
        </i>
        <button className="red white-text btn waves-effect waves-dark smaller" onClick={() => updatePool(-1)}><i className="material-icons">remove</i></button>
        <span style={{ opacity: 0 }}>{count < 10 ? '_' : ''}</span>{count}/{max}<span style={{ opacity: 0 }}>{max < 10 ? '_' : ''}</span>
        <button className="green white-text btn waves-effect waves-light smaller" onClick={() => updatePool(+1)}><i className="material-icons">add</i></button>
        <button className="btn smaller waves-effect waves-light" onClick={() => updatePool(0)}><i className="material-icons">refresh</i></button>
      </span>
      <span className="col s1 offset-s3 valign-wrapper mt-half hide-on-small-only"><i className="material-icons mr-half">arrow_upward</i>{edge}</span>
    </div>
  )
}
