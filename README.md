# Task Management Application

## [🚀 Live Demo](https://task-manager-bbf8b.web.app/)

## 📂 Repositories
- **Frontend:** [GitHub Repo](https://github.com/Rasadul-Islam/task-manager-client)
- **Backend:** [GitHub Repo](https://github.com/Rasadul-Islam/task-manager-server)

## 📝 Description
This is a Task Management Application that allows users to add, edit, delete, and reorder tasks using a drag-and-drop interface. The app supports real-time updates and ensures data persistence using MongoDB. Users must authenticate with Firebase before accessing the application.

## 🛠 Technologies Used
### Frontend:
- **React.js (Vite.js)** – Fast & modern UI framework
- **Firebase Authentication** – Google Sign-In for authentication
- **React DnD / Drag-and-Drop Library** – For seamless task reordering
- **Tailwind CSS** – For a clean and responsive UI

### Backend:
- **Express.js** – Lightweight Node.js framework
- **MongoDB + Mongoose** – Database and ORM for task storage
- **Cors & dotenv** – Security and environment management

## 🌟 Features
- **User Authentication** (Google Sign-in via Firebase)
- **Task Management:** Add, edit, delete, and reorder tasks
- **Drag-and-Drop Functionality:** Move tasks between categories
- **Real-time Sync:** Ensures tasks are always up-to-date
- **Persistent Storage:** All tasks are saved in MongoDB
- **Responsive UI:** Works on both desktop, teblets and mobile devices

## 🏗️ Installation Steps
### Prerequisites:
- Node.js & npm installed
- MongoDB set up locally or using MongoDB Atlas
- Firebase project set up with Google Authentication enabled

### Clone the Repository
```bash
git clone https://github.com/Rasadul-Islam/task-manager-client.git
cd task-manager
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
npm install
npm start
```

## 📌 API Endpoints
### Authentication:
- `POST /auth/google` – Authenticate user using Firebase

### Task Management:
- `POST /tasks` – Add a new task
- `GET /tasks` – Retrieve all tasks for the logged-in user
- `PUT /tasks/:id` – Update task details
- `DELETE /tasks/:id` – Delete a task

## 📜 License
This project is licensed under the MIT License.

## 🤝 Contributing
Feel free to fork the repository and submit pull requests with improvements.

---
💡 Developed with ❤️ by [Rasadul Islam]
