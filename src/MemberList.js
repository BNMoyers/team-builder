import React, { useState, setState } from 'react';
import { render } from 'react-dom';


const memberObject = [
    {
        id: 1,
        username: 'brittmo',
        email: 'brittmo@brittcodes.com',
        role: 'Queen of Everything'
    }
]

function MemberList() {
    return (
      <div>
        {memberObject.map(member => {
          return(
          <div className="character-card" key={memberObject.id}>
            
            <h3>{memberObject.username}</h3>
            <div>email: {memberObject.email}</div>
            <div>role: {memberObject.role}</div>

          </div>
        )})}
      </div>
    );
  }
  export default MemberList;