import React from 'react'
import StatSheet from './StatSheet';

// Character Component
export default function CharacterInfo(props) {
  return (
    <div className="card z-depth-2 hoverable" key={props.id}>
      <div className="card-title p-1 pr-2">
        <div className="row">
          <div className="col s12 m6">
            <h4 className="">{props.name}</h4>
            {/* Level/Experience/Effort Points */}
            <h6 className="mt-2">
              Level: {props.level}
              &nbsp;&nbsp;Effort: {props.effort}
              &nbsp;&nbsp;XP: {props.xp}
            </h6>
          </div>
          <div className="col s6 mt-1 hide-on-small-only">
            <h6 className="grey-text">
              {
                `${isVowel(props.descriptors.substring(0, 1)) ? 'An ' : 'A '} ${props.descriptors} ${props.job} who ${props.foci}.`
              }
            </h6>
          </div>
        </div>
      </div>
      {/* Edit Button */}
      <button onClick={() => props.showEdit(props.id)} className="btn-floating blue waves-effect waves-light right mt--3 mr-2"><i className="material-icons">edit</i></button>
      {/* Remove Button */}
      <button onClick={() => props.removeMember(props.id)} className="btn-floating red waves-effect waves-light right mt--3 mr-6"><i className="material-icons">delete</i></button>
      <StatSheet
        id={props.id}
        mightPool={props.mightPool}
        speedPool={props.speedPool}
        intPool={props.intPool}
        mightDiff={props.mightDiff}
        speedDiff={props.speedDiff}
        intDiff={props.intDiff}
        mightEdge={props.mightEdge}
        speedEdge={props.speedEdge}
        intEdge={props.intEdge}
      />
    </div>
  )
}

const vowels = ['a', 'e', 'i', 'o', 'u'];
const isVowel = (letter) => {
  if (vowels.includes(letter))
    return true;
  return false;
}