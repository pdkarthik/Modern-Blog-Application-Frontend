# 📝 Modern Blog Application Frontend
## 🌐 Live Demo
[View Live Application] 🔗 https://ca-monk-blog-frontend.onrender.com


> **A high-performance, responsive user interface built for reading and managing technical content.**

---

## 🖥️ What's Displayed on Screen

### Layout
- **Header**: CA Monk logo/brand name on left, "New Blog" button on right
- **Left Panel (25-33% width)**: 
  - "All Blogs" header with article count
  - Scrollable list of blog cards showing title, description, categories, and date
  - Selected blog highlighted
- **Right Panel (67-75% width)**: 
  - Empty state when no blog selected
  - Full blog detail view with cover image, title, categories, date, description, and content
- **Create Blog Dialog**: Modal form to create new blog posts

### Responsive Design
- **Desktop**: Two-column side-by-side layout
- **Mobile**: Single column, stacked layout
- Smooth transitions, hover effects, and loading states

---

## 🛠️ Technology Stack

### Core
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool & dev server

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS
- **shadcn/ui** - Component library (40+ components)
- **Radix UI** - Accessible primitives
- **Lucide React** - Icons

### State & Data
- **TanStack Query 5.83.0** - Server state management
- **React Hook Form 7.61.1** - Form handling
- **Zod 3.25.76** - Schema validation

### Backend
- **JSON Server 0.17.4** - Mock REST API

### Utilities
- **date-fns** - Date formatting
- **React Router DOM** - Routing

---

## ✨ Features

- ✅ Browse and view blog posts
- ✅ Create new blog posts with form validation
- ✅ Color-coded category badges
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Loading states with skeleton UI
- ✅ Error handling with user-friendly messages
- ✅ Toast notifications
- ✅ Image error fallback
- ✅ Real-time article count
- ✅ Smooth animations and transitions

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ and npm

### Installation

1. **Clone and install**:
```bash
git clone https://github.com/pdkarthik/Modern-Blog-Application-Frontend.git
cd Modern-Blog-Application-Frontend
npm install
```

2. **Start JSON Server** (in one terminal):
```bash
npm run server
# Runs on http://localhost:3001
```

3. **Start Dev Server** (in another terminal):
```bash
npm run dev
# Runs on http://localhost:8080
```

4. **Open browser**: Navigate to `http://localhost:8080`

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run server` | Start JSON Server |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
Frontend-Interview/
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── BlogCard.tsx
│   │   ├── BlogDetail.tsx
│   │   ├── BlogList.tsx
│   │   ├── CreateBlogDialog.tsx
│   │   └── Header.tsx
│   ├── hooks/          # Custom hooks (useBlogs, useToast)
│   ├── lib/            # API & utilities
│   ├── pages/          # Page components
│   └── types/          # TypeScript types
├── public/             # Static assets
├── db.json             # JSON Server database
└── package.json        # Dependencies
```

---

## 🌐 Deployment to Render

### Quick Steps

1. **Push to GitHub**
2. **Create Blueprint on Render**:
   - Go to [Render Dashboard](https://dashboard.render.com)
   - New + → Blueprint
   - Connect GitHub repo
   - Render detects `render.yaml`

3. **Set Environment Variable**:
   - After backend deploys, copy its URL
   - In frontend service, add: `VITE_API_URL` = `https://your-api-service.onrender.com`

4. **Deploy**: Click "Apply"

### Services
- **Backend**: Web Service (JSON Server)
- **Frontend**: Static Site (React build)



---

## 🎓 Skills Demonstrated

- React component architecture & hooks
- TypeScript for type safety
- State management with TanStack Query
- Responsive UI/UX design
- API integration & error handling
- Form validation & user feedback
- Build tools & deployment

---

## 🐛 Troubleshooting

- **`vite` not found**: Run `npm install`
- **Port 3001 in use**: Stop other services or change port
- **API connection failed**: Ensure JSON server is running
- **Build fails**: Clear `node_modules` and reinstall

---

**Built with ❤️**
