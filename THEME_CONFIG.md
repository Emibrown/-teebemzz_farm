# Theme Configuration

## Current Setup: Light Mode Only

The site is now configured to **always use light mode by default** and does **not respond to system theme preferences**.

## How It Works

### Default Behavior
- Site loads in **light mode** for all users
- System dark mode preference is **ignored**
- Consistent experience across all devices

### CSS Configuration

```css
/* Always light mode by default */
:root {
  --background: #F8F6F2;
  --foreground: #333333;
}

/* Dark mode only when manually enabled with .dark class */
.dark {
  --background: #1C1C1C;
  --foreground: #E5E7EB;
}
```

## Manual Dark Mode (Optional)

If you want to add a dark mode toggle in the future, you can enable it by adding the `dark` class to the `<html>` element:

```tsx
// Example dark mode toggle component
'use client';

import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
    >
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
```

## Advantages of Current Setup

✅ **Consistent Branding**: All users see the same design  
✅ **No Theme Flashing**: No brief flash of wrong theme on load  
✅ **Predictable Experience**: Design looks exactly as intended  
✅ **Simpler Testing**: Only need to test one theme initially  
✅ **Better Control**: You decide when/if to add dark mode

## Component Usage

All components already support dark mode with the `dark:` prefix:

```tsx
// These classes work when .dark is added to <html>
<div className="bg-white dark:bg-gray-800">
  <h1 className="text-text-light dark:text-text-dark">Title</h1>
  <p className="text-subtle-light dark:text-subtle-dark">Description</p>
</div>
```

However, since the `dark` class is never added, only the light mode styles will apply.

## To Re-enable System Theme Detection (Not Recommended)

If you want to restore automatic system theme detection, change this in `app/globals.css`:

```css
/* From this (current - manual only): */
.dark {
  --background: #1C1C1C;
  --foreground: #E5E7EB;
}

/* To this (automatic): */
@media (prefers-color-scheme: dark) {
  :root {
    --background: #1C1C1C;
    --foreground: #E5E7EB;
  }
}
```

## Related Files

- `app/globals.css` - Theme configuration
- `app/layout.tsx` - Root layout (no dark mode class added)
- All components in `/components` - Already support dark mode when enabled

## Future Enhancements

If you want to add a theme toggle later:

1. Create a `ThemeToggle` component
2. Add state management (localStorage to persist choice)
3. Place toggle in Header component
4. Add/remove `dark` class on `<html>` element

