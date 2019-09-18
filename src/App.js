import React, { useState } from 'react';
import './App.css';

import Members from './components/Members';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Lorelei",
      email: 'lorelei@dragonheist.com',
      role: 'Warlock'
    }
  ]);
  
  
  return (
    <div className="App">
      <div className='member-list'>
        <h1>Team Members</h1>
        <Members members={members} />
        
      </div>
    </div>
  );
}

export default App;
