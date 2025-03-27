# Massachusetts Police Accreditation Solutions (MPAS)

A modern, accessible website for Massachusetts Police Accreditation Solutions, a consulting service helping law enforcement agencies achieve and maintain accreditation standards.

![MPAS Website](generated-icon.png)

## Overview

The MPAS website provides a comprehensive online presence for Massachusetts Police Accreditation Solutions, featuring information about accreditation services, process details, resources, and a contact system for police departments seeking consulting services.

## Technologies

- **Frontend**:
  - React 18
  - TypeScript
  - Tailwind CSS
  - Shadcn UI components
  - Framer Motion animations
  - React Hook Form with Zod validation

- **Backend**:
  - Express.js (Node.js)
  - Drizzle ORM
  - Neon Database (Postgres)

- **Build and Development**:
  - Vite
  - ESBuild
  - TSX (TypeScript executor)

## Features

- **Responsive Design**: Fully responsive layout optimized for all device sizes
- **Accessible UI**: WCAG compliant with screen reader support and keyboard navigation
- **SEO Optimized**: Structured data, meta tags, and semantic HTML
- **Modern UI Components**: Shadcn UI integration with custom theming
- **Interactive Forms**: Client and server-side validated contact form
- **Dynamic Content**: Blog section with latest articles
- **Optimized Media**: Responsive images and background video

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mpas-modern.git
   cd mpas-modern
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5001](http://localhost:5001) in your browser.

## Project Structure

```
├── client/                 # Frontend code
│   ├── public/             # Public assets
│   └── src/                # React source code
│       ├── assets/         # Images, videos, etc.
│       ├── components/     # React components
│       │   ├── layout/     # Layout components
│       │   ├── sections/   # Page sections
│       │   └── ui/         # Reusable UI components
│       ├── data/           # Static content data
│       ├── hooks/          # Custom React hooks
│       ├── lib/            # Utilities and helpers
│       └── pages/          # Page components
├── server/                 # Backend code
│   ├── controllers/        # Request handlers
│   └── services/           # Business logic
└── shared/                 # Shared code (types, utils)
```

## Accessibility Features

The site is built with accessibility in mind:

- Semantic HTML5 structure
- ARIA attributes for dynamic content
- Skip-to-content link for keyboard users
- Focus management for keyboard navigation
- Proper heading hierarchy
- Form labels and error states
- Alt text for images and aria-hidden for decorative elements
- Color contrast compliance

## SEO Optimizations

- Structured data (JSON-LD) for organization and services
- Optimized metadata with Open Graph and Twitter tags
- Semantic HTML for better content indexing
- Sitemap.xml for search engine crawling
- Robots.txt configuration
- Canonical URLs
- Responsive design (mobile-friendly)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Run production build
- `npm run check` - TypeScript type checking
- `npm run db:push` - Run database migrations

## Deployment

The application is configured for deployment to any Node.js hosting environment:

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider of choice.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

[MIT](LICENSE)

## Contact

For questions or support, please reach out to [your-email@example.com] 