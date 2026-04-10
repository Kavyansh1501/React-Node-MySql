import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Slogin.css"

export function Slogin() {
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const logindata = async () => {
          if (!name || !password) {
        setError("All fields are required");
        return;
    }
    setError("");
    
        try {
            const res = await axios.post("http://localhost:5000/site/login", {
                name,
                password
            });

            if (res.data.success) {
                alert("Login Successful");
                navigate("/Sdashboard");
            } else {
                setError("Invalid Name or Password");
            }
        } catch (error) {
            console.error(error);
            setError("Server error");
        }
    };

    return (
    <div className="login-container">
        <h2>Login</h2>

        <input
            type="text"
            placeholder="Name"
            onChange={(e) => setname(e.target.value)}
        />

        <input
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
        />

        <button onClick={logindata}>Login</button>

        <p className="error">{error}</p>
    </div>
    );
}

export default Slogin;