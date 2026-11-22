
import React, { useState } from "react";
import "../Sidebar.css";
import { useNavigate } from "react-router-dom";
import logo from '../logo.png'
const Sidebar = () => {
  const [active, setActive] = useState("Top Headlines");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const menuItems = [
    { name: "Dashboard", icon: "bi-grid" },
    { name: "Top Headlines", icon: "bi-globe2" },
    { name: "Bookmarks", icon: "bi-bookmark" },
    { name: "Reading History", icon: "bi-clock-history" },
  ];

  const categories = [
    { name: "Politics", icon: "bi-bank" },
    { name: "Business", icon: "bi-briefcase" },
    { name: "Technology", icon: "bi-cpu" },
    { name: "Sports", icon: "bi-trophy" },
    { name: "Entertainment", icon: "bi-film" },
    { name: "Health", icon: "bi-heart-pulse" },
    { name: "Science", icon: "bi-flask" },
  ];
  const navigate = useNavigate()

  const handleNavigation = (name) => {
    setActive(name);
    navigate(`/search?query=${name}`)
    setOpen(false);
  };
  const handleMenu = (name) => {
    setActive(name);
    setOpen(false);
  };
  function searchHandler(e){
    e.preventDefault()
    navigate(`/search?query=${search}`)
  }
  function handleEnter(e){
    if (e.key === 'Enter') {
      searchHandler(e);
    }
  }

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="btn mobile-menu-btn"
        onClick={() => setOpen(!open)}
      >
        <i className="bi bi-list"></i>
      </button>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      <aside className={`news-sidebar ${open ? "show" : ""}`}>

        {/* Logo */}
        <div className="sidebar-brand" style={{textAlign:'left'}}>

            <img width='60' src={logo}/>
          <div>
            <h4>NewSite</h4>
            <small>YOUR DAILY NEWS HUB</small>
          </div>
        </div>

        {/* Search */}
        <div className="sidebar-search">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Search news..." onKeyDown={(e) => handleEnter(e)} onChange={(e) => setSearch(e.target.value)} />
          <span>⌘ K</span>
        </div>

        {/* Main Menu */}
        <div className="sidebar-section">
          <p className="section-title">MENU</p>

          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`sidebar-link ${
                active === item.name ? "active" : ""
              }`}
              onClick={() =>  handleMenu(item.name)}
            >
              <i className={`bi ${item.icon}`}></i>
              <span>{item.name}</span>
              {item.name === "Top Headlines" && (
                <span className="new-badge">NEW</span>
              )}
            </button>
          ))}
        </div>

        {/* Categories */}
        <div className="sidebar-section">
          <p className="section-title">EXPLORE CATEGORIES</p>

          {categories.map((item) => (
            <button
              key={item.name}
              className={`sidebar-link ${
                active === item.name ? "active" : ""
              }`}
              onClick={() => handleNavigation(item.name)}
            >
              <i className={`bi ${item.icon}`}></i>
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Trending */}
        <div className="sidebar-section">
          <p className="section-title">TRENDING TOPICS</p>
          <div className="trending-tags">
            {["#AI", "#Elections", "#Markets", "#Space"].map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter-box">
          <i className="bi bi-envelope-paper"></i>
          <h6>Stay informed</h6>
          <p>Get the top stories delivered to your inbox.</p>
          <button>Subscribe Now</button>
        </div>

        {/* Profile */}
        <div className="sidebar-profile">
          <div className="profile-avatar">
            <i className="bi bi-person"></i>
          </div>
          <div>
            <h6>John Doe</h6>
            <small>Free Member</small>
          </div>
          <i className="bi bi-gear ms-auto"></i>
        </div>

      </aside>
    </>
  );
};

export default Sidebar;
