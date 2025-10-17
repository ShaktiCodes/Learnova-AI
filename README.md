# Learnova-AI 🚀

Next-Generation AI-Powered Learning Platform built with MERN Stack

![Learnova-AI](https://img.shields.io/badge/Learnova--AI-Revolutionizing%20Education-blue)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-green)
![AI Powered](https://img.shields.io/badge/AI-Powered-orange)

## 📖 Overview

Learnova-AI is a cutting-edge online education platform that leverages artificial intelligence to deliver personalized learning experiences. With smart AI-powered features, secure authentication, and seamless payment integration, we're revolutionizing how people learn online.

## ✨ Key Features

### 🧠 AI-Powered Smart Search
- **Gemini AI Integration** - Intelligent course and content discovery
- **Voice Search Functionality** - Speak to find what you need
- **Personalized Recommendations** - AI-driven learning paths

### 🔐 Authentication & Security
- **Google OAuth 2.0** - Secure social authentication
- **Firebase Authentication** - Robust sign-in system
- **Role-based Access Control** - Separate permissions for students and instructors

### 💳 Payment Integration
- **Razorpay Payment Gateway** - Secure and seamless transactions
- **Multiple Payment Methods** - Credit cards, UPI, net banking
- **Subscription Management** - Flexible payment plans

### 📊 Dashboard System
- **Student Dashboard** - Track progress, enrolled courses, and achievements
- **Instructor Dashboard** - Manage courses, track earnings, and student analytics
- **Admin Panel** - Platform management and analytics

### 🎯 User Experience
- **Fully Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Built with Tailwind CSS for beautiful interfaces
- **Real-time State Management** - Powered by Redux Toolkit

## 🛠 Tech Stack

### Frontend
- **React.js** - Modern component-based UI library
- **Redux Toolkit** - Predictable state container
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Router** - Declarative routing

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Authentication & Services
- **Firebase Auth** - Google OAuth 2.0 implementation
- **Razorpay API** - Payment processing
- **Gemini AI API** - Artificial intelligence services
- **JWT** - JSON Web Tokens for secure communication

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB
- Firebase project for authentication
- Razorpay account for payments
- Gemini AI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/learnova-ai.git
   cd learnova-ai
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Environment Configuration**

   Create `.env` files in both client and server directories:

   **Server (.env)**
   ```env
PORT = 8000
MONGODB_URL = ""
JWT_SECRET=""
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
EMAIL=""
EMAIL_PASS = ""
RAZORPAY_KEY_ID = ""
RAZORPAY_SECRET = ""
GEMINI_API_KEY = ""
   ```

   **Client (.env)**
   ```env
VITE_FIREBASE_APIKEY = ""
VITE_RAZORPAY_KEY_ID = ""
   ```

4. **Run the application**
   ```bash
   # Start backend server (from server directory)
   npm run dev

   # Start frontend development server (from client directory)
   npm start
   ```

   The application will be available at:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8000

```

## 🎯 Features Deep Dive

### AI-Powered Smart Search
- Natural language processing for course discovery
- Voice-to-text search capabilities
- Context-aware recommendations
- Learning path optimization

### Multi-Role System
- **Students**: Enroll in courses, track progress, access AI tutor
- **Instructors**: Create courses, manage content, view analytics
- **Admins**: Platform management, user management, revenue tracking

### Payment System
- One-time course purchases
- Subscription-based access
- Secure payment processing
- Invoice generation

### Responsive Design
- Mobile-first approach
- Cross-browser compatibility
- Optimized performance
- Accessibility features

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/google` - Google OAuth authentication
- `POST /api/auth/refresh` - Refresh tokens
- `POST /api/auth/logout` - User logout

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course details
- `POST /api/courses` - Create new course (Instructor)
- `PUT /api/courses/:id` - Update course (Instructor)
- `DELETE /api/courses/:id` - Delete course (Instructor)

### Payments
- `POST /api/payments/create-order` - Create Razorpay order
- `POST /api/payments/verify` - Verify payment

### AI Services
- `POST /api/ai/search` - AI-powered search
- `POST /api/ai/voice` - Voice processing
- `POST /api/ai/recommend` - Course recommendations

## 🎨 UI/UX Features

- **Dark/Light Mode** - Theme customization
- **Loading States** - Smooth user experience
- **Error Handling** - User-friendly error messages
- **Progress Indicators** - Visual feedback for actions
- **Responsive Navigation** - Mobile-optimized menus

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google for Gemini AI API
- Razorpay for payment integration
- Firebase for authentication services
- MongoDB for database services
- Tailwind CSS for styling framework

## 📞 Support

For support, email support@learnova-ai.com or join our Slack channel.

## 🔗 Links

- [Live Demo](https://learnova-ai-1.onrender.com)
---

**Built with ❤️ using the MERN Stack**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

⭐ Star us on GitHub — it helps!
