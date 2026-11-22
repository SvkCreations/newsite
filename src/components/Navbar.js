
import React, { useState } from "react";
import "../Navbar.css";
import DateTime from "./DateTime";
import {useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate()

  const categories = [
    "For You",
    "Latest",
    "Politics",
    "Technology",
    "Business",
    "Sports",
    "Entertainment"
  ]
  function searchHandler(e) {
    e.preventDefault()
    navigate(`/search?query=${search}`)
  }
  function handleEnter(e){
    if (e.key === 'Enter') {
      searchHandler(e);
    }
  }

  return (
    <header className="news-navbar">

      {/* Top Navbar */}
      <div className="navbar-top">

        <div className="navbar-greeting justify-content-start">
          <h5>Good evening! 👋</h5>
          <DateTime />
        </div>

        {/* Search Bar */}
        <div className="navbar-search">
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Search news, topics, sources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => handleEnter(e)}
          />
          <kbd>Ctrl K</kbd>
        </div>

        {/* Actions */}
        <div className="navbar-actions">

          {/* Notifications */}
          <div className="navbar-dropdown">
            <button
              className="navbar-icon-btn notification-btn"
              onClick={() =>
                setShowNotifications(!showNotifications)
              }
            >
              <i className="bi bi-bell"></i>
              <span className="notification-dot"></span>
            </button>

            {showNotifications && (
              <div className="dropdown-panel notification-panel">
                <h6>Notifications</h6>
                <div className="notification-item">
                  <i className="bi bi-newspaper"></i>
                  <div>
                    <strong>Breaking News</strong>
                    <p>New headlines are available.</p>
                  </div>
                </div>
                <div className="notification-item">
                  <i className="bi bi-bookmark"></i>
                  <div>
                    <strong>Reading Reminder</strong>
                    <p>Check your saved articles.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="navbar-dropdown">
            <button
              className="navbar-profile"
              onClick={() => setShowProfile(!showProfile)}
            >
              <div className="navbar-avatar">
                <i className="bi bi-person"></i>
              </div>
              <div className="profile-info">
                <strong>Soubhik</strong>
                <small>thesvk1@gmail.com</small>
              </div>
              <i className="bi bi-chevron-down"></i>
            </button>

            {showProfile && (
              <div className="dropdown-panel profile-panel">
                <a href="/profile">
                  <i className="bi bi-person"></i> My Profile
                </a>
                <a href="/settings">
                  <i className="bi bi-gear"></i> Settings
                </a>
                <a href="/bookmarks">
                  <i className="bi bi-bookmark"></i> Bookmarks
                </a>
                <hr />
                <a href="/logout" className="logout-link">
                  <i className="bi bi-box-arrow-right"></i> Logout
                </a>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Category Navigation */}
      <div className="navbar-bottom">
        <div className="category-heading">
          <span>EXPLORE TODAY'S STORIES</span>
          <span className="live-status">
            <span></span> Live Updates
          </span>
        </div>

        <div className="category-nav">
          {categories.map((category, index) => (
            <button to={`/search?query=${category}`}
              key={category}
              
              onClick={() => navigate(`/search?query=${category}`)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

    </header>
  );
};

export default Navbar;
