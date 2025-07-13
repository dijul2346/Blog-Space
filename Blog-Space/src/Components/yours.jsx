import { useEffect, useState, useCallback } from "react";
import axios from "axios";
export function ProfileList({ blogs,allBlogs,fetchBlogs }) {
    const userName = localStorage.getItem("userName");
    const userBlogs = blogs.filter(blog => blog.userName === userName);
    function deleteBlog(id) {
    axios.delete(`http://localhost:3000/blogs/${id}`, {
      headers: {
        token: localStorage.getItem("authToken"),
      },
    }).then(() => {
      fetchBlogs();
    });
  }
  return (
    <div className="container">
      {userBlogs.map((blog) => (
        <div
          key={blog._id}
          style={{ marginTop: "100px", width: "80%", justifySelf: "center" }}
        >
          <div className="blog">
            <h3>{blog.title}</h3>
            <p>{blog.userName}</p>
            <p>{blog.content}</p>
            <button onClick={() => deleteBlog(blog._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}