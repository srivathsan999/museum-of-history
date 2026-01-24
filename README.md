# The Heritage Museum - Professional HTML Template

A professional, museum-grade HTML template for history museums, designed to meet ThemeForest quality standards. This template features a timeless design system, fully functional light/dark mode, and comprehensive page coverage.

## 🎨 Design System

### Color Palette

**Light Mode:**
- Background: `#F4F1EC` (Parchment)
- Surface: `#FFFFFF`
- Primary Text: `#1F1F1F`
- Secondary Text: `#5B5B5B`
- Accent: `#8C6A3D` (Antique Bronze)
- Borders: `rgba(0,0,0,0.08)`

**Dark Mode:**
- Background: `#121212`
- Surface: `#1C1C1C`
- Primary Text: `#F1F1F1`
- Secondary Text: `#B5B5B5`
- Accent: `#C2A16A`
- Borders: `rgba(255,255,255,0.12)`

### Typography

- **Headings:** Libre Baskerville (serif)
- **Body/UI:** Inter (sans-serif)
- **Navigation:** Inter Medium
- **Line Height:** 
  - Body: 1.65
  - Headings: 1.3

### Animation Rules

- Page entry: fade-in only
- Section reveal: subtle fade + 8px Y translation
- Hover: underline or micro-shadow
- Respects `prefers-reduced-motion`

## 📁 File Structure

```
/museum-of-history/
│
├── assets/
│   ├── css/
│   │   ├── tailwind.css
│   │   ├── theme.css
│   │   └── animations.css
│   ├── js/
│   │   ├── theme-toggle.js
│   │   └── navbar.js
│   └── images/
│
├── index.html
├── home-2.html
├── about.html
├── exhibitions.html
├── exhibition-details.html
├── collections.html
├── events.html
├── blog.html
├── blog-details.html
├── visit.html
├── contact.html
├── login.html
├── signup.html
├── 404.html
└── README.md
```

## 📄 Pages Included

1. **index.html** - Home v1 (Hero with featured exhibitions)
2. **home-2.html** - Home v2 (Alternate layout with collections grid)
3. **about.html** - Museum history, mission, and values
4. **exhibitions.html** - Current and upcoming exhibitions
5. **exhibition-details.html** - Individual exhibition details
6. **collections.html** - Museum collections overview
7. **events.html** - Upcoming events and programs
8. **blog.html** - Articles and research blog
9. **blog-details.html** - Individual blog post
10. **visit.html** - Hours, tickets, directions, and visitor info
11. **contact.html** - Contact form and information
12. **login.html** - User login page
13. **signup.html** - User registration page
14. **404.html** - Error page

## 🚀 Features

### Navigation
- Sticky navbar with glassmorphism effect
- Dropdown menu for Home (Home 1 & Home 2)
- Mobile-responsive hamburger menu
- Theme toggle visible on all screen sizes
- Active page highlighting

### Theme System
- Fully functional light/dark mode
- CSS variables for seamless theme switching
- Persistent theme preference (localStorage)
- Perfect text visibility in both modes
- Smooth transitions

### Responsive Design
- Mobile-first approach
- Breakpoints: sm / md / lg / xl
- No overlapping elements
- High contrast text on all backgrounds
- Tested on all screen sizes

### UI Components
- Cards with hover effects
- Buttons (primary and outline styles)
- Forms with proper styling
- Image overlays for text readability
- Subtle animations

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **TailwindCSS** - Utility-first CSS framework (CDN)
- **Vanilla JavaScript** - No frameworks required
- **CSS Variables** - For theming
- **No Build Step** - Ready to use

## 📝 Usage

1. Open any HTML file in a browser
2. The theme toggle is available in the navbar
3. All pages are fully linked and functional
4. Replace placeholder images with your own museum imagery

## 🎯 Design Principles

- **Timeless & Scholarly** - Museum-grade aesthetic, not startup-style
- **Accessibility First** - High contrast, readable text, proper semantics
- **Subtle Animations** - Almost invisible, respects user preferences
- **Clean Layouts** - No clutter, authoritative presentation
- **Museum Imagery** - Historical artifacts, sculptures, manuscripts only

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive on all devices

## 🔧 Customization

### Changing Colors
Edit CSS variables in `assets/css/theme.css`:
```css
:root {
  --bg-primary: #F4F1EC;
  --accent: #8C6A3D;
  /* ... */
}
```

### Adding Pages
Follow the existing structure:
1. Copy an existing HTML file
2. Update the navbar active state
3. Replace content sections
4. Maintain the same footer structure

### Replacing Images
Replace Unsplash placeholder URLs with your own museum images:
- Use historical artifacts
- Museum interiors
- Sculptures and manuscripts
- Historical architecture

## 📄 License

This template is designed for ThemeForest submission. All code is clean, commented, and follows best practices.

## ✨ Quality Standards

- ✅ Semantic HTML5
- ✅ Fully responsive
- ✅ Accessible (WCAG considerations)
- ✅ Cross-browser compatible
- ✅ No console errors
- ✅ Clean, organized code
- ✅ Professional design
- ✅ ThemeForest-ready

---

**The Heritage Museum** - Preserving history through digital excellence.

