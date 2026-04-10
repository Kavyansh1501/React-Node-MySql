import axios from 'axios';
import React, { useState } from 'react'

export function Hey() {
    const [name, setname] = useState("");
    const [department, setdepartment] = useState("");
    const [salary, setsalary] = useState("");

    const getdata = () => {

        console.log(name, department);


        axios.post(`http://localhost:5000/data`,{
            name:name,
            department:department,
            salary:salary,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    return (
        <div>
            <input type="text" onChange={(e) => {
                setname(e.target.value);
            }} />
            <input type="text" onChange={(e) => {
                setdepartment(e.target.value);
            }} />
            <input type="text" onChange={(e) => {
                setsalary(e.target.value);
            }} />
            <button onClick={getdata}>get data</button> 
        </div>
    )
}

    export default Hey ;