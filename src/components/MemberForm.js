import React, { useState } from 'react';

const MemberForm = props => {
    const [member, setMember] = useState({ name:''});

    return (
        <form>
            <label htmlFor='name'>Name:</label>
            <input type='text'
                    id='name'
                    name='name'
                    value={member.name}
    
            />
            
    
        </form>
    )
};



export default MemberForm