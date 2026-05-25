# 🎉 Happy Coding!
# 🛠️ Blog App - Backend

## 📖 Overview

This repository contains the backend for the Blog App.

It is built using:

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cloudinary Image Uploads

The backend provides APIs for:

- Authentication
- User Management
- Author Features
- Admin Dashboard
- Article Management
- Comments System

---

# 🚀 Features

- RESTful API Architecture
- JWT Authentication
- Role-Based Authorization
- User Registration & Login
- Article CRUD Operations
- Comment System
- Cloudinary Image Upload
- Password Hashing using bcryptjs
- Middleware Authentication
- Admin Controls
- MongoDB Database Integration

---

# 📁 Project Structure

```bash
BLOG-APP-BACKEND/
├── APIs/
│   ├── AdminAPI.js
│   ├── AuthorAPI.js
│   ├── UserAPI.js
│   └── CommonAPI.js
│
├── config/
│   ├── cloudinary.js
│   ├── multer.js
│   └── cloudinaryUpload.js
│
├── middlewares/
│   ├── checkAuthor.js
│   └── verifyToken.js
│
├── models/
│   ├── ArticleModel.js
│   └── UserModel.js
│
├── services/
│   └── authService.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

# 📋 Prerequisites

Before running the project install:

- Node.js (v18 or higher)
- MongoDB
- npm

---

# ⚙️ Backend Setup

## 1️⃣ Initialize Git Repository

```bash
git init
```

---

## 2️⃣ Create `.gitignore`

Add:

```gitignore
node_modules
.env
dist
```

---

# 📦 Install Required Packages

## Main Dependencies

```bash
npm install express mongoose cors dotenv bcryptjs jsonwebtoken cloudinary multer multer-storage-cloudinary cookie-parser
```

---

## Development Dependencies

```bash
npm install -D nodemon
```

---

# 📦 Package Purpose

| Package | Purpose |
|----------|----------|
| express | Backend framework |
| mongoose | MongoDB ORM |
| cors | Cross-Origin Requests |
| dotenv | Environment Variables |
| bcryptjs | Password Hashing |
| jsonwebtoken | JWT Authentication |
| cloudinary | Cloud Image Storage |
| multer | File Upload Middleware |
| multer-storage-cloudinary | Cloudinary Storage Engine |
| cookie-parser | Cookie Parsing |
| nodemon | Auto Restart Server |

---

# 🔐 Environment Variables

## Create `.env`

```bash
cp .env.example .env
```

### Windows PowerShell

```powershell
copy .env.example .env
```

---

## Update `.env`

```env
DB_URL=mongodb://localhost:27017/blog-backend

PORT=4000

JWT_SECRET=your-super-secret-jwt-key

CLOUD_NAME=your-cloudinary-cloud-name
API_KEY=your-cloudinary-api-key
API_SECRET=your-cloudinary-api-secret
```

---

# ▶️ Run the Server

## Start Normally

```bash
node server.js
```

---

## Start with Nodemon

```bash
npx nodemon server.js
```

---

# 🌐 Server URL

```bash
http://localhost:4000
```

---

# 🔗 API Endpoints

# Authentication APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/common-api/login` | Login |
| GET | `/common-api/logout` | Logout |
| GET | `/common-api/check-auth` | Verify Token |
| PUT | `/common-api/change-password` | Change Password |

---

# User APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/user-api/users` | Register User |
| GET | `/user-api/articles` | Get Active Articles |
| GET | `/user-api/article/:id` | Get Single Article |
| PUT | `/user-api/articles` | Add Comment |

---

# Author APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/author-api/users` | Register Author |
| POST | `/author-api/articles` | Create Article |
| GET | `/author-api/articles/:authorId` | Get Author Articles |
| PUT | `/author-api/articles` | Update Article |

---

# Admin APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin-api/dashboard/stats` | Dashboard Statistics |
| GET | `/admin-api/users` | Get Users |
| GET | `/admin-api/articles` | Get Articles |
| PUT | `/admin-api/users/block/:userId` | Block User |
| PUT | `/admin-api/users/unblock/:userId` | Unblock User |
| PUT | `/admin-api/articles/activate/:articleId` | Activate Article |
| PUT | `/admin-api/articles/deactivate/:articleId` | Deactivate Article |

---

# 🗄️ Database Models

# User Model

```javascript
{
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ['USER', 'AUTHOR', 'ADMIN']
  },
  profileImageUrl: String,
  isActive: Boolean
}
```

---

# Article Model

```javascript
{
  author: {
    type: ObjectId,
    ref: 'user'
  },
  title: String,
  category: String,
  content: String,
  comments: [
    {
      user: {
        type: ObjectId,
        ref: 'user'
      },
      comment: String
    }
  ],
  isArticleActive: Boolean
}
```

---

# 🔐 Registration & Login Flow

- USER and AUTHOR use shared authentication logic
- Separate APIs are used for role selection
- Role assignment is controlled by backend routes
- JWT token is generated during login
- Protected routes use middleware verification

---

# 🧪 Testing APIs

Use:

- Postman
- Thunder Client
- curl

Example:

```bash
curl http://localhost:4000/user-api/articles
```

---

# Important Notes

- Uses ES6 Modules
- Enable `"type": "module"` in `package.json`
- Configure CORS properly
- Hash passwords using bcryptjs
- Store uploaded images in Cloudinary

---

#  Deploy Backend on Render

## 1️ Push Backend to GitHub

```bash
git add .
git commit -m "backend deployment"
git branch -M main
git remote add origin https://github.com/BAIKANI-MANASA/Blog-App.git
git push -u origin main
```

---

# 2️ Create Render Account

Go to:

```bash
https://render.com
```

Login using GitHub.

---

# 3️ Create New Web Service

- Click **New +**
- Select **Web Service**
- Connect GitHub Repository
- Select Backend Repository

---

# 4️ Render Configuration

## Build Command

```bash
npm install
```

## Start Command

```bash
node server.js
```

---

# 5️ Add Environment Variables in Render

Go to:

```bash
Dashboard → Web Service → Environment
```

Add:

```env
DB_URL=your-mongodb-url

PORT=4000

JWT_SECRET=your-secret-key

CLOUD_NAME=your-cloudinary-name
API_KEY=your-cloudinary-api-key
API_SECRET=your-cloudinary-secret
```

---

# 6️ Deploy Backend

Click:

```bash
Create Web Service
```

Render automatically deploys the backend.

---

#  Backend Production URL

Example:

```bash
https://blog-app-pvm9.onrender.com
```

---

# Useful Commands

## Install Dependencies

```bash
npm install
```

## Start Server

```bash
node server.js
```

## Start with Nodemon

```bash
npx nodemon server.js
```

## Push Changes

```bash
git add .
git commit -m "updated backend"
git push
```

---

#  License

This project is licensed under the ISC License.

---

#  Acknowledgments

- Express.js
- MongoDB
- Cloudinary
- JWT
- Render

---

