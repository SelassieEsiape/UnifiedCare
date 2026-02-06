# UnifiedCare Web App

Your digital care marketplace platform connecting families with caregivers.

## What We Built

- ✅ React project structure with Vite (fast build tool)
- ✅ Tailwind CSS for styling (utility-first CSS framework)
- ✅ Navbar component (reusable header)
- ✅ Home page with hero section matching your design
- ✅ Component-based architecture ready to scale

## Project Structure

```
unifiedcare-app/
├── src/
│   ├── components/     # Reusable UI components
│   │   └── Navbar.jsx
│   ├── pages/          # Full page views
│   │   └── Home.jsx
│   ├── assets/         # Images, icons (add your logo here)
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static files
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.js      # Build configuration

```

## How to Run

1. **Install dependencies:**
   ```bash
   cd unifiedcare-app
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   
   The app will open at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

## Next Steps

### Immediate:
1. Add your actual logo and hero image to `/src/assets/`
2. Update the image URL in `Home.jsx`
3. Customize colors in `tailwind.config.js`

### Phase 1 Features:
- [ ] Add React Router for multi-page navigation
- [ ] Create Services page
- [ ] Build Contact Us page  
- [ ] Design Login/Signup pages (separate for families & caregivers)
- [ ] Create "How It Works" section
- [ ] Add Footer component

### Phase 2 Features:
- [ ] User authentication system
- [ ] Caregiver profile pages
- [ ] Search and filter functionality
- [ ] Booking system

## Key Technologies

- **React**: Component-based UI framework
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first styling
- **React Router** (coming next): Page navigation

## Design Decisions

**Why Tailwind?** 
- Faster than writing custom CSS
- Consistent design system
- Easy to make responsive (mobile-friendly)

**Why Vite?**
- Instant server start
- Fast hot reload (see changes immediately)
- Better than Create React App

**Why Components?**
- Build UI pieces once, reuse everywhere
- Easy to test and maintain
- Matches how you think (Navbar, Button, Card)
