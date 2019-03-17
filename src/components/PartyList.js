import React, { useState, useEffect } from 'react';
import CharacterInfo from './CharacterInfo';

export default function PartyList(props) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    if (members.concat(props.party).length > members)
      setMembers(members.concat(props.party));
  });

  return (
    <div>
      test
      {
        (members.length > 0)
          ? members.map((member, index) =>
            <CharacterInfo
              key={index}
              name={member.name}
              job={member.job}
              descriptors={member.descriptors}
              foci={member.foci}
              xp={member.xp}
              effort={member.effort}
              mightPool={member.mightPool}
              speedPool={member.speedPool}
              intPool={member.intPool}
              mightEdge={member.mightEdge}
              speedEdge={member.speedEdge}
              intEdge={member.intEdge}
            />
          )
          : ''
      }
      {/* <CharacterInfo
        name="Stan Dadaelar"
        job="Jack"
        descriptors={['Doomed', 'Foolish']}
        foci={['Works miracles', 'Works the back alleys']}
        xp={0}
        effort={1}
        mightPool={10}
        speedPool={10}
        intPool={12}
        mightEdge={0}
        speedEdge={1}
        intEdge={0}
      /> */}
    </div>
  )
}
