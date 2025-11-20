# GroCart 🛒

A full-stack eCommerce grocery platform built with **React + Vite (Frontend)** and **Node.js + Express (Backend)**. It includes user authentication, product listing, shopping cart, secure payments using Stripe, and Cloudinary-based image storage.

## 🌍 Live Deployment

[https://gro-cart-jkre.vercel.app/](https://gro-cart-jkre.vercel.app/)

---

## ✨ Features

### Frontend

* Built with **React + Vite**
* State management with **Redux Toolkit**
* Form handling with **React Hook Form**
* Infinite scrolling for products
* Toast notifications
* Routing with `react-router-dom`
* Beautiful UI with TailwindCSS

### Backend

* Node.js + Express
* MongoDB (Mongoose ORM)
* JWT Authentication
* Image uploads using Cloudinary
* Secure Stripe Payments
* Request logging using Morgan
* Helmet for security
* Nodemailer for sending emails

---

## 🏗 Project Structure

```
grocart/
  ├── client/       # React frontend
  └── server/       # Node.js backend
```

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Shaik-Sameer77/grocart.git
cd grocart
```

---

# ⚙️ Backend Setup (server)

### Install Dependencies

```bash
cd server
npm install
```

### Required `.env` File

Create a `.env` file inside `/server` and add:

```
PORT=8080
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
MONGODB_URI=your_mongodb_url
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SECRET_KEY_ACCESS_TOKEN=your_super_secret_access_token_key_here
SECRET_KEY_REFRESH_TOKEN=your_super_secret_refresh_token_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
STRIPE_ENPOINT_WEBHOOK_SECRET_KEY=your_webhook_secret
```

### Run the Backend

```bash
npm run dev
```

Backend runs at:
👉 [http://localhost:8080](http://localhost:8080)

---

# 🎨 Frontend Setup (client)

### Install Dependencies

```bash
cd ../client
npm install
```

### Create `.env` in `/client`

```
VITE_API_URL=http://localhost:8080
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

### Run Frontend

```bash
npm run dev
```

Frontend runs at:
👉 [http://localhost:5173](http://localhost:5173)

---

# 🧪 Scripts

## Backend

| Command       | Description                |
| ------------- | -------------------------- |
| `npm start`   | Starts production server   |
| `npm run dev` | Starts server with nodemon |

## Frontend

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Development mode         |
| `npm run build`   | Builds production bundle |
| `npm run preview` | Preview production build |

---

# 📦 Tech Stack

## Frontend

* React
* Vite
* Redux Toolkit
* React Hook Form
* Axios
* TailwindCSS

## Backend

* Node.js
* Express
* Mongoose
* JWT
* Multer
* Cloudinary
* Nodemailer
* Stripe

---

# ☁️ Deployment on Vercel (Recommended)

## Deploy Backend on Vercel

1. Create a new Vercel project
2. Import `/server`
3. Add environment variables from `.env`
4. **Build command:**

```
npm install
```

5. **Start command:**

```
node index.js
```

### ⚠️ Important

Vercel serverless functions may not run background tasks continuously. Webhooks (like Stripe) may require a dedicated host (Render, Railway, etc.).

---

## Deploy Frontend on Vercel

1. Import `/client`
2. Add `VITE_API_URL` pointing to backend deployment URL
3. **Build command:**

```
npm run build
```

---

# 🔑 Environment Variables Summary

## Frontend

```
VITE_API_URL
VITE_STRIPE_PUBLIC_KEY
```

## Backend

```
PORT
FRONTEND_URL
EMAIL_USER
EMAIL_PASSWORD
MONGODB_URI
CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
SECRET_KEY_ACCESS_TOKEN
SECRET_KEY_REFRESH_TOKEN
STRIPE_SECRET_KEY
STRIPE_PUBLISHABLE_KEY
STRIPE_ENPOINT_WEBHOOK_SECRET_KEY
```

---

# 📜 License

This project is licensed under the **ISC License**.

---

# 👨‍💻 Author

Built with ❤️ by **Shaik Sameer**
