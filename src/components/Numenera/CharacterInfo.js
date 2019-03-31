import React, { useState } from 'react'
import StatSheet from './StatSheet';

// Character Component
export default function CharacterInfo(props) {
  // Character Name
  const [name] = useState(props.name);
  // Job = Glaive, Nano, Jack, etc.
  const [job] = useState(props.job);
  // Character Descriptors
  const [descriptors] = useState(props.descriptors);
  // Character Foci
  const [foci] = useState(props.foci);
  // Effort Points
  const [effort] = useState(props.effort);
  // Experience Points
  const [xp] = useState(props.xp);
  // Might Pool
  const [mightPool] = useState(props.mightPool);
  // Speed Pool
  const [speedPool] = useState(props.speedPool);
  // Intellect Pool
  const [intPool] = useState(props.intPool);
  // Might Edge
  const [mightEdge] = useState(props.mightEdge);
  // Speed Edge
  const [speedEdge] = useState(props.speedEdge);
  // Intellect Edge
  const [intEdge] = useState(props.intEdge);

  return (
    <div className="card" key={props.id}>
      <div className="card-title p-1">
        <div className="row">
          <div className="col s5">
            <h5 className="">{name}</h5>
            {/* Experience/Effort Points */}
            <label className="">
              XP: {xp}
            </label>
            <label className="ml-2">
              Effort:{effort}
            </label>
          </div>
          <div className="col s7">
            <label className="character">
              {/* A ___ ___ who ___ */}
              A
              {
                " " + descriptors
                // (descriptors.length > 1)
                //   ? descriptors.map((descriptor, index) =>
                //     (index < descriptors.length - 1)
                //       ? ` ${descriptor},`
                //       : " " + descriptor
                //   )
                //   : " " + descriptors[0]
              }
              {" " + job + " "}
              who
              {
                " " + foci
                // (foci.length > 1)
                //   ? foci.map((focus, index) =>
                //     (index < foci.length - 1)
                //       ? ` ${focus} and `
                //       : " " + focus
                //   )
                //   : " " + foci[0]
              }.
      </label>
          </div>
        </div>
      </div>
      {/* Edit Button */}
      <button className="btn-floating blue waves-effect waves-light right mt--1 mr-2"><i className="material-icons">edit</i></button>
      {/* Remove Button */}
      <button onClick={() => props.removeMember(props.id)} className="btn-floating red waves-effect waves-light right mt--1 mr-2"><i className="material-icons">delete</i></button>
      <StatSheet
        effort={effort}
        xp={xp}
        mightPool={mightPool}
        speedPool={speedPool}
        intPool={intPool}
        mightEdge={mightEdge}
        speedEdge={speedEdge}
        intEdge={intEdge}
      />
    </div>
  )
}
