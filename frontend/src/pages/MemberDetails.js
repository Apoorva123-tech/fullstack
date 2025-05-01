import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './MemberDetails.css';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMemberDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/members/${id}`);
        setMember(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching member details. Please try again later.');
        setLoading(false);
      }
    };

    fetchMemberDetails();
  }, [id]);

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading member details...</p>
    </div>
  );
  
  if (error) return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <p className="error-message">{error}</p>
      <Link to="/view-members" className="back-button">Back to Members List</Link>
    </div>
  );
  
  if (!member) return (
    <div className="not-found-container">
      <h2>Member Not Found</h2>
      <p>The requested member could not be found.</p>
      <Link to="/view-members" className="back-button">Back to Members List</Link>
    </div>
  );

  return (
    <div className="member-details-container">
      <div className="member-profile">
        <div className="profile-image-container">
          <img 
            src={`http://localhost:5000/uploads/${member.image}`} 
            alt={member.name}
            className="profile-image"
          />
        </div>
        
        <div className="profile-info">
          <h1 className="member-name">{member.name}</h1>
          <p className="member-role">{member.role}</p>
          
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <a href={`mailto:${member.email}`} className="info-value">{member.email}</a>
            </div>
          </div>

          <div className="member-stats">
            <div className="stat-item">
              <span className="stat-label">Member Since</span>
              <span className="stat-value">
                {new Date(member.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Member ID</span>
              <span className="stat-value">{member._id}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <Link to="/view-members" className="back-button">
          ← Back to Members List
        </Link>
        <button className="edit-button" onClick={() => alert('Edit functionality coming soon!')}>
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default MemberDetails; 