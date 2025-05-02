const API_URL = process.env.REACT_APP_API_URL || 'https://student-team-management-backend.onrender.com';

export const API_ENDPOINTS = {
  MEMBERS: `${API_URL}/api/members`,
  MEMBER: (id) => `${API_URL}/api/members/${id}`,
  UPLOADS: `${API_URL}/uploads`
}; 