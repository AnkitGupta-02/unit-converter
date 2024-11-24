import React, { useState } from "react";
import Input from '../Input/Input';
import Button from '../Button/Button';

function Form() {
    const [username, setUsername] = useState("");
  return (
    <div className="p-6">
        <h1 className="text-xl font-bold mb-4">User Form</h1>
        <form>
            <Input
             labelText="Username"
             inputType="text"
             inputName="username"
             inputValue={username}
             onChange={(e) => setUsername(e.target.value)}
             placeholder="Enter your username"
            />
            <Button>Submit</Button>
        </form>
    </div>
  )
}

export default Form;