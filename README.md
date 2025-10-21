# Social-Post-App (Working)

A modern and secure social media posting platform built by me using **Node.js, Express, MongoDB, Tailwind CSS, EJS, and JWT**.

This app allows users to create, manage, and interact with posts in a clean and responsive environment. It features full user authentication and a personalized dashboard for each user. 🔐🚀

---

## ✨ Features

### 🔐 Authentication
- Secure **Signup/Login** using **JWT**.
- Passwords are hashed using bcrypt (or **Argon2**) .
- Only authenticated users can access dashboard and post actions.

### 📝 Post Management
- **CRUD** operations: Create, Read, Update, and Delete posts.
- Each user can only manage **their own posts**.
- **Like/Unlike** functionality with real-time like count.
- Posts display profile pictures and timestamps.

### 👤 User Profile
- Users can **view and update** their profile details.
- Personalized dashboard and greetings.

### 🎨 Responsive UI
- Built with **Tailwind CSS** for modern, mobile-first design.
- Clean, user-friendly interface.
- Custom navigation bar for seamless routing.

---

## 🛠️ Tech Stack

### Frontend
- **EJS** – Templating engine for rendering server-side views.
- **Tailwind CSS** – Utility-first CSS framework for styling.

### Backend
- **Node.js + Express.js** – Server-side framework.
- **MongoDB + Mongoose** – NoSQL database and ORM.
- **JWT** – Token-based authentication.
- **Multer** – For image uploads.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/nitishojha00/Social-Post-App.git
