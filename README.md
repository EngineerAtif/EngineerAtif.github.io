# Atif Abbas Portfolio - Deployment Guide

This portfolio is designed to be a high-end "Design Agency" style website. It is ready for deployment on GitHub and Vercel.

## 🚀 How to Deploy

1. **Create a GitHub Repository**: Upload all these files (`index.html`, `admin.html`, `style.css`, `app.js`, `projects.js`, etc.) to a new repo.
2. **Connect to Vercel**:
   - Go to [Vercel.com](https://vercel.com).
   - Click **"New Project"**.
   - Import your GitHub repository.
   - Vercel will automatically detect the static site and deploy it.

## 🛠️ How to Update Projects

1. Open your live website and go to `/admin.html` (e.g., `atif-abbas.vercel.app/admin.html`).
2. Login with password: `atif` or `admin123`.
3. Add your new project details (Image URL, Title, Description).
4. Click **"Add to Portfolio"**. You will see it update immediately on your local browser.
5. To make it permanent for everyone:
   - Scroll down to the **"Deploy Updates to GitHub"** section.
   - Click **"Copy Code"**.
   - Go to your `projects.js` file on GitHub, click Edit, and paste the code.
   - Commit changes. Vercel will rebuild your site automatically!

## 💎 Features
- **Responsive Bento Grid**: Beautiful layout for your expertise.
- **Glassmorphism**: Premium transparent technical cards.
- **Micro-animations**: Intersection Observer reveals on scroll.
- **Admin Panel**: Manage your portfolio without touching HTML code.
