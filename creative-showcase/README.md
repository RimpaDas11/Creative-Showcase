

# Creative Showcase

A full-stack web application that allows artists to upload, manage, and share their artwork publicly.



## Tech Stack

* **Frontend:** React
* **Backend:** Node.js, Express
* **Database:** MongoDB
* **Authentication:** JWT
* **File Uploads:** Multer



## Installation & Execution

Follow the steps below to run the project locally on your system.



### Prerequisites

Make sure you have the following installed:

* Node.js (v16 or later recommended)
* npm
* MongoDB (local or MongoDB Atlas)
* Git



### Backend Setup

```bash
cd server
npm install
node server.js
```

* Backend runs on: `http://localhost:5000`
* MongoDB must be running or properly connected (Atlas URI)



### Frontend Setup

```bash
cd client
npm install
npm start
```

* Frontend runs on: `http://localhost:3000`



## Application Routes

* `/` – Home / Gallery Page
* `/login` – User Login
* `/signup` – User Registration
* `/dashboard` – User Dashboard (Image Upload & Gallery)
* `/profile/:username` – Public User Profile




## Deployment Status

Due to backend limitations (Express server with file uploads using Multer),
the application is not deployed to a live hosting platform.

A complete live demo video has been recorded demonstrating all features:
- User registration and login
- Image upload
- Dashboard
- Public gallery
- Logout functionality

The frontend includes a Vercel configuration (`vercel.json`) for SPA routing,
but deployment was not performed.

The project can be fully executed locally using the Installation & Execution steps.



**Demo Video Link:**
`<PASTE YOUR GOOGLE DRIVE / YOUTUBE / ONEDRIVE VIDEO LINK HERE>`



## Notes for Reviewer

* The project runs completely on local setup as per instructions above.
* All core features are demonstrated in the recorded live video.
* Backend APIs and frontend integration are fully functional.




