import axios from 'axios';
import React, { useState } from 'react'

export function Asy() {
    const [name, setname] = useState("");
    const [department, setdepartment] = useState("");
    const [salary, setsalary] = useState("");
    const [result, setResult] = useState([]);

    const getdata = async () => {

        console.log(name, department, salary);

        try {
            const res = await axios.post(`http://localhost:5000/api/data`, {
                name: name,
                department: department,
                salary: salary,
            })
            console.log(res.data);
            alert("data added successfully");
        }
        catch (error) {
            console.error(error);
        }
    };
    const deletedata = async () => {
        try {
            const res = await axios.post(`http://localhost:5000/api/delete`, {
                name: name,
            }
            )
            console.log(res.data);
            alert("data deleted successfully");
        }
        catch (error) {
            console.error(error);
        }
    };
    const updatedata = async () => {
        try {
            const res = await axios.post(`http://localhost:5000/api/update`, {
                name: name,
                department: department,
                salary: salary,
            }
            )
            console.log(res.data);
            alert("data updated successfully");
        }
        catch (error) {
            console.error(error);
        }
    };
    const readdata = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/read', {
                name: name
            });

            setResult(res.data.data);

            if (res.data.data.length === 0) {
                alert("No data found");
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <input type="text" placeholder="Name" onChange={(e) => {
                setname(e.target.value);
            }} />
            <input type="text" placeholder="Department" onChange={(e) => {
                setdepartment(e.target.value);
            }} />
            <input type="text" placeholder="Salary" onChange={(e) => {
                setsalary(e.target.value);
            }} />
            <br />
            <button onClick={getdata}>add data</button><br />
            <button onClick={deletedata}>delete data</button><br />
            <button onClick={updatedata}>update data</button><br />
            <button onClick={readdata}>read data</button><br />
            <>
                {result.map((item, index) => (
                    <div key={index}>
                        <p>Name: {item.name}</p>
                        <p>Department: {item.department}</p>
                        <p>Salary: {item.salary}</p>
                    </div>
                ))}
            </>
        </div>
    )
}

export default Asy;