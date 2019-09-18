import React, { useState } from 'react';

const MemberForm = props => {
    const [member, setMember] = useState({ name:''});

    return (
        <form>
            <label htmlFor='characterName'>Character Name:</label>
            <input type='text'
                    id='charname'
                    name='characterName'
                    value={member.characterName}
    
            />
             <label htmlFor='playerName'>Player Name:</label>
            <input type='text'
                    id='playername'
                    name='playerName'
                    value={member.playerName}
    
            />
             <label htmlFor='playerEmail'>Player Email:</label>
            <input type='email'
                    id='email'
                    name='email'
                    value={member.email}
    
            />
             <label htmlFor='class'>Character Class:</label>
            <input type='text'
                    id='class'
                    name='class'
                    value={member.class}
    
            />
              <label htmlFor='role'>Party Role:</label>
            <input type='text'
                    id='role'
                    name='role'
                    value={member.role}
    
            />
            
    
        </form>
    )
};



export default MemberForm