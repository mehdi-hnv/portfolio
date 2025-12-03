# Mehdi Jekyll Portfolio

Modern, responsive multi-page site powered by Jekyll and showcasing Mehdi's background, projects, and resume snapshot.

## Pages
- `index.md` — home landing with hero, highlights, and social links
- `about.md` — background, qualifications, and timeline
- `projects.md` — detailed cards for Project 1, Hour of Code, and more
- `resume.md` — skills, experience, and collaboration call-to-action

## Structure
```
_config.yml           # Site metadata, nav, and plugins
Gemfile               # Ruby dependencies
_layouts/             # default + page layouts
_includes/            # header, navbar, footer partials
assets/
  css/style.css       # theme, layout, responsive rules
  images/             # SVG profile + project art
  js/main.js          # navigation toggle, footer year helper
```

## Getting Started
1. Install Ruby/bundler, then run `bundle install`.
2. Start the local server with `bundle exec jekyll serve`.
3. Visit `http://localhost:4000` to preview the site.
4. Update content (photos, copy, project links) to match your latest info.

## Deployment
Deploy with GitHub Pages, Netlify, or Vercel. Ensure the GitHub repo powering this site is public and keep the footer link up to date.

## License
MIT
