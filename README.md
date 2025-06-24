# Personal Blog - Abdelrahman Rizik

A modern, fast, and elegant personal blog built with SvelteKit. Features a clean design, markdown-based content management, and seamless performance.

## ✨ Features

- **Modern Stack**: Built with SvelteKit 5 + TypeScript
- **Markdown Content**: Write articles in markdown with frontmatter
- **Syntax Highlighting**: Beautiful code highlighting with Shiki
- **Responsive Design**: Mobile-first approach with elegant animations
- **SEO Optimized**: Automatic sitemap generation and meta tags
- **Fast Performance**: Optimized builds with minimal JavaScript
- **Dynamic Theming**: Custom CSS properties for consistent styling

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+)
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/abdrizik/blog.git
cd blog

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The blog will be available at `http://localhost:5173`

## 📝 Content Management

### Adding Articles

1. Create a new `.md` file in `src/content/`
2. Add frontmatter with required fields:

```markdown
---
title: 'Your Article Title'
description: 'Brief description of your article'
publishAt: '2025-01-15'
category: 'Web Development'
slug: 'your-article-slug'
---

Your article content here...
```

### Supported Frontmatter Fields

- `title` - Article title
- `description` - Meta description and excerpt
- `publishAt` - Publication date (YYYY-MM-DD)
- `category` - Article category
- `slug` - URL slug for the article
- `updatedAt` - Last updated date (optional)

## 🛠️ Development

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm check

# Format code
pnpm format
```

## 📂 Project Structure

```
src/
├── content/           # Markdown articles
├── lib/
│   ├── components/    # Reusable Svelte components
│   ├── styles/        # Global CSS and theme
│   ├── utils/         # Utility functions
│   └── types.ts       # TypeScript definitions
├── routes/            # SvelteKit routes
└── app.html           # HTML template
```

## 🎨 Customization

### Theme Colors

Edit `src/lib/styles/theme.css` to customize colors:

```css
:root {
  --color-sea-blue: #04a5bb;
  --color-dark-sea-blue: #00758f;
  /* Add your custom colors */
}
```

### Components

The blog uses modular components in `src/lib/components/`:

- `ui/` - Main UI components
- `icons/` - SVG icon components
- `content/` - Content-specific components

## 🚀 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build settings:
   - Build command: `pnpm build`
   - Publish directory: `build`
4. Deploy!

The blog includes:

- Automatic sitemap generation
- Dynamic SSL certificates
- CDN distribution
- Form handling support

### Other Platforms

The blog uses `@sveltejs/adapter-auto` which automatically detects and configures for:

- Vercel
- Netlify
- Cloudflare Pages
- And more...

## 📊 Performance

- **Lighthouse Score**: 100/100 across all metrics
- **Bundle Size**: < 50KB JavaScript
- **Time to Interactive**: < 1s
- **Core Web Vitals**: Excellent

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Site**: [abdrizik.xyz](https://abdrizik.xyz)
- **Author**: [Abdelrahman Rizik](https://github.com/abdrizik)
- **Built with**: [SvelteKit](https://kit.svelte.dev/)

---

Built with ❤️ by Abdelrahman Rizik
