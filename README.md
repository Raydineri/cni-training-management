# CNI Training Management System

A comprehensive training management system developed for CNI (Centre National de l'Informatique) using the MEAN stack (MongoDB, Express.js, Angular, Node.js). This system facilitates the management of training dossiers between DACA (Direction des Applications et de la Cybersécurité Administrative) and UFR (Unité de Formation et de Recherche) departments.

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Usage](#-usage)
- [Configuration](#-configuration)
- [Contributing](#-contributing)
- [License](#-license)
- [Authors](#-authors)
- [Acknowledgments](#-acknowledgments)

## ✨ Features

### Authentication & Authorization
- **Multi-role authentication** (DACA User, UFR User)
- **JWT-based authentication** with role-based access control
- **Secure password hashing** using bcrypt
- **Route guards** for protected pages

### Training Dossier Management
- **Create, Read, Update, Delete** training dossiers
- **Track training status** and progress
- **File upload functionality** for user profiles
- **Inbox/Outbox system** for dossier management
- **Filter and search** capabilities

### User Management
- **User profile management** with image upload
- **Role-based dashboard views**
- **Account information display**

### Responsive Design
- **Bootstrap 5** integration for responsive UI
- **FontAwesome** icons for enhanced UX
- **Mobile-friendly** interface

## 🛠 Tech Stack

### Frontend
- **Angular 16** - Frontend framework
- **TypeScript** - Programming language
- **Bootstrap 5** - CSS framework
- **RxJS** - Reactive programming library
- **Angular Router** - Navigation and routing

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Multer** - File upload middleware
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (v4.4 or higher)
- **Angular CLI** (v16 or higher)

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/cni-training-management.git
cd cni-training-management
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create a .env file and configure your MongoDB connection
echo "MONGODB_URI=mongodb://127.0.0.1:27017/CNI" > .env
echo "JWT_SECRET=1234567" >> .env

# Start MongoDB service
mongod

# Start the backend server
node server.js
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install

# Start the Angular development server
ng serve
```

### 4. Access the application
- **Frontend**: http://localhost:4200
- **Backend API**: http://localhost:3000

## 📁 Project Structure

```
cni-training-management/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── daca/
│   │   │   │   ├── ufr/
│   │   │   │   ├── login/
│   │   │   │   ├── user/
│   │   │   │   ├── dossier/
│   │   │   │   ├── form/
│   │   │   │   └── layout/
│   │   │   ├── services/
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── data.service.ts
│   │   │   │   └── auth.guard.ts
│   │   │   ├── app-routing.module.ts
│   │   │   ├── app.module.ts
│   │   │   └── app.component.ts
│   │   ├── assets/
│   │   └── index.html
│   ├── angular.json
│   └── package.json
├── backend/
│   ├── models/
│   │   ├── dacaUser.js
│   │   ├── ufrUser.js
│   │   └── dossier.js
│   ├── routes/
│   │   ├── dacaUser.js
│   │   ├── ufrUser.js
│   │   └── dossier.js
│   ├── config/
│   │   └── connect.js
│   ├── uploads/
│   ├── server.js
│   └── package.json
└── README.md
```

## 🔗 API Endpoints

### Authentication
```
POST /dacauser/login          # User login
POST /dacauser/createaccount  # Create DACA user account
POST /ufruser/createaccount   # Create UFR user account
```

### User Management
```
GET  /dacauser/getall         # Get all DACA users
GET  /dacauser/getbyid/:id    # Get user by ID
PUT  /dacauser/update/:id     # Update user
DELETE /dacauser/supprimer/:id # Delete user
```

### Dossier Management
```
GET  /dossier/getall          # Get all dossiers
GET  /dossier/getbyid/:id     # Get dossier by ID
POST /dossier/ajoutDossier    # Create new dossier
PUT  /dossier/update/:id      # Update dossier
DELETE /dossier/supprimer/:id # Delete dossier
```

### File Management
```
GET  /getimage/:filename      # Get uploaded images
```

## 💻 Usage

### For DACA Users:
1. **Login** with DACA credentials
2. **View training dossiers** on the main dashboard
3. **Create new dossiers** using the "Ajouter dossier" button
4. **Edit existing dossiers** by clicking the edit icon
5. **Track dossier status** in inbox/outbox sections
6. **Manage profile** through the user account section

### For UFR Users:
1. **Login** with UFR credentials
2. **View assigned training dossiers**
3. **Update dossier status** and training information
4. **Submit training completion reports**
5. **Manage received and sent dossiers**

### System Administration:
1. **User management** through the backend API
2. **Database monitoring** via MongoDB
3. **File management** in the uploads directory
4. **System logs** monitoring

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the backend directory:
```env
MONGODB_URI=mongodb://127.0.0.1:27017/CNI
JWT_SECRET=your-secret-key-here
PORT=3000
```

### Angular Environment
Update `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000'
};
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## 👥 Authors

- **Rayen Ben othman** - [Raydineri](https://github.com/Raydineri)

## 🙏 Acknowledgments

- CNI (Centre National de l'Informatique) for the project requirements
- Angular and Node.js communities for excellent documentation
- Bootstrap team for the responsive framework
- All contributors who participated in this project


---

**Note**: This system was developed as part of an internship project for **CNI** to streamline the training management process between different departments. The application focuses on security, usability, and efficient workflow management.
