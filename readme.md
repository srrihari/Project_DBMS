# Event Management System

A full-stack web application for managing event hall bookings, built with React, Node.js, and MySQL. This system allows customers to browse available halls, make bookings, and organizers to manage their venues.

## 🌟 Features

### Customer Features

- Browse available event halls with detailed information
- View hall details including pricing, capacity, and amenities
- User registration and authentication
- Book halls for events
- View personal booking history
- Secure login system with password encryption

### Hall Management

- Display halls with venue details
- Filter by amenities and tags
- Real-time availability checking
- Booking confirmation system

### Admin Features

- Manage hall listings
- View and confirm bookings
- Organizer authentication system

## 🛠️ Tech Stack

### Frontend

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **React Router DOM** for navigation
- **Lucide React** for icons

### Backend

- **Node.js** with Express.js
- **MySQL2** for database connectivity
- **bcrypt** for password hashing
- **CORS** for cross-origin requests
- **dotenv** for environment management

### Database

- **MySQL** for data storage
- Relational database with proper foreign key constraints

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MySQL** (v8.0 or higher)
- **Git**

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Event_Management
```

### 2. Database Setup

1. Start your MySQL server
2. Create the database and tables:

```bash
mysql -u root -p < server/Data.sql
```

### 3. Backend Setup

1. Navigate to the server directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the server directory:

```env
PORT=3000
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=EVENT
```

4. Start the server:

```bash
npm start
```

The server will run on `http://localhost:3000`

### 4. Frontend Setup

1. Navigate to the client directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 💾 Database Schema

The application uses the following main tables:

- **Organizer**: Manages hall owners/organizers
- **Hall**: Stores hall information (name, venue, price, capacity, amenities)
- **Customer**: Stores customer registration data
- **Booking**: Manages hall bookings and confirmations

### Key Relationships

- Halls belong to Organizers
- Bookings link Customers to Halls
- Automatic booking confirmation based on availability

## 🔗 API Endpoints

### Halls

- `GET /` - Get all halls or specific hall by ID
- `GET /?id={hall_id}` - Get specific hall details

### Authentication

- `POST /Login` - Customer login
- `POST /register` - Customer registration with automatic booking

### Bookings

- `GET /booking?id={customer_id}` - Get customer bookings

## 📁 Project Structure

```
Event_Management/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ui/        # Reusable UI components
│   │   │   ├── HallsView.tsx
│   │   │   ├── Hallinfo.tsx
│   │   │   └── HallCustomer.tsx
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── App.tsx        # Main application component
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── server/                # Node.js backend
│   ├── server.js          # Main server file
│   ├── Data.sql           # Database schema and sample data
│   └── package.json       # Backend dependencies
├── images/                # Project documentation images
│   ├── Final_ER.png       # Entity-Relationship diagram
│   └── UML_Class_Diagram_Updated.png
└── README.md              # Project documentation
```

## 🎯 Usage

### For Customers:

1. Visit the application homepage to browse available halls
2. Click on a hall to view detailed information
3. Click "Book Hall" to register and make a booking
4. Use "View Bookings" to login and see your booking history

### For Organizers:

1. Halls are managed through the database
2. Organizers can add new halls via SQL inserts
3. Booking confirmations are handled automatically

## 🔧 Development

### Running in Development Mode

**Backend:**

```bash
cd server
npm start  # Uses nodemon for auto-restart
```

**Frontend:**

```bash
cd client
npm run dev  # Uses Vite dev server
```

### Building for Production

**Frontend:**

```bash
cd client
npm run build
```

### Code Quality

```bash
cd client
npm run lint  # ESLint for code quality
```

## 🔒 Security Features

- Password hashing using bcrypt
- SQL injection prevention through parameterized queries
- CORS configuration for secure cross-origin requests
- Input validation and error handling

## 📊 Database Design

The system follows a normalized database design:

![ER Diagram](images/Final_ER.png)

![UML Class Diagram](images/UML_Class_Diagram_Updated.png)

## 👥 Team Members

- **Tharun TV** - 23011102109
- **Prannav R** - 23011102065
- **Srri Hari TR** - 23011102101
- **Priyajit Biswal** - 23011102068
- **S Surya** - 23011102081

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is part of an academic assignment for the Database Management Systems course.

## 🐛 Known Issues

- Environment configuration requires manual setup
- Limited error handling in some frontend components
- No admin panel for hall management

## 🚀 Future Enhancements

- Admin dashboard for hall and booking management
- Payment integration
- Email notifications for booking confirmations
- Advanced search and filtering
- Mobile responsive design improvements
- Hall availability calendar view

## 📞 Support

For any questions or issues, please contact any of the team members or create an issue in the repository.
