# TechAira - Government Technology Website

A modern, responsive government technology website built with React, FastAPI, and MongoDB. Features include animated elements, hover effects, and a professional design system.

## 🎯 Project Overview

TechAira is a **frontend prototype** showcasing a government technology solutions website with:
- 12 pages (Home, About, Digital Transformation, Solutions, Services, Customers, Contact)
- Professional design system with TechAira brand colors (Red #6b242a, Blue-Grey #44474e)
- 22+ animated floating elements and background patterns
- Full navigation with dropdowns
- Contact form (saves to localStorage for prototype)
- Responsive mobile-first design

## 📋 Prerequisites

### Required Software

1. **Node.js** (v16 or higher)
   - Download: https://nodejs.org/
   - Verify installation: `node --version`

2. **Yarn Package Manager** (v1.22 or higher)
   - Install: `npm install -g yarn`
   - Verify installation: `yarn --version`

3. **Python** (v3.9 or higher)
   - Download: https://www.python.org/downloads/
   - Verify installation: `python --version` or `python3 --version`

4. **pip** (Python package manager)
   - Usually comes with Python
   - Verify installation: `pip --version` or `pip3 --version`

5. **MongoDB** (v5.0 or higher) - *Optional for this prototype*
   - Download: https://www.mongodb.com/try/download/community
   - Or use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas
   - Verify installation: `mongod --version`

### Optional but Recommended

- **Git** for version control
- **VS Code** or your preferred code editor
- **MongoDB Compass** for database GUI

## 🚀 Installation Steps

### 1. Clone/Download the Project

```bash
# If using git
git clone <repository-url>
cd techaira-website

# Or simply extract the project folder
cd /path/to/techaira-website
```

### 2. Set Up Backend (FastAPI + MongoDB)

```bash
# Navigate to backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt
# OR for Python 3
pip3 install -r requirements.txt

# Create .env file
cp .env.example .env  # If example exists
# OR create manually:
touch .env
```

**Backend .env Configuration:**
```env
# Database Configuration
MONGO_URL=mongodb://localhost:27017/
DB_NAME=techaira_db

# API Configuration
CORS_ORIGINS=http://localhost:3000

# Server Configuration (optional)
HOST=0.0.0.0
PORT=8001
```

### 3. Set Up Frontend (React)

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies using Yarn
yarn install

# Create .env file
touch .env
```

**Frontend .env Configuration:**
```env
# Backend API URL
REACT_APP_BACKEND_URL=http://localhost:8001
```

### 4. Set Up MongoDB

**Option A: Local MongoDB**
```bash
# Start MongoDB service
# On macOS:
brew services start mongodb-community

# On Linux:
sudo systemctl start mongod

# On Windows:
# Start MongoDB from Services or run:
"C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe"
```

**Option B: MongoDB Atlas (Cloud)**
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Update `MONGO_URL` in backend/.env with your connection string

## 🏃‍♂️ Running the Project

### Start Backend Server

```bash
# From backend directory
cd backend

# Run with uvicorn
uvicorn server:app --reload --host 0.0.0.0 --port 8001

# Server will start at: http://localhost:8001
# API docs available at: http://localhost:8001/docs
```

### Start Frontend Development Server

```bash
# From frontend directory
cd frontend

# Start React development server
yarn start

# Frontend will open at: http://localhost:3000
```

### Running Both Simultaneously

**Terminal 1 (Backend):**
```bash
cd backend
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

**Terminal 2 (Frontend):**
```bash
cd frontend
yarn start
```

## 📁 Project Structure

```
techaira-website/
├── backend/
│   ├── server.py              # FastAPI application
│   ├── requirements.txt       # Python dependencies
│   └── .env                   # Backend environment variables
│
├── frontend/
│   ├── public/
│   │   └── index.html        # HTML template
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── ui/          # Shadcn UI components
│   │   │   ├── Navigation.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   ├── ContactPage.jsx
│   │   │   └── solutions/
│   │   ├── App.js           # Main app component
│   │   ├── index.css        # Design system & styles
│   │   └── index.js         # Entry point
│   ├── package.json         # Dependencies
│   ├── tailwind.config.js   # Tailwind configuration
│   └── .env                 # Frontend environment variables
│
└── README.md               # This file
```

## 🎨 Current Backend Usage

### **Important: This is a Frontend Prototype**

The current project is **primarily a frontend prototype** with minimal backend integration. Here's what the backend is currently used for:

### **Active Backend Features:**
1. **Basic API Structure** (`/api/` endpoints)
   - Health check endpoint: `GET /api/`
   - Returns: `{"message": "Hello World"}`

2. **Status Check Demo Endpoints:**
   - `POST /api/status` - Create status check entry
   - `GET /api/status` - Retrieve status checks
   - Demonstrates MongoDB integration

### **Frontend Features Using Mock Data:**
- ✅ Contact form (saves to **localStorage**, not database)
- ✅ Navigation and routing (client-side only)
- ✅ All content is static/hardcoded
- ✅ No authentication required
- ✅ No real-time data fetching

### **Backend Purpose in Current State:**
The backend is set up to demonstrate **full-stack capability** and provide a foundation for future features like:
- User authentication
- Form submissions to database
- Dynamic content management
- API integrations
- Real-time data updates

### **For Production Use:**
To make this a full-stack application, you would add:
1. **Contact Form Backend:**
   ```python
   @api_router.post("/contact")
   async def submit_contact_form(form_data: ContactFormData):
       await db.contacts.insert_one(form_data.dict())
       return {"message": "Contact form submitted"}
   ```

2. **Content Management:**
   - Store testimonials, case studies, team members in MongoDB
   - Create admin panel to manage content
   - Fetch dynamic data from backend

3. **Authentication:**
   - User login/registration
   - JWT tokens
   - Protected routes

## 🛠️ Tech Stack

### Frontend
- **React** 18.x - UI framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Component library (Radix UI primitives)
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

### Backend
- **FastAPI** - Modern Python web framework
- **Uvicorn** - ASGI server
- **Motor** - Async MongoDB driver
- **Pydantic** - Data validation
- **Python-dotenv** - Environment variables

### Database
- **MongoDB** - NoSQL database (currently minimal usage)

### Design System
- **Colors:** TechAira Red (#6b242a), Blue-Grey (#44474e)
- **Typography:** IBM Plex Sans (body), Space Grotesk (headings)
- **Animations:** Custom CSS keyframes with Tailwind

## 🌐 Available Scripts

### Frontend
```bash
yarn start          # Start development server
yarn build          # Build for production
yarn test           # Run tests
yarn lint           # Lint code
```

### Backend
```bash
python server.py                    # Run server directly
uvicorn server:app --reload         # Development with auto-reload
uvicorn server:app --host 0.0.0.0  # Production mode
```

## 📱 Features

### Pages
1. **Home** - Hero section, stats, solutions overview, benefits, testimonials
2. **About** - Mission, vision, values, leadership team
3. **Digital Transformation** - 4 pillars framework, benefits, case studies
4. **Solutions** - eVisa, National ID, Training, Tracking systems
5. **Services** - 6 service pages (consulting, cybersecurity, etc.)
6. **Customers** - Client logos, case studies
7. **Contact** - Contact form with validation

### Design Features
- 22+ animated floating icons
- Smooth hover effects and transitions
- 3D flip cards (team members)
- Gradient backgrounds with brand colors
- Responsive mobile design
- Professional government aesthetic

## 🔧 Troubleshooting

### Frontend Won't Start
```bash
# Clear node modules and reinstall
rm -rf node_modules yarn.lock
yarn install
```

### Backend Won't Start
```bash
# Check Python version
python --version  # Should be 3.9+

# Reinstall dependencies
pip install -r requirements.txt

# Check if port 8001 is in use
lsof -i :8001  # On macOS/Linux
netstat -ano | findstr :8001  # On Windows
```

### MongoDB Connection Issues
```bash
# Check if MongoDB is running
mongo --eval "db.adminCommand('ping')"

# Start MongoDB service
brew services start mongodb-community  # macOS
sudo systemctl start mongod            # Linux
```

### CORS Errors
- Ensure `REACT_APP_BACKEND_URL` in frontend/.env matches your backend URL
- Check `CORS_ORIGINS` in backend/.env includes your frontend URL

## 🚢 Deployment

### Frontend (React)
- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy`
- **Static hosting**: Use `yarn build` output from `/build` folder

### Backend (FastAPI)
- **Railway**: Connect GitHub repo
- **Render**: Deploy from GitHub
- **AWS/DigitalOcean**: Use Docker or direct deployment

### Database (MongoDB)
- **MongoDB Atlas**: Free tier available
- Recommended for production use

## 📝 Environment Variables

### Backend Required
```env
MONGO_URL=<your-mongodb-connection-string>
DB_NAME=techaira_db
CORS_ORIGINS=http://localhost:3000
```

### Frontend Required
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

## 📧 Contact

For questions or issues with running the project locally, please refer to this README or check:
- Frontend logs: Browser console
- Backend logs: Terminal running uvicorn
- MongoDB logs: MongoDB service logs

## 📄 License

This project is part of a prototype demonstration.

---

**Note:** This is currently a **frontend prototype**. The backend is set up for demonstration and future expansion but is not actively used by the frontend in its current state. All form submissions and data are handled client-side using localStorage.
