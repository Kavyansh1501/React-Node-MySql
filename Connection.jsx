import React from 'react'
import axios from 'axios';

export const Connection = () => {
    return (
        <div>
            <button onClick={() => {
                axios.post('http://localhost:5000/data?name=sanjana&department=Ai&salary=78600')
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            }}>
                Fetch Data
            </button>

        </div>
    )
}
export default Connection;