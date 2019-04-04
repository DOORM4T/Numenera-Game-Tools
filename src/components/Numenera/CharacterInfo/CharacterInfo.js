import React from 'react'
import StatSheet from './StatSheet';
import EditForm from './EditForm';

// Character Component
export default function CharacterInfo(props) {
  // Character Slug
  let slug = (`${isVowel(props.descriptors.substring(0, 1)) ? 'An ' : 'A '} ${props.descriptors} ${props.job} who ${props.foci}.`);

  return (
    <div className="row">
      <div className="card large col s12 z-depth-2 hoverable" key={props.id}>
        {/* Edit Button */}
        <button onClick={() => props.showEdit(props.id)} className="activator btn-floating blue waves-effect waves-light right halfway-fab mb-17"><i className="material-icons">edit</i></button>
        {/* Remove Button */}
        <button onClick={() => props.removeMember(props.id)} className="btn-floating red waves-effect waves-light right halfway-fab mb-17 mr-4"><i className="material-icons">delete</i></button>
        <div className="card-content p-1 pr-2">
          <div className="row">
            <div className="col s12">
              <h4 className="card-title" >{props.name ? props.name : "Unnamed Character"}</h4>
              {/* Level/Experience/Effort Points */}
              <p className="" style={{ fontSize: '16px' }}>
                Lvl: {props.level}
                &nbsp;&nbsp;Eff: {props.effort}
                &nbsp;&nbsp;XP: {props.xp}
              </p>
            </div>
            <div className="col s12 mt-1 hide-on-small-only">
              <h6 className="grey-text tooltipped" data-position="bottom" data-tooltip={`${slug}`} style={{ wordBreak: 'break-all' }}>
                {
                  slug.length > 80
                    ? slug.substring(0, 80) + '...'
                    : slug
                }
              </h6>
            </div>
          </div>
        </div>
        <div className="card-content">
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
        <div className="card-reveal">
          <EditForm member={props.member} />
        </div>
      </div>
    </div>
  )
}

const vowels = ['a', 'e', 'i', 'o', 'u'];
const isVowel = (letter) => {
  if (vowels.includes(letter))
    return true;
  return false;
}