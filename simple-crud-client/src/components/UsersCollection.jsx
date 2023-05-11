import React from 'react';
import {useLoaderData, Link} from 'react-router-dom'

const UsersCollection = () => {

    const users = useLoaderData();

    return (
        <div>
            <Link to="/"><button> Home</button></Link>
            <h1>Total User: {users.length}</h1>
            <div>
                {
                    users.map((user, index) => <p key={index}>{user.email} : {user.password}</p>)
                }
            </div>
        </div>
    );
};

export default UsersCollection;