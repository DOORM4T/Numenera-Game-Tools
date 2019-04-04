// Component for adding new characters to the party
import React, { useState } from 'react'

export default function NewCharacter(props) {
  const [name, setName] = useState('Unnamed Character');
  const [job, setJob] = useState('Glaive');
  const [descriptors, setDescriptors] = useState('[...]');
  const [foci, setFoci] = useState('[...]');
  const [level, setLevel] = useState(1);
  const [xp, setXP] = useState(0);
  const [effort, setEffort] = useState(1);
  const [mightPool, setMightPool] = useState(10);
  const [speedPool, setSpeedPool] = useState(10);
  const [intPool, setIntPool] = useState(10);
  const [mightEdge, setMightEdge] = useState(0);
  const [speedEdge, setSpeedEdge] = useState(0);
  const [intEdge, setIntEdge] = useState(0);

  const handleSubmit = () => {
    const newMember = {
      name,
      job,
      descriptors,
      foci,
      level: parseInt(level),
      xp: parseInt(xp),
      effort: parseInt(effort),
      mightPool: parseInt(mightPool),
      speedPool: parseInt(speedPool),
      intPool: parseInt(intPool),
      mightEdge: parseInt(mightEdge),
      speedEdge: parseInt(speedEdge),
      intEdge: parseInt(intEdge),
    };
    props.addMember(newMember);
  }

  return (
    <>
      <div className="fixed-action-btn">
        <a href="#newMemberModal" className="mt-1 btn-floating btn-large red waves-effect waves-light modal-trigger tooltipped" data-position="left" data-tooltip="Add Member">
          <i className="material-icons">group_add</i>
        </a>
      </div>
      <div id="newMemberModal" className="modal" >
        <h3 className="center">New Party Member</h3>
        <div className="row">
          <form id='addForm' className="col s12" onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
            document.getElementById('addForm').reset();
          }
          }>
            {/* Tabs */}
            <div className="col s12">
              <ul className="tabs z-depth-1">
                <li className="tab col s6"><a className="" href="#details"><i className="material-icons mt-1">person</i></a></li>
                <li className="tab col s6"><a href="#stats"><i className="material-icons mt-1">tune</i></a></li>
              </ul>
            </div>
            {/* Details */}
            <div id="details" className="tab mt-4">
              <div className="row">
                {/* Member Name */}
                <div className="col s9 input-field">
                  <input id="name" type="text" onChange={(e) => setName(e.target.value)}></input>
                  <label htmlFor="name">Name</label>
                </div>
                {/* Job */}
                <div className="col s3 input-field">
                  <select className="select" id="job" onChange={(e) => setJob(e.target.value)}>
                    <option value="Glaive">Glaive</option>
                    <option value="Nano">Nano</option>
                    <option value="Jack">Jack</option>
                    <option value="Other">Other</option>
                  </select>
                  <label htmlFor="job">Job</label>
                </div>
              </div>
              {/* Descriptors */}
              <div className="input-field">
                <input id="descriptors" type="text" onChange={(e) => setDescriptors(e.target.value)}></input>
                <label htmlFor="descriptors">Descriptor(s)</label>
              </div>
              {/* Foci */}
              <div className="input-field mt-3">
                <input id="foci" type="text" onChange={(e) => setFoci(e.target.value)}></input>
                <label htmlFor="foci">Foci</label>
              </div>
            </div>
            {/* Stats */}
            <div id="stats" className="tab mt-2">
              <div className="row">
                {/* level */}
                <div className="col s4 input-field">
                  <input id="level" type="text" onChange={(e) => setLevel(e.target.value)}></input>
                  <label htmlFor="level">Level</label>
                </div>
                {/* xp */}
                <div className="col s4 input-field">
                  <input id="xp" type="text" onChange={(e) => setXP(e.target.value)}></input>
                  <label htmlFor="xp">XP</label>
                </div>
                {/* effort */}
                <div className="col s4 input-field">
                  <input id="effort" type="text" onChange={(e) => setEffort(e.target.value)}></input>
                  <label htmlFor="effort">Effort</label>
                </div>
              </div>
              <div className="row">
                {/* Might Pool */}
                <div className="col s4 input-field">
                  <input id="mightPool" type="number" onChange={(e) => setMightPool(e.target.value)}></input>
                  <label htmlFor="mightPool">Might Pool</label>
                </div>
                {/* Speed Pool */}
                <div className="col s4 input-field">
                  <input id="speedPool" type="number" onChange={(e) => setSpeedPool(e.target.value)}></input>
                  <label htmlFor="speedPool">Speed Pool</label>
                </div>
                {/* Intellect Pool */}
                <div className="col s4 input-field">
                  <input id="intPool" type="number" onChange={(e) => setIntPool(e.target.value)}></input>
                  <label htmlFor="intPool">Int Pool</label>
                </div>
              </div>
              <div className="row">
                {/* Might Edge */}
                <div className="col s4 input-field">
                  <input id="mightEdge" type="number" onChange={(e) => setMightEdge(e.target.value)}></input>
                  <label htmlFor="mightEdge">Might Edge</label>
                </div>
                {/* Speed Edge */}
                <div className="col s4 input-field">
                  <input id="speedEdge" type="number" onChange={(e) => setSpeedEdge(e.target.value)}></input>
                  <label htmlFor="speedEdge">Speed Edge</label>
                </div>
                {/* Intellect Edge */}
                <div className="col s4 input-field">
                  <input id="intEdge" type="number" onChange={(e) => setIntEdge(e.target.value)}></input>
                  <label htmlFor="intEdge">Int Edge</label>
                </div>
              </div>
            </div>
            <button className="modal-close right mt-1 mb-1 btn light-blue waves-effect waves-light">Add Member</button>
          </form>
        </div>
      </div>
    </>
  )
}

