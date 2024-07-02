# SEA Salon Application

SEA Salon is a web application for booking salon services, submitting customer reviews, and managing user authentication. This project includes both frontend and backend components.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)

  
## Features

- User Authentication (Signup, Login, Logout)
- Booking Salon Services
- Protected Routes for Authenticated Users

## Technologies Used

- Frontend:
  - React
  - Tailwind CSS
  - Axios
  - React Router DOM

- Backend:
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - JSON Web Tokens (JWT)
  - bcryptjs

## Setup and Installation

### Prerequisites

- Node.js (v20.x)
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/sea-salon.git
   cd sea-salon
  
2. **Install dependencies for backend:**

  ```bash
   cd backend
   npm install
```

3. **Install dependencies for both frontend:**

  ```bash
   cd ../sea-salon
   npm install

```

## Environtment Variables
  Create a .env file in the backend directory and add the following environment variables:

   MONGODB_URI=mongodb://127.0.0.1:27017/seasalon
   JWT_SECRET=your_jwt_secret_key
   PORT=5000


## Running the Application
  Start MongoDB
  Ensure MongoDB is running on your machine. You can start it using the following command:

For Windows:

```bash
  "C:\Program Files\MongoDB\Server\<your_version>\bin\mongod.exe" --dbpath "C:\data\db"
```

For macOS/Linux : 
```bash
  mongod --dbpath /usr/local/var/mongodb
```

## Start the Backend Server
In the backend directory, start the backend server:
```bash
  cd backend
  node server.js
```

## Start the Frontend Development Server
In the sea-salon directory, start the frontend development server:
```bash
  cd sea-salon
  npm start

```
## Acces the Application 
Open your browser and navigate to http://localhost:3000 to access the SEA Salon application.


### Summary

This `README.md` provides a comprehensive guide on how to set up and run your SEA Salon application, including necessary environment variables and detailed instructions for both backend and frontend components. You can customize it further to match any specific details or requirements for your project.

