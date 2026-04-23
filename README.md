# Meghana Chillara — AI/ML Portfolio Template

This repository contains the source code for an interactive 3D portfolio built with React, TypeScript, Three.js, and GSAP.

I adapted this project to build my own portfolio, and this version is structured so **you can easily customize it for your own profile** — especially if you're in AI, data science, or software engineering.

👉 **Live Demo:** https://meghanachillara.com/

---

## 🚀 What This Template Is Good For

Use this if you want to:
- Build a **modern, interactive portfolio**
- Showcase **projects, research, and experience**
- Stand out with **animations + 3D elements**
- Avoid building everything from scratch

---

## 🧭 How to Customize This for Your Portfolio

Follow these steps in order — this is the fastest way to make it your own.

---

### 1. Update Your Identity (Start Here)

Edit:

- `src/components/Navbar.tsx`
- `src/components/Landing.tsx`
- `index.html`

Replace:
- Name
- LinkedIn link
- Title (Data Scientist / ML Engineer / etc.)

---

### 2. Update Your Story

Edit:

- `src/components/About.tsx`

Write:
- What you do
- What you specialize in
- What kind of problems you solve

💡 Keep it concise and impact-focused.

---

### 3. Add Your Experience

Edit:

- `src/components/Career.tsx`

Focus on:
- What you accomplished
- What changed because of your work
- Real-world impact (not just responsibilities)

---

### 4. Define What You Do

Edit:

- `src/components/WhatIDo.tsx`

Split into two areas:
- AI / ML / Data (what you build)
- Engineering / Systems (how you build it)

---

### 5. Add Your Projects (Most Important Section)

Edit:

- `src/components/Work.tsx`

👉 Only include **3–5 strong projects**

Each project should:
- Have a clear title
- Describe what it does (not just tech)
- Link to GitHub or live demo

---

### 6. Update Images

Replace images in:

```

public/images/

```

Make sure your project images match filenames used in `Work.tsx`.

---

### 7. Fix Contact Info

Edit:

- `src/components/Contact.tsx`
- `src/components/SocialIcons.tsx`

Update:
- Email
- GitHub
- LinkedIn
- Resume PDF

---

### 8. Replace Tech Stack Icons (Optional)

Edit:

- `src/components/TechStack.tsx`

Replace images in:
```

public/images/

```

---

### 9. (Optional) Add Videos to Projects

If you want hover previews:

```

public/videos/

````

Then pass:
```tsx
video="demo.mp4"
````

in `Work.tsx`.

---
```

## 🛠️ Getting Started

### Prerequisites

* Node.js 18+
* npm

### Install & Run

```bash
git clone <your-repo>
cd portfolio
npm install
npm run dev
```

---

## 🧠 Tips for a Strong Portfolio

* ❌ Don’t include every project

* ✅ Highlight your **best 3–5**

* ❌ Don’t copy resume text

* ✅ Focus on **impact + clarity**

* ❌ Don’t overload with tech

* ✅ Show **what problems you solved**

---

## 📦 Deployment

```bash
npm run build
npm run preview
```

Deploy `/dist` using:

* Vercel
* Netlify
* Cloudflare Pages

---

## 📁 Project Structure

```text
src/components/
  About.tsx        → Your story
  Career.tsx       → Experience
  WhatIDo.tsx      → Skills & focus
  Work.tsx         → Projects (MOST important)
  Contact.tsx      → Contact info
  TechStack.tsx    → Visual tech section
```

---

## 📄 License

MIT License — feel free to use and modify.

