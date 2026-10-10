# Pavan Madavaram — Portfolio V2

Futuristic, responsive React portfolio with a CSS-illustrated animated robot, motion transitions, functional project filters, experience/skills tabs, scroll-aware navigation, email copy button and external contact links.

## Local setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

For a custom domain, set Vite's `base` to `/` (default), configure GitHub Pages using GitHub Actions, and add your domain in repository Pages settings. For a project site (`username.github.io/repo-name/`), configure `base: '/repo-name/'` in `vite.config.js` before building. Alternatively, import the repo to Vercel or Netlify with build command `npm run build` and output folder `dist`.

## Customize

- Edit `src/main.jsx` for biography, roles, projects and links.
- Edit `src/style.css` for visuals and motion.
- Project cards intentionally do **not** link to private or unverified repositories.
- Add a downloadable resume to `public/resume.pdf` and a button once your final resume is ready.
- Verify career dates and company/project descriptions before publishing. The older HTML source conflicts with the resume on some dates.

## Accessibility

Responsive layout, semantic sections, keyboard-operable controls, descriptive labels and reduced-motion support.
