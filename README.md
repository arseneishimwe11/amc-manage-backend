# AMC Manage Backend
A modern Express.js backend system built with TypeScript, MySQL, and Sequelize ORM.

## Tech Stack
- **Express.js**
- **TypeScript**
- **MySQL**
- **Sequelize ORM**
- **JWT Authentication**

## Setup Guide

### 1. Install Dependencies
```bash
cd backend
yarn install
```
### 2. Create and Setup the Database
Run the following SQL command to create the database:

```sql
CREATE DATABASE amc_db;
```
### 3. Create a .env File
Add the following environment variables to a .env file:

```makefile
PORT=3001
DB_NAME=amc_db
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
```

### 4. Generate a JWT Secret
Generate a secure JWT secret by running this command:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 5. Run the Application
Start the application in development mode:

```bash
yarn dev
```

### Notes
- Ensure that the .env file is correctly configured before running the application.
- Use the generated JWT secret for secure token signing.
