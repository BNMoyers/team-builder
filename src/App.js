import React, { useState } from 'react';
import './App.css';

import Members from './components/Members';
import { MemberForm, EditMember } from './components/MemberForm';

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

  const [edit, setEdit] = useState(false);
  const initialEditState = {id: null, characterName:'',playerName:'', email:'',class:'',role:''};
  const [currentMember, setCurrentMember] = useState(initialEditState);
  
  const memberToEdit = member => {
    setEdit(true)
    setCurrentMember({id: member.id, characterName: member.characterName,playerName:member.playerName, email:member.email,class:member.class,role:member.role })
  };

  const updateMember = (id, updatedMember) => {
    setEdit(false)
    setMembers(members.map(member => (member.id === id ? updatedMember : member)))
  }


  return (
    <div className="App">
      <div className='member-list'>
        <h1>Party Members</h1>
        {edit ? ( 
        <div>
          <h2>Edit Group</h2>
          <EditMember edit={edit}
                        setEdit={setEdit}
                        currentMember={currentMember}
                        updateMember={updateMember}/>
        </div>
        ) : (
          <div>
            <h2>Add Party Members</h2>
            <MemberForm addNewMembers={addNewMembers} />
          </div>)}
          

              <Members members={members} memberToEdit={memberToEdit} />
       
        
        
      </div>
    </div>
  );
}

export default App;
