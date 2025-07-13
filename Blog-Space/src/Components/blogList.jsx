import { useEffect, useState, useCallback } from "react";
import axios from "axios";
export function BlogList({ blogs,allBlogs,fetchBlogs }) {
  return (
    <div className="container">
      {blogs.map((blog) => (
        <div
          key={blog._id}
          style={{ marginTop: "100px", width: "80%", justifySelf: "center" }}
        >
          <div className="blog">
            <h3>{blog.title}</h3>
            <p>{blog.userName}</p>
            <p>{blog.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}