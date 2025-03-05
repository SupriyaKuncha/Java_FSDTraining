import React from "react";
import { useParams } from "react-router-dom";
 
function User() {
    let {username} = useParams();
    return (
        <h2>Welcome, {username}</h2>
    );
}
 
export default User;
 