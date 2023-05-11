import { React, useState } from 'react';
import {useLoaderData, Link} from 'react-router-dom'

const UsersCollection = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);


    const handleDelete = _id => {
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount) {
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
                    alert('User successfully deleted!');
                }
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div>
            <Link to="/"><button> Home</button></Link>
            <h1>Total User: {users.length}</h1>
            <div>
                {
                    users.map((user, index) => 
                        <p key={index}>
                            {user.email} : {user.password} <button onClick={() => handleDelete(user._id)}><span>Delete</span></button>
                        </p>)
                }
            </div>
        </div>
    );
};

export default UsersCollection;