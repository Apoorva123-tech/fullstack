import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from '../config';
import './AddMember.css';

function AddMember() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    department: '',
    joiningDate: '',
    skills: [],
    experience: '',
    education: '',
    bio: '',
    image: null
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        skills: checked 
          ? [...prev.skills, value]
          : prev.skills.filter(skill => skill !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (key === 'skills') {
          formDataToSend.append(key, JSON.stringify(formData[key]));
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });

      await axios.post(API_ENDPOINTS.MEMBERS, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setSuccess('Member added successfully!');
      setTimeout(() => {
        navigate('/view-members');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Error adding member');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-member-container">
      <h2>Add New Team Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Basic Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                id="role"
                name="role"
                className="form-control"
                value={formData.role}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Professional Details</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <select
                id="department"
                name="department"
                className="form-control"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="Development">Development</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Management">Management</option>
                <option value="Research">Research</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="joiningDate">Joining Date</label>
              <input
                type="date"
                id="joiningDate"
                name="joiningDate"
                className="form-control"
                value={formData.joiningDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experience (in years)</label>
            <input
              type="number"
              id="experience"
              name="experience"
              className="form-control"
              value={formData.experience}
              onChange={handleChange}
              min="0"
              step="0.5"
              required
            />
          </div>

          <div className="form-group">
            <label>Skills</label>
            <div className="checkbox-group">
              <label className="checkbox-option">
                <input
                  type="checkbox"
                  name="skills"
                  value="JavaScript"
                  checked={formData.skills.includes('JavaScript')}
                  onChange={handleChange}
                />
                JavaScript
              </label>
              <label className="checkbox-option">
                <input
                  type="checkbox"
                  name="skills"
                  value="React"
                  checked={formData.skills.includes('React')}
                  onChange={handleChange}
                />
                React
              </label>
              <label className="checkbox-option">
                <input
                  type="checkbox"
                  name="skills"
                  value="Node.js"
                  checked={formData.skills.includes('Node.js')}
                  onChange={handleChange}
                />
                Node.js
              </label>
              <label className="checkbox-option">
                <input
                  type="checkbox"
                  name="skills"
                  value="UI/UX"
                  checked={formData.skills.includes('UI/UX')}
                  onChange={handleChange}
                />
                UI/UX
              </label>
              <label className="checkbox-option">
                <input
                  type="checkbox"
                  name="skills"
                  value="Project Management"
                  checked={formData.skills.includes('Project Management')}
                  onChange={handleChange}
                />
                Project Management
              </label>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Additional Information</h3>
          <div className="form-group">
            <label htmlFor="education">Education</label>
            <input
              type="text"
              id="education"
              name="education"
              className="form-control"
              value={formData.education}
              onChange={handleChange}
              placeholder="e.g., B.Tech in Computer Science"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              className="form-control"
              value={formData.bio}
              onChange={handleChange}
              rows="4"
              placeholder="Write a brief introduction about yourself..."
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Profile Image</h3>
          <div className="file-upload">
            <label className="file-upload-label">
              <span className="file-upload-icon">📷</span>
              <span>Click to upload profile image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="preview-image"
            />
          )}
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <button
          type="submit"
          className="submit-button"
          disabled={loading}
        >
          {loading ? 'Adding Member...' : 'Add Member'}
        </button>
      </form>
    </div>
  );
}

export default AddMember; 