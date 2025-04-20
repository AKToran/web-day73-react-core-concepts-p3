import React from 'react';
import useInputField from '../Hooks/useInputField';

const HookForm = () => {
  const [name, nameOnChange] = useInputField('');
  const [email, emailOnChange] = useInputField('');
  const [password, passwordOnChange] = useInputField('');


  const handleSubmit = e => { 
    e.preventDefault();
    console.log("submit", name, email);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={nameOnChange} value={name} type="text" name="name" id="name" placeholder='name' />
        <br />
        <input onChange={emailOnChange} value={email}
        placeholder='email' type="email" name="email" id="email" />
        <br />
        <input onChange={passwordOnChange} value={password} type="password" name="password" id="password" placeholder='password' />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;