# Student Team Management Application

A comprehensive full-stack application for managing student team members. This application allows you to add team members, upload their profile pictures, view all members, and access detailed information about each member.

## Features

- Modern, responsive user interface
- Add new team members with profile images
- View all team members in a grid layout
- View detailed information about each member
- Image upload functionality
- RESTful API backend
- MongoDB database integration

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Axios for API calls
- Modern CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB for database
- Multer for file uploads

## Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/student-team-management.git
cd student-team-management
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables
Create a `.env` file in the backend directory with:
```
MONGODB_URI=mongodb://localhost:27017/student-team
PORT=5000
```

4. Create uploads directory
```bash
mkdir backend/uploads
```

5. Start the application
```bash
# Start backend server (from backend directory)
npm start

# Start frontend development server (from frontend directory)
npm start
```

## API Endpoints

### Get all members
- **URL**: `/api/members`
- **Method**: `GET`
- **Response**: List of all team members

### Get single member
- **URL**: `/api/members/:id`
- **Method**: `GET`
- **Response**: Detailed information about a specific member

### Add new member
- **URL**: `/api/members`
- **Method**: `POST`
- **Content-Type**: `multipart/form-data`
- **Body**:
  - name: string (required)
  - role: string (required)
  - email: string (required)
  - image: file (required)

## Project Structure
```
student-team-management/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── backend/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
└── README.md
```

## Usage

1. Access the application at `http://localhost:3000`
2. Use the navigation menu to:
   - Add new team members
   - View all team members
   - Access individual member details

## Development

- Frontend runs on port 3000
- Backend runs on port 5000
- MongoDB should be running locally
- Images are stored in the `backend/uploads` directory

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 