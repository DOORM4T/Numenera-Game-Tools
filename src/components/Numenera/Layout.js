import React, { useState } from 'react';
import uuid from 'uuid';
import Navbar from './Navbar';
import Party from './Party';
import NewCharacter from './NewCharacter';


export default function Layout() {
  // List of Party Members
  const [party, setParty] = useState([]);

  // Function for Creating New Party Members
  const addMember = (member) => {
    setParty(party.concat({
      id: uuid(),
      name: member.name,
      job: member.job,
      descriptors: member.descriptors,
      foci: member.foci,
      xp: member.xp,
      effort: member.effort,
      mightPool: member.mightPool,
      speedPool: member.speedPool,
      intPool: member.intPool,
      mightEdge: member.mightEdge,
      speedEdge: member.speedEdge,
      intEdge: member.intEdge,
    }));
  }

  const removeMember = (id) => {
    let members = party.filter(member => member.id !== id);
    setParty(members);
  }

  return (
    <>
      <Navbar />
      <div className="container">
        {/* Form for new party members */}
        <NewCharacter addMember={addMember} />

        {/* Party List */}
        <Party party={party} removeMember={removeMember} />
      </div>
    </>
  )
}
