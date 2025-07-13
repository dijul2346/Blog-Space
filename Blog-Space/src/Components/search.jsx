import { useEffect, useState, useCallback } from "react";
export function SearchBar({ blogs, allblogs, setBlogs }){
    function search(){
     console.log("Works")
    let item=document.getElementById("search").value
    item=item.toLowerCase()
    const found = allblogs.filter(u =>
    u.title.toLowerCase().includes(item) ||
    u.userName.toLowerCase().includes(item)
    );
    console.log(found)
    setBlogs(found);
    if(item==""){
      setBlogs(allblogs)
    }
  }
  function clearSearch(){
    setBlogs(allblogs)
  }
  return(
    <div style={{gap:"20px"}}>
        <input type="text" placeholder="Search" id="search" style={{height:"30px",width:"350px",borderRadius:"10px",marginRight:"10px"}} />
        <button onClick={search}>Search</button>
        <button onClick={clearSearch}>Clear</button>
    </div>
  )
}