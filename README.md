### Hexlet tests and linter status:

[![Actions Status](https://github.com/S0ldierBoy/frontend-project-12/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/S0ldierBoy/frontend-project-12/actions)
![Build](https://github.com/S0ldierBoy/frontend-project-12/actions/workflows/ci.yml/badge.svg)
[![Maintainability](https://qlty.sh/badges/ee7bdf73-558d-4199-a83f-44218cb83477/maintainability.svg)](https://qlty.sh/gh/S0ldierBoy/projects/frontend-project-12)

### Deploy link

https://frontend-project-12-epbz.onrender.com/login

# Chat Application

A real-time chat application with a backend server and a user-friendly frontend interface, built using Node.js and npm.

---

## Project Overview

This project consists of two main parts:

- **Backend**: Manages server-side logic and real-time messaging.
- **Frontend**: Offers an intuitive interface for users to send and receive messages.

Developed with Node.js, the project uses npm for dependency management. It includes commands for installing
dependencies, building the frontend, and running the backend and frontend in development or production modes.

---

## System Requirements

### To run this project you will need:

- **Operating System: Windows, macOS, or Linux**

- **Node.js: Version 14 or higher (LTS recommended)**

- **npm: Version 6 or higher (or use yarn, if preferred)**

- **Internet Connection: For installing dependencies and deploying (optional for local development if dependencies are
  already installed)**

---

## Commands

### Install Dependencies

```bash
install:
	npm install
	npm install --prefix frontend
```

### Build Frontend

```bash
build:
	rm -rf frontend/dist
	npm run build --prefix frontend
```

### Run Backend Server

```bash
start:
	npx start-server -s ./frontend/dist
```

### Run Frontend (Development Mode)

```bash
start-frontend:
	npm run dev --prefix frontend
```

### Run Both (Backend and Frontend)

```bash
start-all:
	make start & make start-frontend
```

