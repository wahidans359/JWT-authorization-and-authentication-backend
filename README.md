# JWT-authorization-and-authentication-backend
**Description:** A Node.js application using Express.js framework for user authentication and authorization.

**Table of Contents:**

1. [Project Structure](#project-structure)
2. [Dependencies](#dependencies)
3. [Functionality](#functionality)
4. [API Endpoints](#api-endpoints)
5. [Database Connection](#database-connection)
6. [Authentication and Authorization](#authentication-and-authorization)

**Project Structure:**

The project is organized into the following directories and files:

* `config`: contains database connection settings (`database.js`)
* `controllers`: contains authentication and user management logic (`Auth.js`)
* `middlewares`: contains authentication and authorization middleware functions (`auth.js`)
* `models`: contains user schema definition (`User.js`)
* `routes`: contains API endpoint definitions (`user.js`)
* `index.js`: the main application entry point

**Dependencies:**

The project uses the following dependencies:

* `express`: Node.js web framework
* `mongoose`: MongoDB ORM
* `bcrypt`: password hashing library
* `jsonwebtoken`: JSON Web Token library
* `dotenv`: environment variable management library

**Functionality:**

The application provides the following functionality:

* User registration and login
* Authentication and authorization using JSON Web Tokens (JWT)
* Protected routes for students and administrators

**API Endpoints:**

The application exposes the following API endpoints:

* `POST /login`: authenticate user and return JWT token
* `POST /signup`: create new user account
* `GET /test`: protected route for testing authentication
* `GET /student`: protected route for students
* `GET /admin`: protected route for administrators

**Database Connection:**

The application connects to a MongoDB database using the `mongoose` library. The database connection settings are stored in the `config/database.js` file.

**Authentication and Authorization:**

The application uses JSON Web Tokens (JWT) for authentication and authorization. The `auth` middleware function verifies the JWT token and extracts the user's role and ID. The `isAdmin` and `isStudent` middleware functions check the user's role and restrict access to protected routes accordingly.



**API Endpoints**
===============

### Signup

#### Student Signup

* **Method:** `POST`
* **Endpoint:** `http://localhost:3000/api/v1/signup`
* **Request Body:**
```json
{
  "name": "test1",
  "email": "test1@gmail.com",
  "password": "test123",
  "role": "Student"
}
```
#### Admin Signup

* **Method:** `POST`
* **Endpoint:** `http://localhost:3000/api/v1/signup`
* **Request Body:**
```json
{
  "name": "test1",
  "email": "test1@gmail.com",
  "password": "test123",
  "role": "Admin"
}
```
### Login

* **Method:** `POST`
* **Endpoint:** `http://localhost:3000/api/v1/login`
* **Request Body:**
```json
{
  "email": "test2@gmail.com",
  "password": "test123"
}
```
Note: Replace the example values with your own credentials.