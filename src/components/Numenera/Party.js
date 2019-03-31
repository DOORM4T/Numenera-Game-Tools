import React from 'react'
import CharacterInfo from './CharacterInfo';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Party(props) {
  return (
    <div className="row">
      <TransitionGroup>
        {
          props.party.map((member, index) =>
            <CSSTransition
              key={index}
              timeout={100}
              classNames="member"
            >
              <div className="col m12 l6" key={member.id}>
                <CharacterInfo
                  id={member.id}
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
                  removeMember={props.removeMember}
                />
              </div>
            </CSSTransition>
          )
        }
      </TransitionGroup>
    </div>
  )
}
