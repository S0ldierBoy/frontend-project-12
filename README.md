### Hexlet tests and linter status:

[![Actions Status](https://github.com/S0ldierBoy/frontend-project-12/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/S0ldierBoy/frontend-project-12/actions)
![Build](https://github.com/S0ldierBoy/frontend-project-12/actions/workflows/ci.yml/badge.svg)
[![Maintainability](https://qlty.sh/badges/ee7bdf73-558d-4199-a83f-44218cb83477/maintainability.svg)](https://qlty.sh/gh/S0ldierBoy/projects/frontend-project-12)

# 💬 Chat Application

**Chat Application** is a real-time messaging web app that lets users chat in public channels with instant message
delivery. With features like multilingual support, message censorship, and channel management, it offers a modern chat
experience — all in your browser!

---

## 🚀 Features

- 🔐 **User Authentication**  
  Sign up and log in using JWT-based authentication.

- 🗨️ **Public Channels**  
  Create, rename, and delete channels. Messages are grouped for easy communication.

- ⚡ **Real-Time Messaging**  
  Instant delivery powered by WebSocket via **Socket.IO**.

- ✏️ **Modal Windows**  
  Smooth in-app renaming and deletion of channels — no page reloads.

- 🌍 **Localization**  
  Supports **English** and **Russian** with instant language switching using **i18next**.

- ✅ **Form Validation**  
  Secure and user-friendly forms using **Formik** + **Yup**.

- 🚫 **Message Censorship**  
  Inappropriate language is filtered via the **leo-profanity** library.

---

## 🔗 Live Demo

👉 [Live Chat Demo on Render](https://frontend-project-12.onrender.com)
> (Note: May take a few moments to spin up on free hosting plans.)

---

## ⚙️ Installation & Setup

### 🧰 System Requirements

To run this project, you will need:

- 💻 **OS:** Windows, macOS, or Linux
- 🟢 **Node.js:** Version 14 or higher (LTS recommended)
- 📦 **npm:** Version 6 or higher *(or yarn)*
- 🌐 **Internet:** Required for initial setup and deploying

---

### 📦 Installation

```bash
git clone https://github.com/S0ldierBoy/frontend-project-12.git
cd frontend-project-12
make install
```

---

## 📊 Run Application

### 🔄 Run both backend and frontend:

```bash
make start-all
```

### 🧩 Run separately:

```bash
make start          # backend
make start-frontend # frontend (dev mode)
```

---

## 🧹 Linting

### ✅ Check for issues:

```bash
make lint 
```

### 🛠️ Auto-fix issues:

```bash
make fix
```

---

## 🛠️ Technologies Used

- ⚛️ **React** — UI rendering
- 📦 **Redux Toolkit** — State management
- 🔁 **React Router** — SPA routing
- 🧾 **Formik + Yup** — Form handling and validation
- 🎨 **Bootstrap / React Bootstrap** — Styling and components
- 🌐 **i18next** — Internationalization
- 🔌 **Socket.IO** — WebSocket communication
- 🌍 **Axios** — HTTP requests
- 🚫 **leo-profanity** — Message filtering
- 🐞 **Rollbar** — Error tracking and reporting
- 📏 **ESLint + Prettier** — Code style and formatting
- 🟨 **JavaScript (ES6+)**

---

## 🎉 Get Involved

The app is ready for demo and testing.  
Feel free to **clone**, **contribute**, or use it as a learning project! 🚀

---

👨‍💻 Made with ❤️ by [@S0ldierBoy](https://github.com/S0ldierBoy)

```
