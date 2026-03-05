# SampleBlog

A modern blog built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and deployed to GitHub Pages (with Azure Static Web Apps support).

## Features

- 🎨 **Gradient colour theme** — purple → violet → cyan across header, hero, and footer
- 🌙 **Light / Dark mode** — user-controlled toggle, also respects `prefers-color-scheme`
- 🖼️ **Hero image** at the top of every page followed by content
- 📝 **Blog** — powered by MkDocs Material's built-in blog plugin; add posts by dropping `.md` files in `docs/blog/posts/`
- 📱 **Responsive** — fluid layouts and typography from mobile to desktop
- ♿ **Accessible** — WCAG 2.1 compliant, keyboard navigable, skip links, proper ARIA
- ☁️ **Deployable** to GitHub Pages and Azure Static Web Apps

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `docs/index.md` | Landing page with feature cards and latest post highlights |
| Blog | `docs/blog/index.md` | Auto-generated blog index listing all posts |
| Contact | `docs/contact.md` | Contact form + alternative contact methods |

## Adding Blog Posts

Create a new file in `docs/blog/posts/` with the following front matter:

```markdown
---
date: 2024-06-01
authors:
  - sampleblog
categories:
  - My Category
description: A short description shown in the blog listing.
---

# Post Title

Post excerpt shown in the blog listing.

<!-- more -->

Full post content here…
```

## Local Development

```bash
pip install -r requirements.txt
mkdocs serve
```

Open <http://127.0.0.1:8000> in your browser.

## Deployment

### GitHub Pages (automatic)

Pushes to `main` trigger the [GitHub Actions workflow](.github/workflows/deploy.yml) which builds and deploys the site automatically.

### Azure Static Web Apps

The [`staticwebapp.config.json`](staticwebapp.config.json) file provides routing, security headers, and MIME type configuration for Azure Static Web Apps deployment.

## Project Structure

```
SampleBlog/
├── docs/
│   ├── index.md                    # Home page
│   ├── contact.md                  # Contact page
│   ├── blog/
│   │   ├── index.md                # Blog landing page
│   │   ├── .authors.yml            # Author definitions
│   │   └── posts/                  # Add blog posts here
│   ├── assets/images/              # Hero images + logo
│   ├── stylesheets/extra.css       # Gradient theme + hero styles
│   ├── javascripts/extra.js        # Hero image loader + form handler
│   └── overrides/                  # Custom Jinja2 template overrides
│       ├── main.html               # Adds hero to standard pages
│       ├── blog.html               # Adds hero to blog index
│       └── blog-post.html          # Adds hero to blog posts
├── mkdocs.yml                      # MkDocs configuration
├── requirements.txt                # Python dependencies
├── staticwebapp.config.json        # Azure Static Web Apps config
└── .github/workflows/deploy.yml   # GitHub Pages CI/CD
```
