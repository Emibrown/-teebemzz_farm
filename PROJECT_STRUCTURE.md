# Teebemzz Farms - Project Structure

This document explains the organization and architecture of the Teebemzz Farms website.

## Directory Structure

```
teebemzz_web/
├── app/
│   ├── layout.tsx          # Root layout with metadata and font configuration
│   ├── page.tsx            # Main home page that assembles all components
│   └── globals.css         # Global styles with custom Tailwind theme
├── components/
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── Hero.tsx            # Hero section with CTA
│   ├── About.tsx           # About section with features
│   ├── Products.tsx        # Products grid showcase
│   ├── WhyChooseUs.tsx     # Benefits section
│   ├── Gallery.tsx         # Farm gallery with alternating layouts
│   ├── Testimonials.tsx    # Customer testimonials with carousel
│   ├── FAQ.tsx             # Frequently Asked Questions accordion
│   ├── Contact.tsx         # Contact form and information
│   ├── Footer.tsx          # Footer with links and newsletter
│   └── index.ts            # Component exports
├── constants/
│   └── index.ts            # All static content and data
├── types/
│   └── index.ts            # TypeScript interfaces and types
└── tsconfig.json           # TypeScript configuration with path aliases
```

## Architecture Overview

### 1. **Components** (`/components`)
Each section of the website is a separate, self-contained component:

- **Header**: Client component with mobile menu state
- **Hero**: Landing section with hero image and CTA
- **About**: Company information with feature highlights
- **Products**: Product cards in a responsive grid
- **WhyChooseUs**: Benefits grid with icons
- **Gallery**: Alternating image/text layout
- **Testimonials**: Client component with carousel functionality
- **FAQ**: Accordion component with expandable questions
- **Contact**: Client component with form handling
- **Footer**: Links, newsletter signup, and social media

### 2. **Types** (`/types`)
All TypeScript interfaces are centralized for type safety:

- `Product`: Product information structure
- `Feature`: Feature with icon and description
- `Benefit`: Benefits/advantages structure
- `GalleryItem`: Gallery items with alternating layouts
- `Testimonial`: Customer testimonial structure
- `FAQItem`: FAQ question and answer
- `ContactInfo`: Contact details
- `FooterSection` & `FooterLink`: Footer structure

### 3. **Constants** (`/constants`)
All static content is stored in a single constants file:

- Site branding (name, tagline)
- Navigation links
- Hero content
- About content
- Products list
- Features array
- Benefits array
- Gallery items
- Testimonials
- FAQ items
- Contact information
- Footer sections and links
- Social media links

### 4. **Styling**
The project uses Tailwind CSS v4 with:

- Custom color palette defined in `globals.css`
- Material Icons Outlined for icons
- Poppins font family
- Dark mode support
- Custom border radius values

#### Custom Colors:
- `primary`: Orange (#EA580C)
- `background-light`: Cream (#F8F6F2)
- `background-dark`: Dark gray (#1C1C1C)
- `green-dark`: Forest green (#1A3A34)
- `brown-dark`: Brown (#422B22)
- `text-light`: Dark gray (#333333)
- `text-dark`: Light gray (#E5E7EB)
- `subtle-light`: Gray (#6B7280)
- `subtle-dark`: Light gray (#9CA3AF)

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: `md` (768px), `lg` (1024px)
- Mobile menu for navigation
- Adaptive grid layouts

### Client vs Server Components
- **Server Components** (default): Header content, Hero, About, Products, WhyChooseUs, Gallery, FAQ, Contact display, Footer
- **Client Components** (`'use client'`): Header (menu state), Testimonials (carousel), Contact (form handling)

### Image Optimization
- Uses Next.js `Image` component for automatic optimization
- Proper alt text for accessibility
- Priority loading for hero image

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states on interactive elements

## Data Flow

1. **Constants** define all content
2. **Types** ensure type safety
3. **Components** consume constants with proper typing
4. **Main page** assembles components in order

## Customization Guide

### To Add a New Section:
1. Create a new component in `/components`
2. Add data types to `/types/index.ts`
3. Add content to `/constants/index.ts`
4. Import and use in `/app/page.tsx`

### To Modify Content:
- Edit `/constants/index.ts` only
- No need to touch component files

### To Change Styling:
- Modify color values in `/app/globals.css`
- Add new Tailwind classes in components

### To Add New Products/Features:
- Add items to respective arrays in `/constants/index.ts`
- Components will automatically render new items

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS
- **Poppins Font** - Typography
- **Material Icons Outlined** - Icon set
- **React 19** - UI library

## Best Practices Implemented

1. **Separation of Concerns**: Components, types, and data are separated
2. **Type Safety**: Full TypeScript coverage
3. **Reusability**: Components are modular and reusable
4. **Performance**: Image optimization, server components
5. **Maintainability**: Clear structure, well-documented
6. **Scalability**: Easy to add new sections or modify content
7. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
8. **Responsive**: Mobile-first design with proper breakpoints

