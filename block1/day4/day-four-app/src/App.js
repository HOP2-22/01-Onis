import './App.css';
import { useState } from 'react';

function App() {
  const [nameValue,setNameValue] = useState("")
  const [EmailValue,setEmailValue] = useState("")
  //Ur mom hehehehaw
  return (
    <div className="App">
      <p className="signup">sign up ______________________________________</p>
      <p className="texts">Name</p>
      <input
        type="text"
        className="nametext"
        value={nameValue}
        onChange={(e) => {
          setNameValue(e.target.value);
        }}
      ></input>
      <p className="texts">Email</p>
      <input
        type="email"
        className="nametext"
        value={EmailValue}
        onChange={(e) => {
          setEmailValue(e.target.value);
        }}
      ></input>
      <button
        className="submit"
        onClick={() => {
            console.log("name  : "+nameValue);
            console.log("email : "+EmailValue);
          }
        }

      >SUBMIT</button>
    </div>
  );
}

export default App;
