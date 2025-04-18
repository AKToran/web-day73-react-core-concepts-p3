import React, { useState } from 'react';

const ControlledField = () => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handlePasswordOnChange = e =>{
    console.log(e.target.value);
    setPassword(e.target.value);

    const pass = e.target.value;

    if(pass.length < 6){
      setPasswordError("Password length must be greater than 5.")
    }
    else{
      setPasswordError('');
    }
  }

  return (
    <div>
      <h1>This is to interact with user when they are filling it.</h1>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" required id="name" placeholder='email' /> 
        <br />
        {/* to provide a default value use defaultValue parameter. value parameter renders it as read only field */}
        <input 
        type="password" 
        value={password} 
        name="password" 
        placeholder='password' 
        required id="password" 
        onChange={handlePasswordOnChange}
        />
        <br />
        <p className='text-red-400'><small>{passwordError}</small></p>
        <br />
        <input type="submit" value="SUBMIT" />
      </form>
      

    </div>
  );
};

export default ControlledField;