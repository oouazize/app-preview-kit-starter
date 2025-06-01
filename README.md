# Mobile App Landing Page

A modern, SEO-optimized landing page built with Next.js 14, TypeScript, and Tailwind CSS. This landing page is designed to showcase mobile applications with a focus on performance, accessibility, and search engine optimization.

## 🚀 Features

- ⚡️ **Next.js 14** - Latest features from the React framework
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- 🔍 **SEO Optimized** - Built-in SEO best practices
  - Dynamic sitemap generation
  - Robots.txt configuration
  - JSON-LD structured data
  - OpenGraph and Twitter cards
  - Meta tags optimization
- 📊 **Analytics Ready** - Easy integration with your analytics platform
- 🌐 **PWA Support** - Progressive Web App capabilities
- ♿️ **Accessibility** - WCAG compliance features

## 📦 Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/oouazize/app-preview-kit-starter
cd app-preview-kit-starter
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Start the development server:

```bash
pnpm dev
```

Visit `http://localhost:3000` to see your application.

## 🛠 Configuration

### Landing Page Content

Edit `lib/landing-config.ts` to customize:

- Brand information
- Navigation links
- Hero section content
- Features
- Call-to-action sections
- Footer content

### SEO Configuration

1. Update metadata in `lib/metadata.ts`:

- Site description
- Keywords
- Social media handles
- Verification IDs

2. Customize structured data in `components/json-ld.tsx`:

- App ratings
- Pricing information
- Company details

### Required Assets

Place the following assets in the `public` directory:

- `icon-192x192.png` - Small PWA icon
- `icon-512x512.png` - Large PWA icon
- `og-image.png` - OpenGraph sharing image (1200x630px)
- `twitter-image.png` - Twitter card image
- Your app screenshots in `public/screenshots/`

## 📱 Mobile Screenshots

Place your app screenshots in `public/screenshots/` following the naming convention:

- 1.png
- 2.png
- 3.png
- 4.png
- 5.png

## 🚀 Deployment

This project can be deployed to any platform that supports Next.js:

### Vercel (Recommended)

```bash
pnpm dlx vercel
```

### Static Export

```bash
pnpm build
```

The static files will be generated in the `out` directory.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email oussamaouaziz123@gmail.com or open an issue in this repository.

## ✨ Credits

Built with:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Mobile App Button](https://www.npmjs.com/package/react-mobile-app-button)
