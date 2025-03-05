import React, {useEffect, useState} from "react";
import axios from "axios";
 
function PostList() {
    const [posts, setPost] = useState([]);
 
    useEffect( () => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
               
                setPost(response.data);
            }
            catch(error) {
                console.error("Error fetching users", error);
            }
        };
        fetchPosts();
    }, []);
 
    return (
        <>
            <h2>users List</h2>
            <ul>
                {posts.slice(0,10).map( (posts) => (
                    <li key={posts.id}>{posts.title}  ({posts.body})</li>
                ))}
            </ul>
        </>
    );
}
 
export default PostList;