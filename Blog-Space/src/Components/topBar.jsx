import { SearchBar } from "./search";
import "../css/navbar.css";

export function NavBar({ blogs, allblogs, setBlogs }) {
  function signout() {
    localStorage.setItem("authToken", "");
    window.location = "/signin";
  }

  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={() => window.location = '/home'}>
        <h2>Blog<span className="highlight">.com</span></h2>
      </div>

      <div className="navbar-search">
        <SearchBar blogs={blogs} allblogs={allblogs} setBlogs={setBlogs} />
      </div>

      <div className="navbar-buttons">
        <button onClick={() => window.location = "/createBlog"}>Create Blog</button>
        <button onClick={() => window.location = "/profile"}>You</button>
        <button onClick={signout}>Log Out</button>
      </div>
    </div>
  );
}
