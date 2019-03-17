import React, { useState } from 'react'
import StatSheet from './StatSheet';
import './_characterInfo.scss';

// Character Component
export default function CharacterInfo(props) {
  // Character Name
  const [name] = useState(props.name);
  // Job = Glaive, Nano, Jack, etc.
  const [job] = useState(props.job);
  // Character Descriptors
  const [descriptors] = useState([...props.descriptors]);
  // Character Foci
  const [foci] = useState([...props.foci]);
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
    <div className="character-card">
      <label className="character-name">{name}</label>
      <br />
      <label className="character-slug">
        {/* A ___ ___ who ___ */}
        A
      {
          (descriptors.length > 1)
            ? descriptors.map((descriptor, index) =>
              (index < descriptors.length - 1)
                ? ` ${descriptor},`
                : " " + descriptor
            )
            : " " + descriptors[0]
        }
        {" " + job + " "}
        who
        {
          (foci.length > 1)
            ? foci.map((focus, index) =>
              (index < foci.length - 1)
                ? ` ${focus} and `
                : " " + focus
            )
            : " " + foci[0]
        }.
      </label>
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
