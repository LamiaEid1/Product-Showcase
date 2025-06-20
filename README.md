# 🛍️ Product Showcase

A beautiful and modern full-stack web application for showcasing products with a clean, responsive design. Built with the MERN stack and styled with Chakra UI.

## ✨ Features

- **Product Display**: View all products in a beautiful grid layout
- **Add Products**: Create new products with name, price, and image URL
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive interface with smooth animations
- **Real-time Updates**: Products update instantly when added
- **Dark/Light Mode**: Automatic theme switching based on system preferences

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Chakra UI** - Beautiful component library
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management
- **Framer Motion** - Smooth animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd product-showcase
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   npm install --prefix frontend
   ```

3. **Set up environment variables**
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Build the application**
   ```bash
   npm run build
   ```

### Running the Application

#### Development Mode
```bash
npm run dev
```

#### Production Mode
```bash
npm run start
```

The application will be available at:
- Frontend: `http://localhost:5173` (development) or `http://localhost:5000` (production)
- Backend API: `http://localhost:5000`

## 📱 Usage

1. **View Products**: Visit the home page to see all products displayed in a responsive grid
2. **Add Products**: Click "Create" in the navigation or use the link when no products exist
3. **Product Details**: Each product card shows the name, price, and image
4. **Responsive**: The layout automatically adjusts for different screen sizes

## 🎨 UI Features

- **Gradient Text**: Beautiful gradient headings
- **Card Layout**: Clean product cards with shadows
- **Responsive Grid**: Automatically adjusts columns based on screen size
- **Toast Notifications**: Success and error messages
- **Smooth Animations**: Framer Motion powered transitions

## 📁 Project Structure

```
product-showcase/
├── backend/                 # Express.js server
│   ├── config/             # Database configuration
│   ├── controllers/        # API controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   └── server.js          # Server entry point
├── frontend/              # React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Zustand state management
│   │   └── App.jsx        # Main app component
│   └── package.json
└── package.json           # Root package.json
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

---

Made with ❤️ using the MERN stack and Chakra UI

```shell
npm run build
```
```shell
 npm install --save-dev cross-env
```


### Start the app

```shell
npm run start
```
