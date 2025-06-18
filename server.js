const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// API endpoints
app.get('/api/profile', (req, res) => {
  res.json({
    name: "Mohamed Amine",
    age: 15,
    bio: "Self-taught developer, data scientist, AI engineer, HTML/CSS/JS.",
    avatar: "/images/avatar.jpg"
  });
});

app.get('/api/experience', (req, res) => {
  res.json([
    {
      title: "Self-Taught Web Developer",
      date: "Jan 2025 – Present",
      details: [
        "Learned HTML, CSS, and JavaScript from scratch",
        "Built multiple responsive websites using pure CSS and Flexbox/Grid",
        "Started learning Python and used it to automate small tasks"
      ]
    },
    {
      title: "Portfolio Website v2",
      date: "Apr 2025 – Present",
      details: [
        "Designed and developed a responsive personal portfolio",
        "Used modern CSS and JavaScript for animations and effects"
      ]
    }
  ]);
});

app.get('/api/projects', (req, res) => {
  res.json([
    {
      name: "Study Timer Session Site",
      description: "Web app to help students manage and track their study sessions efficiently.",
      link: "#"
    },
    {
      name: "PBC Lyrics Site",
      description: "Website for searching and displaying song lyrics with a user-friendly interface.",
      link: "#"
    }
  ]);
});

// Fallback for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});