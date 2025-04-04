# 🪻 Petal Pages

A garden-themed journaling app where each entry becomes a flower. You rate your day, jot down a rose (good thing), a thorn (bad thing), and a bud (something you’re looking forward to). The flowers are color-coded based on your rating, and clicking one reveals the full entry.

Built with:
- 🧠 Ruby on Rails (API backend)
- 🎨 React + Tailwind CSS + Vite (frontend)
- 🗃️ PostgreSQL (database)

---

## 🛠️ Features

- Submit a new journal entry (“plant a flower”) with:
  - Day rating (1–5)
  - Rose 🌹 — something good
  - Thorn 🗡️ — something bad
  - Bud 🌱 — something to look forward to
- View all past entries in a garden layout
- Click on a flower to see the full journal entry
- Color-coded flowers based on rating

---

## 📸 Screenshot



---

## 🧪 Getting Started
[IMG_6047.pdf](https://github.com/user-attachments/files/19610004/IMG_6047.pdf)

### Front End (React + TailwindCSS)
To run:
```bash
cd petal-pages-frontend
npm install
npm run dev
App runs at http://localhost:5173
```

### Backend (Rails API)
To run:
```bash
cd petal-pages-api
bundle install
rails db:create db:migrate
rails server
