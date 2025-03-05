import React, { useState } from "react";
import axios from "axios";
 
function UpdatePost() {
  const [postId, setPostId] = useState("");
  const [title, setTitle] = useState("");
 
  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
`https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          title,
          body: "Updated content", // Placeholder body, as required by API
          userId: 1, // Required by JSONPlaceholder API
        }
      );
      console.log("Post Updated:", response.data);
    } catch (error) {
      console.error("Error updating post", error);
    }
  };
 
  return (
    <>
      <h2>Update Post</h2>
      <form onSubmit={handleUpdate}>
        <label>Post ID: </label>
        <input
          type="number"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
        <label>New Title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </>
  );
}
 
export default UpdatePost;