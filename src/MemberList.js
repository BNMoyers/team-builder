import React, { useState, setState } from 'react';





function MemberList(props) {
    return (
      <div>
        {props.members.map(member => {
          return(
          <div className="character-card" key={member.username}>
            
            <h3>{member.username}</h3>
            <div>email: {member.email}</div>
            <div>role: {member.role}</div>

          </div>
        )})}
      </div>
    );
  }
  export default MemberList;