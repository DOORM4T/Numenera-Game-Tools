import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid';
import Party from './Party';
import NewCharacter from './NewCharacter';
import { isNull } from 'util';

// Context for Party Updating functionality
export const UpdateContext = createContext();

export default function NumeneraLayout() {
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
      level: member.level,
      xp: member.xp,
      effort: member.effort,
      mightPool: member.mightPool,
      speedPool: member.speedPool,
      intPool: member.intPool,
      mightDiff: 0,
      speedDiff: 0,
      intDiff: 0,
      mightEdge: member.mightEdge,
      speedEdge: member.speedEdge,
      intEdge: member.intEdge,
    }));
  }

  // Function for Removing Party Members
  const removeMember = (id) => {
    let confirmation = window.confirm(`Are you sure you want to remove ${party.filter(member => member.id === id)[0].name}?`);
    if (confirmation === false)
      return;
    let members = party.filter(member => member.id !== id);
    setParty(members);
  }

  const updateMember = (id, property, updatedValue) => {
    let index; // Index of party that will be updated

    // Get Member by ID
    let updatedMember = party.filter((member, i) => {
      if (member.id === id) {
        index = i;
        return true;
      }
      return false;
    })[0];

    if (updatedMember[property] === updatedValue)
      return; // Exit if property doesn't need to be updated
    updatedMember[property] = updatedValue;
    let updatedParty = [...party.slice(0, index), updatedMember, ...party.slice(index + 1, party.length)];
    if (updatedParty !== party)
      setParty(updatedParty);
  }

  // Get storage (if any) after mounting
  useEffect(() => {
    if (!isNull(JSON.parse(localStorage.getItem('party'))) && JSON.parse(localStorage.getItem('party')).length > 0) {
      setParty(JSON.parse(localStorage.getItem('party')));
    }

  }, []);

  // Update local storage when state changes
  useEffect(() => {
    localStorage.setItem('party', JSON.stringify(party));
  });

  return (
    <UpdateContext.Provider value={updateMember}>
      <div className="container">
        {/* Form for new party members */}
        <NewCharacter addMember={addMember} />

        {/* Party List */}
        <Party party={party} removeMember={removeMember} />
      </div>
    </ UpdateContext.Provider>
  )
}
