import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import ViewMembers from './pages/ViewMembers';
import MemberDetails from './pages/MemberDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Student Team Management</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/add-member">Add Member</Link></li>
              <li><Link to="/view-members">View Members</Link></li>
            </ul>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-member" element={<AddMember />} />
            <Route path="/view-members" element={<ViewMembers />} />
            <Route path="/member/:id" element={<MemberDetails />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>&copy; 2023 Student Team Management</p>
        </footer>
      </div>
    </Router>
  );
}

export default App; 