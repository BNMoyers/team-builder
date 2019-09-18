import React from 'react';

const Members = props => {
    return (
        //format this as table
        <table>
            <thead>
                <tr>
                    <th>Character Name</th>
                    <th>Player Name</th>
                    <th>Email</th>
                    <th>Class</th>
                    <th>Party Role</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            
            {props.members.map(member => (
                <tr key ={member.id}>
                    <td>{member.characterName}</td>
                    <td>{member.playerName}</td>
                    <td>{member.email}</td>
                    <td>{member.class}</td>
                    <td>{member.role}</td>
                    <td><button onClick={()=> {props.memberToEdit(member)}}>Edit</button></td>
                </tr>
            ))}
        
            </tbody>
        </table>
       
    )
}

export default Members