import React, { useState } from 'react';
import Form from './Form';
import MemberList from './MemberList'


import './App.css';


// const memberObject = [
//   {
//       id: 1,
//       username: 'brittmo',
//       email: 'brittmo@brittcodes.com',
//       role: 'Queen of Everything'
//   }
// ]

// const MemberList = () => {
//   return (
//     <div>
//       {memberObject.map(member => {
//         return(
//         <div key={memberObject.id}>
          
//           <h3>{memberObject.username}</h3>
//           <div>email: {memberObject.email}</div>
//           <div>role: {memberObject.role}</div>

//         </div>
//       )})}
//     </div>
//   );
// }

export default function App() {
  const [memberList,setMemberList] = useState([{
    username: "brittmo",
    email: "britt@brittcodes.com",
    role: "Queen of Everything"
  }]);

  const addToList = (newMember) => {
      setMemberList([...memberList, newMember])
  }
  return(
    
    <div className = 'App'>
      <MemberList members={memberList}/>
      <Form addToList={addToList}/>
    </div>
    
   
   
   
  )
}


