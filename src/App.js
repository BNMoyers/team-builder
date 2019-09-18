import React, { useState } from 'react';
import './App.css';

import Members from './components/Members';
import MemberForm from './components/MemberForm';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      characterName: "Lorelei",
      playerName: 'Britt',
      email: 'lorelei@dragonheist.com',
      class: 'Warlock',
      role: 'DPS'
    }
  ]);
  
  const addNewMembers = member => {
    const newMember = {
      id: Date.now(),
      ...member
    };
    setMembers([...members, newMember]);
  }
  
  return (
    <div className="App">
      <div className='member-list'>
        <h1>Party Members</h1>
        <Members members={members} />
        <MemberForm addNewMembers={addNewMembers} />
        
        
      </div>
    </div>
  );
}

export default App;
