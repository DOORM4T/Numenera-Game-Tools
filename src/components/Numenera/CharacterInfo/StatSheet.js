import React from 'react';
import Pool from './Pool';

export default function StatSheet(props) {
  return (
    <div className="card-action grey lighten-4 mt--2">
      <br />
      {/* Character Stat Pools */}
      <div className="collection">
        <Pool id={props.id} type="might" diff={props.mightDiff} edge={props.mightEdge} max={props.mightPool} />
        <Pool id={props.id} type="speed" diff={props.speedDiff} edge={props.speedEdge} max={props.speedPool} />
        <Pool id={props.id} type="int" diff={props.intDiff} edge={props.intEdge} max={props.intPool} />
      </div>
    </div>
  )
}
