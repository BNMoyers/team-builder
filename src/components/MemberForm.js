import React, { useState } from 'react';

const MemberForm = props => {
    console.log(props);
    const [member, setMember] = useState({ name:''});

    const handleChange = event => {
        setMember({...member, [event.target.name]: event.target.value })
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMembers(member);
        setMember({characterName: '',
                   playerName: '',
                   email: '',
                   class: '',
                   role: ''})
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='characterName'>Character Name:</label>
            <input type='text'
                    id='charname'
                    name='characterName'
                    value={member.characterName}
                    onChange={handleChange}
            />
             <label htmlFor='playerName'>Player Name:</label>
            <input type='text'
                    id='playername'
                    name='playerName'
                    value={member.playerName}
                    onChange={handleChange}
            />
             <label htmlFor='playerEmail'>Player Email:</label>
            <input type='email'
                    id='email'
                    name='email'
                    value={member.email}
                    onChange={handleChange}
            />
             <label htmlFor='class'>Character Class:</label>
            <input type='text'
                    id='class'
                    name='class'
                    value={member.class}
                    onChange={handleChange}
            />
              <label htmlFor='role'>Party Role:</label>
            <input type='text'
                    id='role'
                    name='role'
                    value={member.role}
                    onChange={handleChange}
            />
            <button type='submit'>Add Party Member</button>
    
        </form>
    )
};



export default MemberForm