# AstroSoft Technology

A modern, responsive website for AstroSoft Technology - a software development and consulting agency specializing in enterprise-grade applications, UI/UX design, and digital transformation.

## 🚀 Features

- **Responsive Design** - Fully mobile-optimized with desktop and mobile-specific navigation
- **Multi-Page Site** - Home, Services, About, Careers, and Contact pages
- **Work Portfolio** - Interactive carousel showcasing 5+ completed projects with tech stacks and descriptions
- **Team Leadership** - Leadership section with grayscale images that colorize on hover with bio overlays
- **Service Overview** - Detailed service cards and process workflow visualization
- **Career Opportunities** - Expandable job postings with application links
- **Contact Forms** - Get in touch form with integrated contact information
- **Smooth Animations** - CSS-based fade-up animations and hover effects throughout
- **Tech Stack Showcase** - Colorized technology badges with icons for each project

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Language**: TypeScript
- **Image Optimization**: Next.js Image component
- **UI Components**: Custom React components

## 📁 Project Structure

```
app/
├── page.tsx                 # Home page with hero, services, work carousel
├── layout.tsx               # Root layout with navigation and footer
├── globals.css              # Global styles and animations
├── about/
│   └── page.tsx            # About page with leadership team
├── services/
│   └── page.tsx            # Services overview and process steps
├── contact/
│   └── page.tsx            # Contact form and company info
├── careers/
│   └── page.tsx            # Job postings with expandable details
└── components/
    ├── NavBar.tsx          # Navigation component
    └── Footer.tsx          # Footer with company info and links
public/
└── images/                 # Static images and assets
```

## 🏃 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AstroSoft-Technology/astrosoft-technology.git
cd astrosoft-technology
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Pages

- **Home** (`/`) - Landing page with hero section, services grid, highlights, and work portfolio carousel
- **Services** (`/services`) - Detailed service offerings and delivery process
- **About** (`/about`) - Company overview and leadership team with interactive bios
- **Careers** (`/careers`) - Open positions with full job descriptions
- **Contact** (`/contact`) - Contact form and multiple communication channels

## 🎨 Customization

### Add Projects
Edit the `work` array in `app/page.tsx` to add new portfolio items:
```typescript
{
  name: "Project Name",
  link: "https://project-link.com",
  detail: "Project description",
  image: "data:image/svg+xml,...", // SVG or image URL
  tech: ["React", "Next.js", "Tailwind"], // Tech stack
}
```

### Update Contact Info
Modify contact details in:
- `app/layout.tsx` - Footer contact section
- `app/contact/page.tsx` - Contact page information

### Modify Animations
Adjust animation timing and effects in `app/globals.css`:
- `.animate-fade-up` - Fade and slide up animation
- Staggered delays via inline `style={{ animationDelay }}`

## 🚀 Deployment

### Deploy on Vercel

The simplest way to deploy is using [Vercel](https://vercel.com):

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically detects Next.js and configures the build
4. Deploy with a single click

```bash
npm run build
npm run start
```

### Build for Production

```bash
npm run build
```

## 📦 Dependencies

- `next` - React framework
- `react` - UI library
- `tailwindcss` - Utility-first CSS framework

## 🔗 Links

- [Website](https://astrosoft-technology.com)
- [GitHub](https://github.com/AstroSoft-Technology/astrosoft-technology)
- [Services](https://astrosoft-technology.com/services)
- [Contact](https://astrosoft-technology.com/contact)

## 📧 Contact

For inquiries:
- Email: contact@astrosofttect.dev
- Phone: +94 76 669 2333
- WhatsApp: +94 76 669 2333

## 📄 License

This project is proprietary and maintained by AstroSoft Technology.
