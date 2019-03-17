import React, { useState } from 'react';
import PartyList from './components/PartyList';
import CharacterInfo from './components/CharacterInfo';
import './app.scss';

export default function App() {
  // List of Party Members
  const [party, setParty] = useState([]);

  // Function for Creating New Party Members
  const addMember = () => {
    setParty(party.concat({
      name: "Stan Dadaelar",
      job: "Jack",
      descriptors: ['Doomed', 'Foolish'],
      foci: ['Works miracles', 'Works the back alleys'],
      xp: 0,
      effort: 1,
      mightPool: 10,
      speedPool: 10,
      intPool: 12,
      mightEdge: 0,
      speedEdge: 1,
      intEdge: 0,
    }));
    console.log(party)
  }

  return (
    <div className="App">
      <h1>Numenera App</h1>
      <button onClick={() => addMember()}>Add Member</button>
      {/* List of Party Members */}
      {
        party.map((member, index) =>
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
      }

    </div>
  )
}
