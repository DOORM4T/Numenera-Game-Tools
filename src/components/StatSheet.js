import React from 'react';
import Pool from './Pool';
import './_statSheet.scss';

export default function StatSheet(props) {
  return (
    <div className="stat-sheet">
      {/* Experience Points */}
      <label className="xp">
        {props.xp}
      </label>
      <br />
      {/* Effort Points */}
      <label className="effort">
        {props.effort}
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
