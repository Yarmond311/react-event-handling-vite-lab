// Code PasswordInput Component Here
import React from "react";
import SubmitButton from "./SubmitButton";

function PasswordInput() {
  function handleChange() {
    console.log("Entering password…");
  }

  return (
    <div>
      <input 
        type="password" 
        onChange={handleChange} 
      />
      <SubmitButton />
    </div>
  );
}

export default PasswordInput;