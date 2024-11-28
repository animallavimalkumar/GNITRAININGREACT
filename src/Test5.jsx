import { useState } from "react";
import './App.css'; // Import the CSS file

function Test5() {
  let [user, setUser] = useState("");

  const handler = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className="container">  {/* Apply the container class here */}
      <input 
        type="text" 
        value={user} 
        name="user" 
        onChange={handler} 
        className="input-field" 
      />
      <h2 className="heading">Check Here: {user}</h2>
    </div>
  );
}

export default Test5;
