# 🎨 Creative Showcase

<div align="center">

### Full-Stack Platform for Artists to Share and Showcase Their Creativity

A modern web application that enables artists to upload, manage, and publicly display their artwork through a secure and user-friendly platform.

---

**React • Node.js • Express • MongoDB • JWT • Multer**

</div>

---

# 🌟 Overview

Creative Showcase is a full-stack web application designed for artists, designers, photographers, and creative professionals to showcase their work online.

The platform allows users to create accounts, upload artwork, manage personal galleries, and share their creative portfolios with the public. It provides secure authentication, image management, and public artist profiles while demonstrating modern full-stack web development practices.

This project showcases the integration of frontend development, backend APIs, authentication systems, database management, and file handling.

---

# 🎯 Problem Statement

Artists often need a centralized platform to present their creative work and build an online portfolio.

The objective of this project is to develop a platform that allows users to:

* Register and manage accounts
* Upload artwork securely
* Organize personal galleries
* Display public portfolios
* Share creative content with others

---

# 🚀 Key Features

### 🔐 User Authentication

Secure user registration and login using JWT authentication.

### 👤 User Profiles

Personalized profiles for showcasing artwork.

### 🖼️ Artwork Upload

Upload and manage images through a simple interface.

### 📂 Personal Dashboard

Manage uploaded artwork and account information.

### 🌍 Public Gallery

Browse publicly shared artwork.

### 🎨 Artist Showcase

Display creative work in a portfolio-style format.

### 🔒 Secure Access Control

Protected routes ensure user data privacy.

### 📁 File Upload Management

Efficient image handling using Multer.

---

# 🏗️ System Architecture

```text id="x4s7a9"
React Frontend
       │
       ▼
REST API Requests
       │
       ▼
Express Backend
       │
       ▼
Authentication Layer
(JWT)
       │
       ▼
MongoDB Database
       │
       ▼
Image Storage
(Multer)
```

---

# 📂 Project Structure

```text id="n7w5q2"
Creative-Showcase/
│
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── server/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── uploads/
│   ├── server.js
│   └── ...
│
├── README.md
└── vercel.json
```

---

# 🛠️ Technology Stack

| Layer             | Technology |
| ----------------- | ---------- |
| Frontend          | React      |
| Backend           | Node.js    |
| Server Framework  | Express.js |
| Database          | MongoDB    |
| Authentication    | JWT        |
| File Uploads      | Multer     |
| API Communication | REST APIs  |

---

# 🧠 How It Works

### Step 1 — User Registration

Users create an account using the signup page.

### Step 2 — Authentication

JWT tokens secure user sessions and protected routes.

### Step 3 — Artwork Upload

Authenticated users upload images through the dashboard.

### Step 4 — Database Storage

Artwork metadata and user information are stored in MongoDB.

### Step 5 — Public Display

Uploaded artwork becomes visible through public profiles and galleries.

---

# ⚙️ Installation

## Prerequisites

Ensure the following are installed:

* Node.js (v16+)
* npm
* MongoDB (Local or Atlas)
* Git

---

## Backend Setup

```bash id="b4e9j1"
cd server

npm install

node server.js
```

Backend runs on:

```text id="p6v2c8"
http://localhost:5000
```

---

## Frontend Setup

```bash id="m3f8r7"
cd client

npm install

npm start
```

Frontend runs on:

```text id="k8x5d4"
http://localhost:3000
```

---

# 🌐 Application Routes

| Route                | Description           |
| -------------------- | --------------------- |
| `/`                  | Home / Gallery Page   |
| `/login`             | User Login            |
| `/signup`            | User Registration     |
| `/dashboard`         | User Dashboard        |
| `/profile/:username` | Public Artist Profile |

---

# 📹 Demo Video

A complete demonstration of the application is available below:

🔗 https://drive.google.com/file/d/1yJKyBpC7csoEOi4KhQmaCkxwb54jGwMy/view?usp=sharing

The demo includes:

* User Registration
* User Login
* Image Upload
* Dashboard Management
* Public Gallery
* Profile Pages
* Logout Functionality

---

# 🚀 Deployment Status

The project is currently designed for local execution.

While the repository includes a Vercel configuration for frontend routing, full deployment was not completed due to backend limitations involving file uploads through Multer and server-side requirements.

All application features are fully functional when executed locally.

---

# 💡 Applications

### 🎨 Artist Portfolios

Create personal online galleries.

### 📸 Photography Showcases

Display photography collections.

### 🖌️ Creative Communities

Share and discover creative work.

### 🏫 Educational Projects

Learn full-stack application development.

### 🌍 Digital Portfolio Platforms

Build portfolio-based web applications.

---

# 📊 Skills Demonstrated

This project showcases:

* Full Stack Development
* React Development
* Node.js
* Express.js
* MongoDB
* JWT Authentication
* REST API Development
* File Upload Handling
* Database Integration
* User Authentication Systems

---

# 🔮 Future Enhancements

### ❤️ Like & Comment System

Enable community engagement.

### 🔍 Artwork Search

Search artists and artwork.

### 📂 Categories & Tags

Organize artwork collections.

### 👥 Follow Artists

Build artist communities.

### ☁️ Cloud Storage Integration

Use Cloudinary or AWS S3.

### 🌐 Full Production Deployment

Deploy complete frontend and backend infrastructure.

---

# 🎓 Learning Outcomes

Through this project, learners can understand:

* Full Stack Application Development
* Authentication & Authorization
* React Frontend Development
* REST API Design
* MongoDB Integration
* File Upload Management
* Backend Architecture

---

# ⚠️ Disclaimer

This project is developed for educational and portfolio purposes.

The current version is optimized for local deployment and demonstration of full-stack development concepts.

---

# 👩‍💻 Developer

## Rimpa Das

B.Tech Computer Science & Engineering
Brainware University

Passionate about Full Stack Development, Web Technologies, and creating platforms that empower creativity and digital expression.

### Technical Skills Demonstrated

* React
* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Multer
* REST APIs
* Full Stack Development

---

*"Building digital platforms that connect creativity, technology, and user experience."*

---

# ⭐ Support

If you found this project useful:

⭐ Star the repository

🍴 Fork the repository

🚀 Share it with others

---

<div align="center">

# 🎨 Creative Showcase

### Empowering Artists Through Technology

**React • Node.js • MongoDB • Express • JWT**

Built with ❤️ by Rimpa Das

</div>
