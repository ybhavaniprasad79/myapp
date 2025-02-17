# Milestone1
This project refers to the implementation of an e-commerce application containing a structured front-end and a back-end; 
the front end is responsible for the user's interface and experiences, while back-end is engaged in business logics, operations with databases and APIs.
# Milestone 2
# Login Page - React & CSS

## Overview
This project is a simple, modern login page made using *React.js* and *CSS*. Features include:
Email and Password input fields
"Remember Me" checkbox
"Forgot Password?" link
Submit button
Sign-up option
Icons for email input and password visibility toggle

## Features
Responsive UI Designed for smooth customer experience with varying screen sizes.
- *Password Visibility Toggle:* Users can toggle the password visibility.
- *Validation (Optional):* Can be extended with form validation.

## ???? Technologies Used
- *React.js* - Component-based UI development
- *CSS* - Styling for the form and layout
- *React Icons* - Icons for email and password fields


## Milestone 4: Backend Setup

## Overview
With Milestone 2 complete, we built the frontend foundation of our e-commerce application. In Milestone 3, we focused on setting up the backend by:
 Structuring backend folders
Setting up a Node.js & Express server
 Connecting the project to MongoDB
 Implementing basic error handling

This ensures that our application has a strong backend to support future development.

## Key Achievements
1. Organized Backend Folder Structure
We created a well-structured backend setup:

graphql
Copy
Edit
backend/
│── controllers/   # Handles API logic  
│── models/        # Defines database schemas  
│── routes/        # Manages API endpoints  
│── middleware/    # Custom middlewares (error handling, authentication, etc.)  
│── config/        # Database connection setup  
│── server.js      # Main server file  
 2. Server Setup with Express.js
Installed Express.js and configured the backend server.
Used dotenv to manage environment variables.
Server runs on PORT 5000 (or from .env file).
 3. Database Connection (MongoDB Atlas)
Connected the backend to MongoDB Atlas for data storage.
Used Mongoose to define models for products, users, and orders.
Verified the database connection with logs.
4. Implemented Basic Error Handling
Added middleware to catch errors and return clear error messages.
Improved debugging and user-friendly API responses.
## Technologies Used
Node.js & Express.js – Backend framework
MongoDB Atlas & Mongoose – Database management
dotenv – Manage environment variables
Cors & Body-Parser – Middleware for API requests


## Milestone 3: User Model, Controller & File Uploads

# Overview
In this milestone, we focused on setting up key backend features for user management and file uploads. With guidance from our mentor, we completed:
 User Model – Defines how user data is structured in MongoDB.
 User Controller – Handles API logic for user-related operations.
 Multer Setup – Enables image/file uploads for user profiles and products.

# Key Achievements
1. Created the User Model (User.js)
Defined a Mongoose schema for user data, including:
name, email, password (with encryption using bcrypt).
role (Admin/User distinction).
profileImage field to store uploaded images.

### Milestone 5: Building the Sign-Up Page & Implementing Form Validation

# Overview
In this milestone, we focused on creating a Sign-Up Page where users can register an account. We also implemented form validation to ensure users enter correct and valid data before submitting the form. This helps improve the user experience and ensures the backend receives clean and structured information.

# Key Achievements
1. Built the Sign-Up Page (HTML, CSS, React.js)
Designed a clean and user-friendly registration form.
Used React.js for interactivity and CSS for styling.
2. Implemented Form Validation
Name Field: Ensures the name is entered.
Email Validation: Checks if the email is in the correct format.
Password Validation: Requires at least 8 characters, one uppercase letter, and one number.
Error Messages: Displays real-time feedback when input is invalid.
# Technologies Used
React.js – Frontend Framework
HTML & CSS – Form Structure & Styling
JavaScript (ES6) – Form Validation Logic