export function SearchBar({ blogs, allblogs, setBlogs }) {
  function search() {
    const input = document.getElementById("search").value.toLowerCase();
    const found = allblogs.filter(blog =>
      blog.title.toLowerCase().includes(input) ||
      blog.userName.toLowerCase().includes(input)
    );
    setBlogs(input ? found : allblogs);
  }

  function clearSearch() {
    document.getElementById("search").value = "";
    setBlogs(allblogs);
  }

  return (
    <div className="search-bar">
      <input type="text" id="search" placeholder="Search by title or user" />
      <button onClick={search}>Search</button>
      <button className="clear-btn" onClick={clearSearch}>Clear</button>
    </div>
  );
}
