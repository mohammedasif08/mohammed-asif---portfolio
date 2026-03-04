# Portfolio Website — React

## 🚀 Quick Start
```bash
npm install
npm start
# Opens http://localhost:3000
```

## ✨ Features
- 🌙 Dark / ☀️ Light mode toggle (saved to localStorage)
- 📥 Resume download button (Header + Hero)
- 📱 Fully responsive — Mobile, Tablet, Desktop
- ⚛️ React with separate component folders

## 📁 Structure
```
src/
├── App.js              ← Theme state lives here
├── index.css           ← CSS variables for dark & light
└── components/
    ├── Header/         Header.jsx + Header.css
    ├── Hero/           Hero.jsx   + Hero.css
    ├── About/          About.jsx  + About.css
    ├── Skills/         Skills.jsx + Skills.css
    ├── Projects/       Projects.jsx + Projects.css
    ├── Contact/        Contact.jsx  + Contact.css
    └── Footer/         Footer.jsx   + Footer.css
```

## ✏️ Customize

### Your Name & Info
- `Hero.jsx` — name, description, social links
- `About.jsx` — bio text, stats, service cards
- `Projects.jsx` — project list, GitHub/live links
- `Contact.jsx` — email, LinkedIn, GitHub

### Profile Photo
In `Hero.jsx` replace the placeholder div:
```jsx
<img src="/photo.jpg" alt="Your Name" className="hero__avatar-img" />
```
Place `photo.jpg` inside the `public/` folder.

### Resume PDF
Place your resume at `public/resume.pdf`
Both the Header and Hero "Download CV" buttons will work automatically.

### Brand Color
In `src/index.css`:
```css
--accent:   #6c63ff;   /* change to your color */
--accent-h: #5a52e0;   /* slightly darker shade */
```

## 🌐 Deploy
```bash
npm run build
# Upload build/ to Vercel / Netlify / GitHub Pages
```
"# mohammed-asif---portfolio" 
