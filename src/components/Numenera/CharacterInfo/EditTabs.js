import React, { useEffect, useContext } from 'react'
import M from 'materialize-css'
import { UpdateContext } from '../NumeneraLayout';

export default function EditTabs(props) {
  // Initialize Materialize CSS Tabs
  useEffect(() => {
    M.FormSelect.init(document.querySelectorAll('.select'), {});
    M.Tabs.init(document.querySelectorAll('.tabs'), { duration: 200 });
  }, []);

  const { updateMember } = useContext(UpdateContext);
  let member = useContext(UpdateContext).party.find(member => member.id === props.id) || null;

  const handleChange = (field, newValue) => {
    updateMember(member.id, field, newValue);
  }

  return (
    <>
      {
        (member !== null) ? (
          // Tabs 
          <div className="row">
            <div className="col s12">
              <ul className="tabs z-depth-1">
                <li className="tab col s6"><a className="" href={`#details-${props.id}`}><i className="material-icons mt-1">person</i></a></li>
                <li className="tab col s6"><a href={`#stats-${props.id}`}><i className="material-icons mt-1">tune</i></a></li>
              </ul>
            </div>
            {/* Tab Content */}
            {/* Details */}
            <div id={`details-${props.id}`} className="col s12 mt-1 row">
              {/* Member Name */}
              <div className="input-field col s6">
                <input id="name" type="text" onChange={(e) => handleChange('name', e.target.value)} value={member.name}></input>
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
                <input id="descriptors" type="text" onChange={(e) => handleChange('descriptors', e.target.value)} value={(member.descriptors === '[...]') ? '' : member.descriptors}></input>
                <label htmlFor="descriptors" className="active">Descriptors</label>
              </div>
              {/* Foci */}
              <div className="input-field col s12">
                <input id="foci" type="text" onChange={(e) => handleChange('foci', e.target.value)} value={(member.foci === '[...]') ? '' : member.foci}></input>
                <label htmlFor="foci" className="active">Foci</label>
              </div>
            </div>
            <div id={`stats-${props.id}`} className="col s12 mt-1">
              <div className="row">
                {/* level */}
                <div className="col s4 input-field">
                  <input id="level" type="number" onChange={(e) => handleChange('level', e.target.value)} value={member.level}></input>
                  <label className="active" htmlFor="level">Level</label>
                </div>
                {/* xp */}
                <div className="col s4 input-field">
                  <input id="xp" type="number" onChange={(e) => handleChange('xp', e.target.value)} value={member.xp}></input>
                  <label className="active" htmlFor="xp">XP</label>
                </div>
                {/* effort */}
                <div className="col s4 input-field">
                  <input id="effort" type="number" onChange={(e) => handleChange('effort', e.target.value)} value={member.effort}></input>
                  <label className="active" htmlFor="effort">Effort</label>
                </div>
              </div>
              <div className="row">
                {/* Might Pool */}
                <div className="col s4 input-field">
                  <input id="mightPool" type="number" onChange={(e) => handleChange('mightPool', e.target.value)} value={member.mightPool}></input>
                  <label className="active" htmlFor="mightPool">Might Max</label>
                </div>
                {/* Speed Pool */}
                <div className="col s4 input-field">
                  <input id="speedPool" type="number" onChange={(e) => handleChange('speedPool', e.target.value)} value={member.speedPool}></input>
                  <label className="active" htmlFor="speedPool">Speed Max</label>
                </div>
                {/* Intellect Pool */}
                <div className="col s4 input-field">
                  <input id="intPool" type="number" onChange={(e) => handleChange('intPool', e.target.value)} value={member.intPool}></input>
                  <label className="active" htmlFor="intPool">Int Max</label>
                </div>
              </div>
              <div className="row">
                {/* Might Edge */}
                <div className="col s4 input-field">
                  <input id="mightEdge" type="number" onChange={(e) => handleChange('mightEdge', e.target.value)} value={member.mightEdge}></input>
                  <label className="active" htmlFor="mightEdge">Might Edge</label>
                </div>
                {/* Speed Edge */}
                <div className="col s4 input-field">
                  <input id="speedEdge" type="number" onChange={(e) => handleChange('speedEdge', e.target.value)} value={member.speedEdge}></input>
                  <label className="active" htmlFor="speedEdge">Speed Edge</label>
                </div>
                {/* Intellect Edge */}
                <div className="col s4 input-field">
                  <input id="intEdge" type="number" onChange={(e) => handleChange('intEdge', e.target.value)} value={member.intEdge}></input>
                  <label className="active" htmlFor="intEdge">Int Edge</label>
                </div>
              </div>
            </div>
          </div>
        ) : ''
      }
    </>
  )
}