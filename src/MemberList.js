import React, { useState, setState } from 'react';

const memberObject = [
    {
        id: 1,
        username: 'brittmo',
        email: 'brittmo@brittcodes.com',
        password: 'bestPSWRD_3V3R'
    }
]

function MemberList(props) {
    return (
      <div className="members-list-wrapper">
        {props.memberObject.map(member => (
          <div className="character-card" key={memberObject.id}>
            
            <h3>{memberObject.username}</h3>
            <div>email: {memberObject.email}</div>
            <div>password:: {memberObject.password}</div>

          </div>
        ))}
      </div>
    );
  }
  export default MemberList;