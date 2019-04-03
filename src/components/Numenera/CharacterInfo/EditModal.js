import React from 'react';
import EditForm from './EditForm';

export default function EditModal(props) {
  // Update member when fields change

  return (
    <>
      <div id="editModal" className="modal">
        {
          (props.show) ?
            <EditForm member={props.member} updateMember={props.updateMember} />
            : ''
        }
      </div >
    </>
  )
}