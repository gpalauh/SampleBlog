---
date: 2024-01-15
authors:
  - sampleblog
categories:
  - Tutorials
  - Tools
tags:
  - mkdocs
  - python
  - static-sites
description: >
  A complete walkthrough of setting up MkDocs with the Material theme —
  from installation to deployment on GitHub Pages.
---

# Getting Started with MkDocs

MkDocs is a fast, simple, and beautiful static site generator that's perfect
for building documentation sites and blogs. Combined with the Material theme,
you get a professional-grade website with minimal effort.

<!-- more -->

## What is MkDocs?

[MkDocs](https://www.mkdocs.org/) is a Python-based static site generator that
converts Markdown files into a fully functional website. It's widely used for
documentation but works just as well as a blogging platform.

## Why Choose Material for MkDocs?

The [Material theme](https://squidfunk.github.io/mkdocs-material/) provides:

- 🎨 **Beautiful design** — clean, modern, and customisable
- 🌙 **Light/Dark mode** — automatic or user-controlled
- 📱 **Responsive** — great on every screen size
- ♿ **Accessible** — WCAG compliant out of the box
- 🔍 **Full-text search** — built-in, no external services needed
- 📝 **Blog plugin** — first-class blogging support

## Installation

First, make sure you have Python 3.8+ installed, then:

```bash
pip install mkdocs-material
```

## Creating Your First Site

```bash
mkdocs new my-site
cd my-site
```

This creates a minimal project structure:

```
my-site/
├── docs/
│   └── index.md
└── mkdocs.yml
```

## Configuring the Material Theme

Edit `mkdocs.yml`:

```yaml
site_name: My Awesome Site

theme:
  name: material
  palette:
    - media: "(prefers-color-scheme: light)"
      scheme: default
      toggle:
        icon: material/weather-night
        name: Switch to dark mode
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      toggle:
        icon: material/weather-sunny
        name: Switch to light mode
```

## Adding the Blog Plugin

```yaml
plugins:
  - search
  - blog:
      blog_dir: blog
      post_date_format: long
      categories: true
      authors: true
```

## Serving Locally

```bash
mkdocs serve
```

Open your browser at `http://127.0.0.1:8000` and you're live!

## Deploying to GitHub Pages

```bash
mkdocs gh-deploy
```

That's it — MkDocs will build your site and push it to the `gh-pages` branch
automatically.

## Next Steps

- Explore the [Material reference](https://squidfunk.github.io/mkdocs-material/reference/) for all available components
- Add [social cards](https://squidfunk.github.io/mkdocs-material/setup/setting-up-social-cards/) for better link previews
- Set up [Google Analytics](https://squidfunk.github.io/mkdocs-material/setup/setting-up-site-analytics/) for traffic insights

Happy writing! ✨
