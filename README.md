# Isaac's Impact Hub

A modern, responsive portfolio and professional showcase website built for social entrepreneurs, innovation trainers, and impact-driven leaders. This site highlights expertise in entrepreneurship training, startup mentorship, business development, and community empowerment across multiple regions.

## 🌟 Features

- **Professional Portfolio**: Showcase your experience, programs, and impact with a beautiful, modern design
- **Impact Statistics**: Display metrics and achievements with animated counters
- **Program Showcase**: Highlight entrepreneurship bootcamps, incubation programs, youth labs, and business workshops
- **Experience Timeline**: Timeline view of professional background and achievements
- **Blog Integration**: Share insights and thought leadership with an integrated blog section
- **Speaking Engagements**: Dedicated section for conference talks and presentations
- **Contact & Inquiry Form**: Easy way for visitors to get in touch
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Dark Mode Support**: Built-in theme support with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite (lightning-fast development and production builds)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: React Router v6
- **Animations**: Framer Motion for smooth, professional animations
- **Forms**: React Hook Form with Zod validation
- **Testing**: Vitest for unit testing
- **E2E Testing**: Playwright
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Package Manager**: Bun (modern, fast JavaScript runtime)

## 📦 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # shadcn/ui component library
│   ├── Hero.tsx        # Hero banner section
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer component
│   └── ...             # Other feature components
├── pages/              # Page components (routed)
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Impact.tsx
│   ├── Programs.tsx
│   ├── Speaking.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── data/               # Static data and configuration
│   ├── programs.ts     # Program definitions
│   ├── experience.ts   # Professional experience
│   └── blogPosts.ts    # Blog post content
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Root component with routing
└── main.tsx            # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** or **Bun** installed
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd isaac-s-impact-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or with Bun
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or with Bun
   bun run dev
   ```

   The application will open at `http://localhost:8080` with hot module replacement enabled.

## 📝 Available Scripts

```bash
# Development server with auto-reload
npm run dev

# Build for production
npm run build

# Build for development with source maps
npm run build:dev

# Preview the production build locally
npm run preview

# Run linting with ESLint
npm run lint

# Run tests with Vitest
npm run test

# Run tests in watch mode
npm run test:watch
```

## 🎨 Customization

### Update Personal Information

- **Experience**: Edit [src/data/experience.ts](src/data/experience.ts)
- **Programs**: Edit [src/data/programs.ts](src/data/programs.ts)
- **Blog Posts**: Edit [src/data/blogPosts.ts](src/data/blogPosts.ts)

### Styling

The project uses Tailwind CSS with a custom configuration in [tailwind.config.ts](tailwind.config.ts). Adjust colors, fonts, and spacing to match your brand.

### Pages

Each page is a separate component in [src/pages/](src/pages/):
- Modify content directly in the respective page components
- The routing is configured in [src/App.tsx](src/App.tsx)

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Watch mode for development
npm run test:watch

# E2E tests with Playwright
npx playwright test
```

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The optimized build will be generated in the `dist/` directory.

### Deploy to Common Platforms

**Vercel**
```bash
vercel deploy
```

**Netlify**
```bash
netlify deploy --prod --dir=dist
```

**GitHub Pages**
- Set up GitHub Actions workflow for automatic deployments

## 🔧 Development Workflow

### Code Quality

- **Linting**: Run `npm run lint` to check code style
- **Type Safety**: Full TypeScript support for type checking
- **Component Library**: Use shadcn/ui components for consistency

### Adding New Pages

1. Create a new file in `src/pages/`
2. Add the route in [src/App.tsx](src/App.tsx)
3. Add navigation link in [src/components/Navbar.tsx](src/components/Navbar.tsx)

### Adding New Components

1. Create component in `src/components/`
2. Use shadcn/ui components for UI elements
3. Add TypeScript types for props

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📧 Contact & Support

For questions, collaborations, or inquiries about programs and services, please use the contact form on the website or reach out directly.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
