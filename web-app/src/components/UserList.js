import React, {useEffect, useState} from "react";
 
function UserList() {
    const [users, setusers] = useState([]);
 
    useEffect( () => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok){
                    throw new Error("Failed to fetch users");
                }
                const data = await response.json();
                setusers(data);
            }
            catch(error) {
                console.error("Error fetching users", error);
            }
        };
        fetchUsers();
    }, []);
 
    return (
        <>
            <h2>users List</h2>
            <ul>
                {users.map( (user) => (
                    <li key={user.id}>{user.name}  ({user.email})</li>
                ))}
            </ul>
        </>
    );
}
 
export default UserList;