import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!member) return <div>Member not found</div>;

  return (
    <div className="member-details">
      <img 
        src={`http://localhost:5000/uploads/${member.image}`} 
        alt={member.name}
      />
      <h2>{member.name}</h2>
      <div className="details-content">
        <p><strong>Role:</strong> {member.role}</p>
        <p><strong>Email:</strong> {member.email}</p>
        <p><strong>Joined:</strong> {new Date(member.createdAt).toLocaleDateString()}</p>
      </div>
      <Link to="/view-members" className="back-button">
        Back to Members List
      </Link>
    </div>
  );
}

export default MemberDetails; 