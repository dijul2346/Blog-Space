import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export function getBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [allblogs, setAllBlogs] = useState([]);

  const fetchBlogs = useCallback(() => {
    axios.get("http://localhost:3000/blogs", {
      headers: {
        token: localStorage.getItem("authToken"),
      },
    }).then(function (res) {
      setBlogs(res.data);
      setAllBlogs(res.data);
    });
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return { blogs,allblogs,setBlogs,fetchBlogs};
}

