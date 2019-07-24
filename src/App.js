import React from 'react';
import Form from './Form';


import './App.css';


const memberObject = [
  {
      id: 1,
      username: 'brittmo',
      email: 'brittmo@brittcodes.com',
      role: 'Queen of Everything'
  }
]

const MemberList = () => {
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

export default function App() {
  return(
    
    <div className = 'App'>
      {MemberList}
      <Form />
    </div>
    
   
   
   
  )
}


