import React from 'react';
import Pool from './Pool';

export default function StatSheet(props) {
  return (
    <div className="stat-sheet">
      {/* Experience Points */}
      <label className="xp">
        XP: {props.xp}
      </label>
      <br />
      {/* Effort Points */}
      <label>
        Effort: {props.effort}
      </label>

      {/* Character Stat Pools */}
      <div className="pools">
        <Pool type="Might" edge={props.mightEdge} max={props.mightPool} />
        <Pool type="Speed" edge={props.speedEdge} max={props.speedPool} />
        <Pool type="Intellect" edge={props.intEdge} max={props.intPool} />
      </div>
    </div>
  )
}
