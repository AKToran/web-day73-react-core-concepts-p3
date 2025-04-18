import React from "react";

const SimpleForm = () => {
  return (
    <div className="m-8">
      <form
        className="space-y-2"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event.target.name.value);
          console.log(event.target.email.value);
        }}
        action=""
      >
        <input
          name="name"
          type="text"
          placeholder="your name"
        />
        <br />
        <input
        type="email" 
        name="email" 
        id="" placeholder="your email" />
        <br />
        <input 
        type="submit" 
        value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
