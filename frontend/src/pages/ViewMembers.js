import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ViewMembers() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/members');
        setMembers(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching members. Please try again later.');
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <h2>Team Members</h2>
      <div className="member-list">
        {members.map(member => (
          <div key={member._id} className="member-card">
            <img 
              src={`http://localhost:5000/uploads/${member.image}`} 
              alt={member.name}
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <Link to={`/member/${member._id}`} className="view-details">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMembers; 