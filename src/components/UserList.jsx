import React from 'react';
import useResources from './useResources';

const UserList = () => {
   /*
    * This is an example of using a custom hook that was built for a totally different component.
    */
    const users = useResources('users');
    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>);
};


export default UserList;
