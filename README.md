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

# Milestone 3: Backend Setup

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
│── controllers/ # Handles API logic  
│── models/ # Defines database schemas  
│── routes/ # Manages API endpoints  
│── middleware/ # Custom middlewares (error handling, authentication, etc.)  
│── config/ # Database connection setup  
│── server.js # Main server file  
 2. Server Setup with Express.js
Installed Express.js and configured the backend server.
Used dotenv to manage environment variables.
Server runs on PORT 5000 (or from .env file). 3. Database Connection (MongoDB Atlas)
Connected the backend to MongoDB Atlas for data storage.
Used Mongoose to define models for products, users, and orders.
Verified the database connection with logs. 4. Implemented Basic Error Handling
Added middleware to catch errors and return clear error messages.
Improved debugging and user-friendly API responses.

## Technologies Used

Node.js & Express.js – Backend framework
MongoDB Atlas & Mongoose – Database management
dotenv – Manage environment variables
Cors & Body-Parser – Middleware for API requests

# Milestone 4: User Model, Controller & File Uploads

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

# Milestone 5: Building the Sign-Up Page & Implementing Form Validation

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



# Milestone 6 - Secure User Signup & Password Encryption

 Milestone 6: Backend Signup Endpoint & Secure Password Storage

 Overview
In Milestone 5, we built the Signup Page in the frontend.
Now, in Milestone 6, we are implementing a backend endpoint for signup that:
 Accepts user registration requests
 Encrypts passwords before storing them
 Saves user data securely in the MongoDB database

This ensures that user credentials are protected from attacks like data breaches & password leaks.

 Key Achievements
 1. Created a Secure Signup API Endpoint (/api/auth/signup)
Users can now register securely with:
Name
Email
Encrypted Password
User Role (Default: User)
API validates user input before saving.
 2. Used bcryptjs for Password Encryption
Before storing passwords, we encrypt them using bcrypt hashing.
This prevents plain-text passwords from being saved in the database.
 3. Stored User Data in MongoDB (Mongoose Schema)
Created a User Model to store user details in MongoDB Atlas.
 4. Tested Signup API Using Postman
Successfully registered users via Postman API testing.
 Technologies Used
Node.js & Express.js – Backend Framework
MongoDB Atlas & Mongoose – Database Management
bcryptjs – Password Encryption
dotenv – Securely manage environment variables
Postman – API Testing


# Milestone 7: Backend Endpoint for User Login
Welcome to Milestone 7! In this milestone, you’ll create a backend endpoint for user login, focusing on validating user credentials and verifying encrypted passwords stored in the database. Let’s break it down step by step.

Learning Goals 
By the end of this milestone, you will:

Understand how to validate user credentials during login.

Learn how to compare the encrypted password with the user’s input.

Why Encrypt Passwords?
Protect User Data: Keeps passwords safe even if the database is compromised.

Privacy: Ensures passwords aren’t stored in plain text.

Compliance: Meets security standards like GDPR and PCI-DSS.

Prevents Password Theft: Hashed passwords are difficult to decipher, increasing security.

How Login Authentication Works 
User Enters Credentials:

The user provides their email/username and password on the login page.

Fetch User Data from Database:

The backend retrieves the user record based on the provided email/username.

If the user is not found, return an error: "User does not exist."

Compare Encrypted Passwords:

Process the user's input password using the same hashing algorithm (e.g., bcrypt).

Compare the resulting hash to the stored hashed password.

If they match, the user is authenticated; if not, send an error.

# Milestone 8: Creating and Displaying Card Components
Welcome to Milestone 8!  In this milestone, you’ll learn how to create a card component and display multiple cards on the products page. This will help you showcase products effectively and improve the user experience of your e-commerce app.

Learning Goals 
By the end of this milestone, you will:

Learn how to create a card component.

Learn how to display those cards on the products page.

Why Create Card Components?
Showcase Products Effectively: Presents product details in a clear and visually appealing way.

Reusable Design: Can be used across multiple pages or sections of the app.

Improved User Experience: Makes it easy for users to browse and interact with products.

Organized Layout: Keeps the homepage clean and structured.

How to Display a Single Card for Multiple Products?
Create a Dynamic Component: Design a single card component that accepts product details as props.

Use Mapping: Use array mapping to iterate over the product list and render a card for each product.

Pass Data Dynamically: Pass unique product information (e.g., name, price, image) to each card.

Maintain Consistency: Ensure the layout remains uniform for all products.


## milestone-9

###  Overview
In this milestone, we created a *product input form* that allows users to enter product details and upload multiple images. The form ensures *data validation* and previews images before submission.

###  Features
 User-friendly *product input form*  
 *Multiple image uploads* with previews 
  *Real-time validation* for form fields  

###  Screenshots
![Product Form Screenshot](URL_TO_YOUR_IMAGE)

###  Installation & Usage
1. Clone the repository:  
   ```bash
   git clone YOUR_REPOSITORY_LINK
   cd ecommerce-follow-along
