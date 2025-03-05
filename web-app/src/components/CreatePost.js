import React, {useEffect, useState} from "react";
import axios from "axios";
 
function CreatePost() {
    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);
 
   
        const handleSubmit = async (event) => {
            event.preventDefault();
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts",{
                    title,body,userId:1
                });
                console.log("Post Created", {title})
                
            }
            catch(error) {
                console.error("Error fetching users", error);
            }
        };

 
    return (
        <>
            <h2>Create post</h2>
            <form onSubmit={handleSubmit}>

                <label>Title: </label>
                <input type = "text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
               
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
 
export default CreatePost;  