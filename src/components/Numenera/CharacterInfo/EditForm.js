import React, { useEffect, useContext } from 'react';
import EditTabs from './EditTabs';

export default function EditForm(props) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h5 className="card-title">{props.member.name} <i className="material-icons right">close</i></h5>
      <blockquote className="grey-text mb-2">
        {
          `${isVowel(props.member.descriptors.substring(0, 1)) ? 'An ' : 'A '} ${props.member.descriptors} ${props.member.job} who ${props.member.foci}.`
        }
      </blockquote>
      <EditTabs id={props.member.id} />
    </form>
  )
}

const vowels = ['a', 'e', 'i', 'o', 'u'];
const isVowel = (letter) => {
  if (vowels.includes(letter))
    return true;
  return false;
}