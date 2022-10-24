import { useState } from "react";

function App() {
    const [username,setUsername] = useState("")
    const [emai,setEmail] = useState("")
    const [password,setPassword] = useState("")
    return (
        <div className="App">
            <div>Username</div>
            <input type="text" />
            <div>Email</div>
            <input type="text" />
            <div>Password</div>
            <input type="text" />
            <button>button</button>
        </div>
    );
}