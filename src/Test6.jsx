import { useState } from "react";
import './Test6.css'; // Import the CSS file

function Test6() {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const submitHandler = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container"> {/* Apply the container class here */}
      <form onSubmit={submitHandler}>
        <label>
          Enter the UserName:
          <input 
            type="text" 
            placeholder="UserName" 
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </label>

        <label>
          Enter the Password:
          <input 
            type="password" 
            placeholder="Password" 
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </label>

        <input type="submit" value="submit"/>

      </form>
    </div>
  );
}

export default Test6;
