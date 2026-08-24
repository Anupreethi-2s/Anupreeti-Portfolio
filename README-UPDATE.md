# Portfolio Update — Installation Guide

## What's inside
This zip contains updated source files for your React portfolio. Here's what changed:

### Updated files (replace existing):
- `src/App.js` — imports navbar CSS
- `src/index.css` — complete new design system (fonts, colors, animations)
- `src/App.css` — minimal reset
- `src/My Components/Main.jsx` — passes scrollToSection + refs to Home
- `src/My Components/Navbar/Navbar.jsx` — sticky nav with scroll effect, mobile slide-out, "Hire Me" CTA
- `src/My Components/Home/Home.jsx` — compelling hero with value prop, animated typing, floating tech cards, CTAs
- `src/My Components/About/About.jsx` — sticky contact card + experience block + education timeline
- `src/My Components/Skills/TechnicalSkills.jsx` — categorized skills with animated progress bars
- `src/My Components/Projects/Projects.jsx` — interactive expandable case studies with problem/role/stack/outcome
- `src/My Components/ContactMe/ContactMe.jsx` — working contact form (opens mailto) + contact info cards
- `src/My Components/Data/data.js` — all your resume data centralized
- `src/My Components/Data/projects.js` — 4 case studies from your resume
- `src/My Components/Data/skill.js` — categorized skills with levels
- `src/CSS/home.css` — hero animations, floating cards, gradient text
- `src/CSS/about.css` — timeline, experience block, contact card
- `src/CSS/skills.css` — progress bars, grid layout
- `src/CSS/projects.css` — expandable case study cards
- `src/CSS/contact.css` — form styling, info cards
- `src/CSS/navbar.css` — sticky nav, mobile menu

### How to install:
1. Unzip this file
2. Copy all files into your repo, replacing existing ones (keep your existing `Assets` folders with images)
3. Run `npm install` (no new dependencies needed — everything uses your existing packages)
4. Run `npm start` to preview locally
5. When happy, push to GitHub and `npm run deploy`

### Design system:
- Dark theme: deep purple-black background (#0F0A19)
- Accent: purple-to-pink gradient (#A855F7 → #EC4899)
- Fonts: Inter (body) + Space Grotesk (headings)
- Scroll-reveal animations via Intersection Observer (no extra deps)
- Fully responsive: desktop → tablet → mobile

### Key improvements:
✓ Hero with clear value proposition + dual CTA
✓ Interactive case studies (click to expand problem/role/outcome)
✓ Animated skill bars with proficiency levels
✓ Sticky navbar with scroll effect + "Hire Me" button
✓ Working contact form (opens email client)
✓ Education timeline with visual flow
✓ Experience highlights from Hornbill Technologies
✓ All resume data integrated
✓ Subtle scroll animations throughout
