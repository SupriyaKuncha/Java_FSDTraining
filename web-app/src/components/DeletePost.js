import React, { useState } from "react";
import axios from "axios";
 
function DeletePost() {
  const [postId, setPostId] = useState("");
 
  const handleDelete = async (event) => {
    event.preventDefault();
    try {
await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      console.log(`Post with ID ${postId} deleted successfully`);
    } catch (error) {
      console.error("Error deleting post", error);
    }
  };
 
  return (
    <>
      <h2>Delete Post</h2>
      <form onSubmit={handleDelete}>
        <label>Post ID: </label>
        <input
          type="number"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
        <button type="submit">Delete</button>
      </form>
    </>
  );
}
 
export default DeletePost;