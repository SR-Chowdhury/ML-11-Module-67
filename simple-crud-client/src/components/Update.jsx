import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const loadedData = useLoaderData();

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password};
        console.log(user);
    }

    return (
        <div>
            <h1>Upate info of <br /> {loadedData?.email}</h1>
            <div>
                <form onSubmit={handleUpdate}>
                    <input type="email" name='email' defaultValue={loadedData?.email} placeholder='email' /><br />
                    <input type="password" name='password' defaultValue={loadedData?.password} placeholder='******' /><br />
                    <input type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default Update;