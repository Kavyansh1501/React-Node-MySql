import React from 'react'
import axios from 'axios';

export const ConnectionD = () => {
    return (
        <div>
            <button onClick={() => {
                axios.post('http://localhost:5000/delete?name=sher')
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            }}>
                delete data
            </button>

        </div>
    )
}
export default ConnectionD;