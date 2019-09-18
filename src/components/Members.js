import React from 'react';

const Members = props => {
    return (
        //format this as table
        <div>
            {props.members.map(member => (
                <p>
                    <span>{member.characterName}</span>
                    <span>{member.playerName}</span>
                    <span>{member.email}</span>
                    <span>{member.class}</span>
                    <span>{member.role}</span>

                </p>
            ))}
        </div>
    )
}

export default Members