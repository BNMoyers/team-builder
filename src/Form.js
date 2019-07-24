import React from 'react';


export default function Form() {

    return(
    <form>
      <label>
        Username: 
        <input 
          type='name'
          placeholder="name"/>
      </label>
      
      <label>
        E-Mail:
        <input 
        type='email'
        placeholder="email"/>
      </label>
      
      <label>
        Password:
        <input 
        type='password'
        placeholder="password"
        />
      </label>
    </form>
    )
}




