import React from 'react';
import Pool from './Pool';
// import './_statSheet.scss';

export default function StatSheet(props) {
  return (
    <div className="card-action">
      <br />
      {/* Character Stat Pools */}
      <div className="collection">
        <Pool type="Mgt" edge={props.mightEdge} max={props.mightPool} />
        <Pool type="Spd" edge={props.speedEdge} max={props.speedPool} />
        <Pool type="Int" edge={props.intEdge} max={props.intPool} />
      </div>
    </div>
  )
}
