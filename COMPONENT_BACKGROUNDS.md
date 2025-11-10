# Component Background Colors

This document lists all components and their background colors as per the original HTML design.

## Components with Backgrounds

### 1. **Body** (Layout)
- **Light Mode**: `bg-background-light` (#F8F6F2 - Cream)
- **Dark Mode**: `bg-background-dark` (#1C1C1C - Dark Gray)
- **Text**: `text-text-light dark:text-text-dark`

### 2. **Header**
- **Background**: `bg-green-dark` (#1A3A34 - Forest Green)
- **Text**: White

### 3. **Hero Section**
- **Background**: `bg-green-dark` (#1A3A34 - Forest Green)
- **Text**: White
- **Decorative Element**: Curved bottom with body background color

### 4. **About Section**
- **Background**: Inherits from body (transparent)
- Uses default body background colors

### 5. **Products Section**
- **Background**: Inherits from body (transparent)
- **Product Cards**: `bg-white dark:bg-gray-800`

### 6. **Why Choose Us Section**
- **Background**: `bg-white dark:bg-gray-800`
- **Benefit Cards**: `bg-background-light dark:bg-background-dark`

### 7. **Gallery Section**
- **Background**: Inherits from body (transparent)
- Uses default body background colors

### 8. **Testimonials Section**
- **Background**: Inherits from body (transparent)
- **Testimonial Card**: `bg-white dark:bg-gray-800`
- **Decorative Circle**: `bg-green-dark/20 dark:bg-green-dark/50`

### 9. **FAQ Section**
- **Background**: `bg-white dark:bg-gray-800`
- **FAQ Items**: `bg-background-light dark:bg-background-dark`

### 10. **Contact Section**
- **Background**: `bg-background-light dark:bg-background-dark`
- **Form & Info Cards**: `bg-white dark:bg-gray-800`

### 11. **Footer**
- **Background**: `bg-brown-dark` (#422B22 - Brown)
- **Text**: White
- **Newsletter Box**: `bg-green-dark` (#1A3A34 - Forest Green)

## Color Palette

```css
--color-primary: #EA580C (Orange)
--color-background-light: #F8F6F2 (Cream)
--color-background-dark: #1C1C1C (Dark Gray)
--color-green-dark: #1A3A34 (Forest Green)
--color-brown-dark: #422B22 (Brown)
--color-text-light: #333333 (Dark Gray)
--color-text-dark: #E5E7EB (Light Gray)
--color-subtle-light: #6B7280 (Gray)
--color-subtle-dark: #9CA3AF (Light Gray)
```

## Visual Pattern

The design follows an alternating background pattern:

1. **Header** - Green Dark 🟢
2. **Hero** - Green Dark 🟢
3. **About** - Body Default (Cream/Dark) 🟡
4. **Products** - Body Default (Cream/Dark) 🟡
5. **Why Choose Us** - White/Gray ⚪
6. **Gallery** - Body Default (Cream/Dark) 🟡
7. **Testimonials** - Body Default (Cream/Dark) 🟡
8. **FAQ** - White/Gray ⚪
9. **Contact** - Body Default (Cream/Dark) 🟡
10. **Footer** - Brown Dark 🟤

This creates visual rhythm and helps users distinguish between different sections.

