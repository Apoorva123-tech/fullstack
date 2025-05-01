import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to Student Team Management</h2>
      <p className="welcome-text">
        This application helps you manage your student team members efficiently.
        You can add new members, view existing members, and access detailed information
        about each team member.
      </p>
      
      <div className="action-buttons">
        <Link to="/add-member" className="action-button">
          Add New Member
        </Link>
        <Link to="/view-members" className="action-button">
          View All Members
        </Link>
      </div>
    </div>
  );
}

export default Home; 