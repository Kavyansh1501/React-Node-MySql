import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
import "./resgister.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export function Register() {
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    
    const getdata = async () => {

        console.log(name, password);
         if (!name || !password) {
            setError("All fields are required");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setError(""); 

        try {
            const res = await axios.post(`http://localhost:5000/site/data`, {
                name: name,
                password: password,
            })
            console.log(res.data);
            alert("data added successfully");
            navigate("/Slogin");

        }
        catch (error) {
            console.error(error);
        }
    };
    
     return (
    <div className="page">

        <div className="slider">
    <Slider {...settings}>
        <div>
            <img src="https://picsum.photos/1200/400?1" alt="1" />
        </div>
        <div>
            <img src="https://picsum.photos/1200/400?2" alt="2" />
        </div>
        <div>
            <img src="https://picsum.photos/1200/400?3" alt="3" />
        </div>
    </Slider>
</div>
        <div className="container">
            <h2>Register</h2>

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

            <button onClick={getdata}>Register</button>
            <button onClick={() => navigate("/Slogin")}>Go to Login</button>

            <p className="error">{error}</p>
        </div>

    </div>

             )
            }
            
            export default Register;