import React, { useEffect } from 'react';
import M from 'materialize-css';

export default function EditForm(props) {
  // Initialize Materialize CSS Tabs
  useEffect(() => {
    M.Tabs.init(document.querySelector('.tabs'), { swipeable: true, duration: 100 });
    M.FormSelect.init(document.querySelectorAll('.select'), {});
  }, []);

  const handleChange = (field, newValue) => {
    props.updateMember(props.member.id, field, newValue);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="modal-content">
        <h4>Edit - {props.member.name}</h4>
        <blockquote className="grey-text mb-2">
          {
            `${isVowel(props.member.descriptors.substring(0, 1)) ? 'An ' : 'A '} ${props.member.descriptors} ${props.member.job} who ${props.member.foci}.`
          }
        </blockquote>
        {/* Tabs */}
        <div className="row grey lighten-3">
          <div className="col s12">
            <ul className="tabs z-depth-1">
              <li className="tab col s6"><a className="" href="#details">Details</a></li>
              <li className="tab col s6"><a href="#stats">Stats</a></li>
            </ul>
          </div>
          {/* Tab Content */}
          {/* Details */}
          <div id="details" className="col s12 mt-3 row">
            {/* Member Name */}
            <div className="input-field col s6">
              <input id="name" type="text" onChange={(e) => handleChange('name', e.target.value)} value={props.member.name}></input>
              <label htmlFor="name" className="active">Name</label>
            </div>
            {/* Job */}
            <div className="col s6 input-field">
              <select className="select" id="job" onChange={(e) => handleChange('job', e.target.value)}>
                <option value="Glaive">Glaive</option>
                <option value="Nano">Nano</option>
                <option value="Jack">Jack</option>
                <option value="Other">Other</option>
              </select>
              <label htmlFor="job">Job</label>
            </div>
            {/* Descriptors */}
            <div className="input-field col s12">
              <input id="descriptors" type="text" onChange={(e) => handleChange('descriptors', e.target.value)} value={(props.member.descriptors === '[...]') ? '' : props.member.descriptors}></input>
              <label htmlFor="descriptors" className="active">Descriptors</label>
            </div>
            {/* Foci */}
            <div className="input-field col s12">
              <input id="foci" type="text" onChange={(e) => handleChange('foci', e.target.value)} value={(props.member.foci === '[...]') ? '' : props.member.foci}></input>
              <label htmlFor="foci" className="active">Foci</label>
            </div>
          </div>
          <div id="stats" className="col s12">
            <div className="row mt-3">
              {/* level */}
              <div className="col s4 input-field">
                <input id="level" type="number" onChange={(e) => handleChange('level', e.target.value)} value={props.member.level}></input>
                <label className="active" htmlFor="level">Level</label>
              </div>
              {/* xp */}
              <div className="col s4 input-field">
                <input id="xp" type="number" onChange={(e) => handleChange('xp', e.target.value)} value={props.member.xp}></input>
                <label className="active" htmlFor="xp">XP</label>
              </div>
              {/* effort */}
              <div className="col s4 input-field">
                <input id="effort" type="number" onChange={(e) => handleChange('effort', e.target.value)} value={props.member.effort}></input>
                <label className="active" htmlFor="effort">Effort</label>
              </div>
            </div>
            <div className="row">
              {/* Might Pool */}
              <div className="col s4 input-field">
                <input id="mightPool" type="number" onChange={(e) => handleChange('mightPool', e.target.value)} value={props.member.mightPool}></input>
                <label className="active" htmlFor="mightPool">Might Pool Maximum</label>
              </div>
              {/* Speed Pool */}
              <div className="col s4 input-field">
                <input id="speedPool" type="number" onChange={(e) => handleChange('speedPool', e.target.value)} value={props.member.speedPool}></input>
                <label className="active" htmlFor="speedPool">Speed Pool Maximum</label>
              </div>
              {/* Intellect Pool */}
              <div className="col s4 input-field">
                <input id="intPool" type="number" onChange={(e) => handleChange('intPool', e.target.value)} value={props.member.intPool}></input>
                <label className="active" htmlFor="intPool">Intellect Pool Maximum</label>
              </div>
            </div>
            <div className="row">
              {/* Might Edge */}
              <div className="col s4 input-field">
                <input id="mightEdge" type="number" onChange={(e) => handleChange('mightEdge', e.target.value)} value={props.member.mightEdge}></input>
                <label className="active" htmlFor="mightEdge">Might Edge</label>
              </div>
              {/* Speed Edge */}
              <div className="col s4 input-field">
                <input id="speedEdge" type="number" onChange={(e) => handleChange('speedEdge', e.target.value)} value={props.member.speedEdge}></input>
                <label className="active" htmlFor="speedEdge">Speed Edge</label>
              </div>
              {/* Intellect Edge */}
              <div className="col s4 input-field">
                <input id="intEdge" type="number" onChange={(e) => handleChange('intEdge', e.target.value)} value={props.member.intEdge}></input>
                <label className="active" htmlFor="intEdge">Intellect Edge</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button className="modal-close btn-flat waves-effect waves-light">Close</button>
      </div>
    </form>

  )
}

const vowels = ['a', 'e', 'i', 'o', 'u'];
const isVowel = (letter) => {
  if (vowels.includes(letter))
    return true;
  return false;
}